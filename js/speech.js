// Speech Functions

const langCodeMap = { en: 'en-US', hi: 'hi-IN', or: 'or-IN' };
let isRecording = false;
let recognition;
let voices = [];

function setupSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const micButton = document.getElementById('mic-button');
    
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = langCodeMap[window.selectedLanguage];

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            const chatInput = document.getElementById('chat-input');
            chatInput.value = transcript;
        };

        recognition.onstart = () => {
            isRecording = true;
            micButton.classList.add('is-recording');
            micButton.title = "Stop recording";
        };

        recognition.onend = () => {
            isRecording = false;
            micButton.classList.remove('is-recording');
            micButton.title = "Speak your message";
        };

        recognition.onerror = (event) => {
            let errorMsg = 'Speech recognition error';
            if (event.error == 'no-speech') {
                errorMsg = 'No speech was detected. Please try again.';
            } else if (event.error == 'audio-capture') {
                errorMsg = 'Microphone problem. Please ensure it is connected and enabled.';
            } else if (event.error == 'not-allowed') {
                errorMsg = 'Permission to use microphone was denied. Please allow it in your browser settings.';
            }
            showError(errorMsg);
        };
    } else {
        micButton.style.display = 'none';
    }
}

function toggleRecording(e) {
    e.preventDefault();
    hideError();
    if (isRecording) {
        recognition.stop();
    } else {
        try {
            recognition.lang = langCodeMap[window.selectedLanguage];
            recognition.start();
        } catch(err) {
            showError("Could not start voice recognition. Please try again.");
        }
    }
}

function loadVoices() {
    const speechSynthesis = window.speechSynthesis;
    voices = speechSynthesis.getVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => voices = speechSynthesis.getVoices();
    }
}

function speakText(text, langCode) {
    const speechSynthesis = window.speechSynthesis;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    let voice = voices.find(v => v.lang === langCode);
    if (!voice) {
        voice = voices.find(v => v.lang.startsWith(langCode.split('-')[0]));
    }
    if (voice) {
        utterance.voice = voice;
    }
    speechSynthesis.speak(utterance);
}

function handleSpeakButtonClick(e) {
    const button = e.target.closest('.speak-btn');
    if (button) {
        const text = button.dataset.text;
        const langCode = langCodeMap[window.selectedLanguage];
        speakText(text, langCode);
    }
}
