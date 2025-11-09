// Session Management Functions

function saveUserSession() {
    const sessionData = {
        chatHistory: window.chatHistory.slice(-10),
        userProfile: window.userProfileData,
        language: window.selectedLanguage,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('finhelp_session', JSON.stringify(sessionData));
}

function loadUserSession() {
    const saved = localStorage.getItem('finhelp_session');
    if (saved) {
        const session = JSON.parse(saved);
        const savedDate = new Date(session.timestamp);
        const today = new Date();
        const hoursDiff = Math.abs(today - savedDate) / 36e5;
        if (hoursDiff < 24) {
            showContinueSessionPrompt(session);
        } else {
            localStorage.removeItem('finhelp_session');
        }
    }
}

function showContinueSessionPrompt(session) {
    const sessionPrompt = document.getElementById('session-prompt');
    const sessionYes = document.getElementById('session-yes');
    const sessionNo = document.getElementById('session-no');
    
    sessionPrompt.classList.remove('hidden');
    sessionYes.onclick = () => {
        window.selectedLanguage = session.language || 'en';
        window.chatHistory = session.chatHistory || [];
        window.userProfileData = session.userProfile || { risk: null, goals: [], progress: [] };
        
        resetChat(false);
        updateLangButtons(window.selectedLanguage);
        updateUIText(window.selectedLanguage);
        
        window.chatHistory.forEach(msg => {
            const { token, jsonString, text } = processBotResponse(msg.parts[0].text);
            let cardHTML = null;
            
            if (jsonString) {
                try {
                    const products = parseProductJSON(jsonString);
                    cardHTML = products.map(createProductCard).join('');
                } catch (e) {
                    // Ignore JSON errors during restore
                }
            }

            const sender = msg.role === 'user' ? 'user' : 'bot';
            
            if (cardHTML) {
                if (text) addMessageToChat(sender, text);
                addMessageToChat(sender, cardHTML, true);
            } else if (text) {
                addMessageToChat(sender, text);
            }
        });
        
        renderUIFromState();
        sessionPrompt.classList.add('hidden');
    };
    
    sessionNo.onclick = () => {
        localStorage.removeItem('finhelp_session');
        sessionPrompt.classList.add('hidden');
        resetChat(true);
    };
}
