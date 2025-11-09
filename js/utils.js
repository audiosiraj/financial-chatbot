// Utility Functions

function formatCurrency(num) {
    const roundedNum = Math.round(num);
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(roundedNum);
}

function updateUIText(lang, element = document) {
    const langData = i18n[lang];
    if (!langData) return;

    element.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        let text = langData;
        try {
            key.split('.').forEach(part => {
                text = text[part];
            });
            if (typeof text === 'string') {
                el.textContent = text;
            }
        } catch (e) {
            console.warn(`i18n key not found: ${key} for lang: ${lang}`);
        }
    });

    if (element === document) {
        const chatInput = document.getElementById('chat-input');
        if (chatInput) {
            chatInput.placeholder = langData.inputPlaceholder || "Type your message...";
        }
    }
}

function setLoading(state) {
    const loadingIndicator = document.getElementById('loading-indicator');
    const sendButton = document.getElementById('send-button');
    const chatInput = document.getElementById('chat-input');
    const micButton = document.getElementById('mic-button');
    
    window.isLoading = state;
    if (state) {
        loadingIndicator.classList.remove('hidden');
        loadingIndicator.classList.add('flex');
        sendButton.disabled = true;
        chatInput.disabled = true;
        micButton.disabled = true;
    } else {
        loadingIndicator.classList.add('hidden');
        loadingIndicator.classList.remove('flex');
        sendButton.disabled = false;
        chatInput.disabled = false;
        micButton.disabled = false;
        chatInput.focus();
    }
}

function showError(text) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = text;
    errorMessage.classList.remove('hidden');
}

function hideError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
}

function updateLangButtons(activeLang) {
    const langButtons = document.querySelectorAll('.lang-btn');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const micButton = document.getElementById('mic-button');
    
    langButtons.forEach(button => {
        if (button.dataset.lang === activeLang) {
            button.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300', 'focus:ring-gray-400');
            button.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'focus:ring-blue-500');
            button.disabled = true;
        } else {
            button.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300', 'focus:ring-gray-400');
            button.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'focus:ring-blue-500');
            button.disabled = false;
        }
    });
    
    chatInput.disabled = false;
    sendButton.disabled = false;
    micButton.disabled = false;
}
