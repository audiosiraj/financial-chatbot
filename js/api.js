// API Functions

async function callGeminiWithRetry(payload) {
    let response;
    let retries = 3;
    let delay = 1000;

    for (let i = 0; i < retries; i++) {
        try {
            response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const result = await response.json();
                
                if (!result.candidates || result.candidates.length === 0 || !result.candidates[0].content) {
                    if (result.promptFeedback && result.promptFeedback.blockReason) {
                        console.warn(`Gemini call blocked: ${result.promptFeedback.blockReason}`);
                        throw new Error("My response was blocked for safety reasons. Please try a different query.");
                    }
                    throw new Error("I'm sorry, I couldn't generate a response for that. Could you please rephrase?");
                }
                
                const text = result.candidates[0].content.parts[0].text;
                
                if (!text) {
                     throw new Error("Received an empty response from the AI.");
                }
                
                return text;
            } else if (response.status === 429 || response.status >= 500) {
                console.warn(`Gemini API error ${response.status}, retrying...`);
                throw new Error(`Server error: ${response.status}`);
            } else {
                const errorResult = await response.json();
                console.error("Gemini API client error:", errorResult);
                throw new Error(`API error: ${errorResult.error.message}`);
            }

        } catch (error) {
            if (i < retries - 1) {
                await new Promise(resolve => setTimeout(resolve, delay));
                delay *= 2;
            } else {
                throw error;
            }
        }
    }
    throw new Error("Failed to get a response from the AI after multiple attempts.");
}

async function callGeminiAPI(history) {
    const finalSystemPrompt = SYSTEM_PROMPT_TEMPLATE.replace(
        '{LANGUAGE}', 
        i18n[window.selectedLanguage].sidebarTitle || 'English'
    );

    const payload = {
        contents: history,
        systemInstruction: {
            parts: [{ text: finalSystemPrompt }]
        },
        generationConfig: {
            temperature: 0.7,
            topK: 1,
            topP: 1,
            maxOutputTokens: 1024,
        }
    };
    
    return await callGeminiWithRetry(payload);
}

async function callGeminiForAdvice(prompt) {
    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
            temperature: 0.5,
            topK: 1,
            topP: 1,
            maxOutputTokens: 512,
        }
    };
    return await callGeminiWithRetry(payload);
}
