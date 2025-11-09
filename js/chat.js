// Chat Functions

function addMessageToChat(sender, text, isHTML = false) {
    const chatMessageList = document.getElementById('chat-message-list');
    const chatWindowScroller = document.getElementById('chat-window');
    
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble p-4 rounded-lg';
    
    const content = document.createElement('span');
    content.className = 'chat-bubble-content';
    
    if (isHTML) {
        content.innerHTML = text;
    } else {
        content.innerHTML = text.replace(/\n/g, '<br>');
    }
    
    bubble.appendChild(content);

    if (sender === 'user') {
        bubble.classList.add('chat-bubble-user');
    } else {
        bubble.classList.add('chat-bubble-bot');
        
        if (!isHTML) {
            const speakBtn = document.createElement('button');
            speakBtn.className = 'speak-btn';
            speakBtn.title = 'Listen to this message';
            speakBtn.dataset.text = text;
            
            speakBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path d="M7.25 8.25a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM9 8.25a.75.75 0 000 1.5h.5a.75.75 0 000-1.5H9zM10.75 8.25a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM12.5 8.25a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z" />
                  <path fill-rule="evenodd" d="M3.5 6A2.5 2.5 0 016 3.5h8A2.5 2.5 0 0116.5 6v8a2.5 2.5 0 01-2.5 2.5H6A2.5 2.5 0 013.5 14V6zm2.06 1.97a.75.75 0 011.06 0 3.5 3.5 0 010 4.95.75.75 0 11-1.06 1.06 5 5 0 000-7.07.75.75 0 010 1.06z" clip-rule="evenodd" />
                </svg>
            `;
            bubble.appendChild(speakBtn);
        }
    }
    
    chatMessageList.appendChild(bubble);
    chatWindowScroller.scrollTop = chatWindowScroller.scrollHeight;
    
    if (isHTML) {
        attachDynamicListeners(bubble);
    }
}

function extractJSONFromResponse(response) {
    let jsonString = null;
    let remainingText = response;
    let isIncomplete = false;
    
    const codeBlockMatch = response.match(/```json\s*([\s\S]*?)```/);
    if (codeBlockMatch && codeBlockMatch[1]) {
        jsonString = codeBlockMatch[1].trim();
        remainingText = response.replace(codeBlockMatch[0], '').trim();
        
        if (!jsonString.endsWith(']') || !isValidJSONStructure(jsonString)) {
            isIncomplete = true;
        }
        return { jsonString, remainingText, isIncomplete };
    }
    
    const jsonArrayMatch = response.match(/(\[[\s\S]{20,})/);
    if (jsonArrayMatch) {
        const potentialJSON = jsonArrayMatch[1];
        
        if (potentialJSON.includes('name') && potentialJSON.includes('description')) {
            jsonString = potentialJSON;
            remainingText = response.replace(jsonArrayMatch[0], '').trim();
            
            if (!potentialJSON.endsWith(']') || !isValidJSONStructure(potentialJSON)) {
                isIncomplete = true;
            }
        }
    }
    
    return { jsonString, remainingText, isIncomplete };
}

function isValidJSONStructure(jsonString) {
    try {
        if (!jsonString.includes('"name"') || !jsonString.includes('"description"')) {
            return false;
        }
        JSON.parse(jsonString);
        return true;
    } catch (e) {
        return false;
    }
}

function parseProductJSON(jsonString, isRetry = false) {
    try {
        if (!jsonString.trim().endsWith(']')) {
            throw new Error("INCOMPLETE_JSON");
        }
        
        const products = JSON.parse(jsonString);
        
        if (!Array.isArray(products)) {
            throw new Error("Expected an array of products");
        }
        
        if (products.length === 0) {
            throw new Error("No products found in the response");
        }
        
        const validProducts = [];
        const invalidProducts = [];
        
        products.forEach((product, index) => {
            if (product && 
                typeof product.name === 'string' && 
                typeof product.description === 'string' &&
                typeof product.risk === 'string' &&
                typeof product.returns === 'string') {
                validProducts.push(product);
            } else {
                invalidProducts.push(index);
            }
        });
        
        if (validProducts.length === 0) {
            throw new Error("No valid products found");
        }
        
        if (invalidProducts.length > 0) {
            console.warn(`Invalid products at indices: ${invalidProducts.join(', ')}`);
        }
        
        return validProducts;
        
    } catch (error) {
        console.error("JSON parsing failed:", error);
        
        if (error.message === "INCOMPLETE_JSON") {
            if (!isRetry) {
                throw new Error("INCOMPLETE_JSON_RETRY");
            } else {
                throw new Error("I'm having trouble generating a complete plan. The response seems to be cut off. Please try asking for your plan again.");
            }
        }
        
        throw new Error(`I couldn't process the investment plan properly. ${isRetry ? 'Please try asking again.' : 'Let me try to generate it again.'}`);
    }
}

function createProductCard(product) {
    return `
        <div class="product-card my-3">
            <div class="flex justify-between items-start mb-2">
                <h4 class="font-semibold">${product.name}</h4>
                <span class="text-xs px-2 py-1 rounded-full ${product.risk === 'Low' ? 'bg-green-100 text-green-800' : product.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}">${product.risk} Risk</span>
            </div>
            <p class="text-sm text-gray-600 mb-3">${product.description}</p>
            <div class="flex justify-between items-center text-xs">
                <span class="text-gray-700">Expected Returns: <strong class="text-gray-900">${product.returns}</strong></span>
                <button class="learn-more-btn px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition-colors" data-product="${product.name}">Learn More</button>
            </div>
        </div>
    `;
}

function createRetryButton() {
    return `
        <div class="product-card my-3 bg-orange-50 border-orange-200">
            <div class="text-center p-4">
                <p class="text-orange-800 mb-3">I had trouble generating your complete investment plan. The response seems to be cut off.</p>
                <button class="retry-btn" id="retry-json-btn">
                    🔄 Try Generating Plan Again
                </button>
            </div>
        </div>
    `;
}

function processBotResponse(response) {
    let token = null;
    
    const tokenMatch = response.match(/\[STEP_COMPLETE:(\w+)(?::([\w\s]+))?\]/);
    if (tokenMatch) {
        token = {
            step: tokenMatch[1],
            value: tokenMatch[2] || null
        };
        response = response.replace(tokenMatch[0], '').trim();
    }

    const { jsonString, remainingText, isIncomplete } = extractJSONFromResponse(response);
    
    return { token, jsonString, text: remainingText, isIncomplete };
}

function updateProfileState(step, value = null) {
    if (!step) return;

    if (!window.userProfileData.progress.includes(step)) {
        window.userProfileData.progress.push(step);
    }

    if (step === 'goal' && window.userProfileData.goals.length === 0) {
        window.userProfileData.goals.push("New Goal");
    } else if (step === 'risk' && value) {
        window.userProfileData.risk = value;
    }
}

function renderUIFromState() {
    const data = window.userProfileData;
    const progressTracker = document.getElementById('progress-tracker');
    const userProfile = document.getElementById('user-profile');
    const goalsCountEl = document.getElementById('goals-count');
    const riskLevelEl = document.getElementById('risk-level');

    if (data.progress.length > 0) {
        progressTracker.classList.remove('hidden');
        const steps = ['goal', 'time', 'risk', 'recommendation'];
        steps.forEach(s => {
            const dot = document.querySelector(`.step-dot[data-step="${s}"]`);
            if (dot) {
                if (data.progress.includes(s)) {
                    dot.classList.remove('bg-gray-300');
                    dot.classList.add('bg-green-500');
                } else {
                    dot.classList.remove('bg-green-500');
                    dot.classList.add('bg-gray-300');
                }
            }
        });
    } else {
        progressTracker.classList.add('hidden');
    }

    if (data.risk || data.goals.length > 0) {
        userProfile.classList.remove('hidden');
        goalsCountEl.textContent = data.goals.length;
        
        if (data.risk) {
            riskLevelEl.textContent = data.risk;
            let riskColor = 'text-green-800';
            if (data.risk === 'Medium') riskColor = 'text-yellow-800';
            if (data.risk === 'High') riskColor = 'text-red-800';
            riskLevelEl.className = `font-bold ${riskColor}`;
        } else {
            riskLevelEl.textContent = 'Not set';
            riskLevelEl.className = 'font-bold';
        }
    } else {
        userProfile.classList.add('hidden');
    }

    document.getElementById('achieve-goal').classList.toggle('opacity-30', !data.progress.includes('goal'));
    document.getElementById('achieve-risk').classList.toggle('opacity-30', !data.progress.includes('risk'));
    document.getElementById('achieve-invest').classList.toggle('opacity-30', !data.progress.includes('recommendation'));
}

async function handleChatSubmit(e, isRetry = false) {
    if (e) e.preventDefault();
    hideError();
    
    const speechSynthesis = window.speechSynthesis;
    if (speechSynthesis) {
        speechSynthesis.cancel();
    }
    
    const chatInput = document.getElementById('chat-input');
    const userInput = isRetry ? "show me my investment plan" : chatInput.value.trim();
    if (!userInput || window.isLoading) return;

    if (!isRetry) {
        addMessageToChat('user', userInput);
        chatInput.value = '';
    }
    
    window.chatHistory.push({ role: 'user', parts: [{ text: userInput }] });
    setLoading(true);

    try {
        const botResponse = await callGeminiAPI(window.chatHistory);
        window.chatHistory.push({ role: 'model', parts: [{ text: botResponse }] });

        const { token, jsonString, text, isIncomplete } = processBotResponse(botResponse);
        
        if (token) {
            updateProfileState(token.step, token.value);
        }

        let cardHTML = null;
        let products = null;
        let jsonError = null;

        if (jsonString) {
            try {
                products = parseProductJSON(jsonString, isRetry);
                cardHTML = products.map(createProductCard).join('');
                updateProfileState('recommendation');
            } catch (error) {
                jsonError = error.message;
                
                if (error.message === "INCOMPLETE_JSON_RETRY" && !isRetry) {
                    cardHTML = createRetryButton();
                } else {
                    showError(error.message);
                }
            }
        }

        renderUIFromState();

        if (cardHTML) {
            if (text && !jsonError) {
                addMessageToChat('bot', text);
            }
            addMessageToChat('bot', cardHTML, true);
        } else if (text && !jsonError) {
            addMessageToChat('bot', text);
        }

        saveUserSession();

    } catch (error) {
        console.error("API Error:", error);
        showError("Sorry, I'm having trouble connecting. Please try again.");
        if (!isRetry) {
            window.chatHistory.pop();
            window.chatHistory.pop();
        }
    } finally {
        setLoading(false);
    }
}

async function attachDynamicListeners(parentElement) {
    const learnMoreBtns = parentElement.querySelectorAll('.learn-more-btn');
    for (const btn of learnMoreBtns) {
        btn.addEventListener('click', async () => {
            const productName = btn.dataset.product;
            const userMessage = `Tell me more about ${productName}`;
            
            addMessageToChat('user', userMessage);
            window.chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });
            setLoading(true);

            const langName = i18n[window.selectedLanguage].sidebarTitle || 'English';
            const prompt = `Act as a simple financial explainer for a beginner in India. A user wants to know more about "${productName}". 
            Explain what it is, who it is good for, and the main risk, all in 2-3 simple bullet points. 
            Respond ONLY in the ${langName} language. Keep the explanation under 60 words.`;

            try {
                const advice = await callGeminiForAdvice(prompt);
                
                addMessageToChat('bot', advice);
                window.chatHistory.push({ role: 'model', parts: [{ text: advice }] });
                saveUserSession();

            } catch (error) {
                console.error("Learn More AI Error:", error);
                showError("Sorry, I couldn't get more details at this time.");
                window.chatHistory.pop(); 
            } finally {
                setLoading(false);
            }
        });
    }

    const retryBtn = parentElement.querySelector('#retry-json-btn');
    if (retryBtn) {
        retryBtn.addEventListener('click', () => {
            handleChatSubmit(null, true);
        });
    }
}

function resetChat(isNewSession = true) {
    const chatMessageList = document.getElementById('chat-message-list');
    
    chatMessageList.innerHTML = '';
    window.chatHistory = [];
    hideError();
    
    window.userProfileData = { risk: null, goals: [], progress: [] };
    renderUIFromState();
    
    if (isNewSession) {
        const welcomeText = i18n[window.selectedLanguage].welcomeMsg;
        addMessageToChat('bot', welcomeText);
        window.chatHistory.push({ role: 'model', parts: [{ text: welcomeText }] });
    }
}
