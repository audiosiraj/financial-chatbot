// Main Application Initialization

// Global State Variables
window.selectedLanguage = 'en';
window.isLoading = false;
window.chatHistory = [];
window.userProfileData = {
    risk: null,
    goals: [],
    progress: []
};

function handleLanguageSelect(e) {
    const button = e.target.closest('.lang-btn');
    if (!button) return;

    const speechSynthesis = window.speechSynthesis;
    if (speechSynthesis) {
        speechSynthesis.cancel();
    }
    
    window.selectedLanguage = button.dataset.lang;
    updateLangButtons(window.selectedLanguage);
    updateUIText(window.selectedLanguage);
    resetChat();
}

function init() {
    const langSelector = document.getElementById('language-selector');
    const chatForm = document.getElementById('chat-form');
    const micButton = document.getElementById('mic-button');
    const chatMessageList = document.getElementById('chat-message-list');
    const toolsSection = document.getElementById('tools-section');
    const calculatorModalClose = document.getElementById('calculator-modal-close');
    const calculatorModal = document.getElementById('calculator-modal');
    const calculatorModalBody = document.getElementById('calculator-modal-body');

    langSelector.addEventListener('click', handleLanguageSelect);
    chatForm.addEventListener('submit', handleChatSubmit);
    micButton.addEventListener('click', toggleRecording);
    chatMessageList.addEventListener('click', handleSpeakButtonClick);

    toolsSection.addEventListener('click', (e) => {
        const toolBtn = e.target.closest('.tool-btn');
        if (toolBtn) {
            openModal(toolBtn.dataset.tool);
        }
    });
    
    calculatorModalClose.addEventListener('click', closeModal);
    
    calculatorModal.addEventListener('click', (e) => {
        if (e.target === calculatorModal) {
            closeModal();
        }
    });
    
    calculatorModalBody.addEventListener('click', (e) => {
        const analyzeBtn = e.target.closest('.analyze-btn');
        if (analyzeBtn) {
            getCalculatorAdvice(analyzeBtn);
        }
    });

    makeDraggable(
        document.getElementById('calculator-modal-content'), 
        document.getElementById('calculator-modal-header')
    );

    updateLangButtons(window.selectedLanguage);
    updateUIText(window.selectedLanguage);
    loadVoices();
    setupSpeechRecognition();
    loadUserSession();

    if (!localStorage.getItem('finhelp_session')) {
        const initialWelcome = i18n[window.selectedLanguage].welcomeMsg;
        addMessageToChat('bot', initialWelcome);
        window.chatHistory.push({ role: 'model', parts: [{ text: initialWelcome }] });
    }
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
