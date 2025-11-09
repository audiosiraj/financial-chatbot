# Quick Setup Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Download/Clone the Project
```bash
git clone https://github.com/yourusername/finhelp-chatbot.git
cd finhelp-chatbot
```

Or download as ZIP and extract.

### Step 2: (Optional) Configure API Key
If you want to use your own Google Gemini API key:
1. Get a free API key from: https://makersuite.google.com/app/apikey
2. Open `js/config.js`
3. Replace the API_KEY value with your key

### Step 3: Run the Application
Simply open `index.html` in your web browser!

**That's it!** 🎉

## 📂 Project Structure

```
finacial-chatbot/
├── index.html              # Main entry point - OPEN THIS FILE
├── css/
│   └── styles.css         # All styling
├── js/
│   ├── app.js            # App initialization
│   ├── api.js            # API calls
│   ├── calculators.js    # Calculator logic
│   ├── chat.js           # Chat functionality
│   ├── config.js         # Configuration & API key
│   ├── i18n.js           # Language translations
│   ├── session.js        # Session management
│   ├── speech.js         # Voice features
│   └── utils.js          # Helper functions
├── README.md              # Full documentation
├── SETUP.md              # This file
└── .gitignore            # Git ignore rules
```

## 🔧 Troubleshooting

### Issue: Chatbot not responding
- **Solution**: Check your internet connection. The app requires internet for the Gemini API.

### Issue: Voice input not working
- **Solution**: 
  - Grant microphone permissions in your browser
  - Use Chrome or Edge (best support)
  - Check if HTTPS is enabled (voice requires secure context)

### Issue: Calculators not opening
- **Solution**: Check browser console for JavaScript errors. Ensure all JS files are loaded.

### Issue: Language not changing
- **Solution**: Refresh the page and try again. The language selector should highlight the selected language.

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ⚠️ Internet Explorer (Not supported)

## 📝 Quick Tips

1. **First Time Use**: Select your preferred language first
2. **Voice Input**: Click the microphone icon and speak clearly
3. **Calculators**: Click the calculator buttons in the sidebar
4. **AI Analysis**: After calculating, click "Analyze My Results" for insights
5. **Session Save**: Your last conversation is automatically saved for 24 hours

## 🔐 Security Note

The default API key is for demonstration purposes. For production use:
1. Get your own API key
2. Never commit API keys to public repositories
3. Use environment variables or backend proxy in production

## 📞 Need Help?

- Check the [README.md](README.md) for detailed documentation
- Open an issue on GitHub
- Contact the maintainers

---

Happy Financial Planning! 💰
