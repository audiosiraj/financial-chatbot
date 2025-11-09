# FinHelp - AI-Powered Financial Chatbot 💰

A multilingual financial advisory chatbot designed for Tier-3 town users in India. Built with vanilla JavaScript and powered by Google's Gemini AI, FinHelp provides personalized investment recommendations and financial planning tools.

![FinHelp Banner](https://img.shields.io/badge/FinHelp-Financial%20Chatbot-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

## 🌟 Features

### 💬 Intelligent Chatbot
- **AI-Powered Conversations**: Powered by Google Gemini 2.5 Flash for natural, context-aware financial advice
- **Multilingual Support**: Available in English, Hindi (हिंदी), and Odia (ଓଡ଼ିଆ)
- **Voice Input/Output**: Speech recognition and text-to-speech for hands-free interaction
- **Personalized Recommendations**: Get custom investment plans based on your goals, timeline, and risk profile

### 🧮 Financial Calculators
- **SIP Calculator**: Calculate returns on Systematic Investment Plans
- **EMI Calculator**: Compute loan EMIs and total interest
- **FD Returns Calculator**: Estimate Fixed Deposit maturity values
- **Goal Planner**: Determine monthly SIP needed to reach financial goals
- **AI Analysis**: Get instant AI-powered insights on your calculations

### 📊 User Profile & Progress Tracking
- Track your financial journey through 4 key steps:
  1. Goal Setting
  2. Time Horizon
  3. Risk Assessment
  4. Investment Recommendation
- Achievement badges for milestones
- Session persistence (auto-save last 24 hours)

### 🎨 Modern UI/UX
- Clean, responsive design with Tailwind CSS
- Draggable calculator modals
- Smooth animations and transitions
- Custom scrollbars
- Mobile-friendly interface

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for Gemini API and CDN resources)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/finhelp-chatbot.git
   cd finhelp-chatbot
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - No build process or server required!

### Usage

1. **Select Your Language**: Choose from English, Hindi, or Odia
2. **Chat with FinHelp**: Share your financial goals and answer questions
3. **Get Recommendations**: Receive personalized investment suggestions
4. **Use Calculators**: Access financial tools from the sidebar
5. **Get AI Insights**: Click "Analyze My Results" for expert advice

## 📁 Project Structure

```
finacial-chatbot/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Custom styles and animations
├── js/
│   ├── app.js            # Application initialization
│   ├── api.js            # Gemini API integration
│   ├── calculators.js    # Financial calculator logic
│   ├── chat.js           # Chat functionality
│   ├── config.js         # API configuration & prompts
│   ├── i18n.js           # Internationalization data
│   ├── session.js        # Session management
│   ├── speech.js         # Voice input/output
│   └── utils.js          # Utility functions
└── README.md             # Project documentation
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **Fonts**: Google Fonts (Inter)
- **AI Engine**: Google Gemini 2.5 Flash API
- **Speech**: Web Speech API (Recognition & Synthesis)
- **Storage**: LocalStorage for session persistence

## 🔧 Configuration

### API Key Setup

The application uses Google Gemini API. To use your own API key:

1. Get an API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Open `js/config.js`
3. Replace the API key:
   ```javascript
   const API_KEY = "your-api-key-here";
   ```

### Customization

**Languages**: Add or modify languages in `js/i18n.js`
```javascript
const i18n = {
    en: { /* English translations */ },
    hi: { /* Hindi translations */ },
    // Add your language here
};
```

**System Prompt**: Modify AI behavior in `js/config.js`
```javascript
const SYSTEM_PROMPT_TEMPLATE = `Your custom prompt here...`;
```

## 🎯 Key Components

### Chat System
- Real-time conversation with AI
- Message history tracking
- Product recommendation cards
- "Learn More" functionality for detailed explanations

### Calculator System
- Modular calculator components
- Draggable modal interface
- Real-time calculations
- AI-powered result analysis

### Voice Features
- Speech-to-text input (supports multiple languages)
- Text-to-speech output for bot messages
- Visual recording indicator

### Session Management
- Auto-save conversations (last 10 messages)
- 24-hour session persistence
- Restore session prompt on return
- Profile data preservation

## 🔐 Security & Privacy

- All conversations are processed through Google Gemini API
- Session data stored locally in browser (not sent to servers)
- No personal data collection
- API key should be kept secure (use environment variables in production)

## 🐛 Known Issues & Limitations

- **API Rate Limits**: Free tier Gemini API has usage limits
- **Voice Recognition**: Requires browser support (Chrome, Edge recommended)
- **Offline Mode**: Requires internet for AI features
- **JSON Parsing**: Occasional incomplete responses from AI (retry functionality included)

## 📈 Future Enhancements

- [ ] User authentication & cloud storage
- [ ] More financial calculators (PPF, NPS, Tax calculator)
- [ ] Chart visualizations for investment projections
- [ ] PDF report generation
- [ ] Integration with live market data
- [ ] WhatsApp/Telegram bot integration
- [ ] PWA support for offline usage

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Google Gemini AI for powering the conversational experience
- Tailwind CSS for the beautiful UI framework
- The open-source community for inspiration and support

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on [GitHub](https://github.com/yourusername/finhelp-chatbot/issues)
- Email: your.email@example.com

## 🌐 Demo

Try the live demo: [FinHelp Live](https://yourusername.github.io/finhelp-chatbot)

---

Made with ❤️ for financial inclusion in India
