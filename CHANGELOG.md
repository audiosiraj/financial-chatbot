# Changelog

All notable changes to the FinHelp Financial Chatbot project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-09

### Added - Initial Release
- **AI-Powered Chatbot**
  - Integration with Google Gemini 2.5 Flash API
  - Natural language financial advice
  - Contextual conversation flow
  - Product recommendation system with JSON parsing
  - Retry logic for incomplete API responses
  
- **Multilingual Support**
  - English interface and responses
  - Hindi (हिंदी) interface and responses
  - Odia (ଓଡ଼ିଆ) interface and responses
  - Dynamic language switching
  - Internationalization system (i18n)

- **Financial Calculators**
  - SIP (Systematic Investment Plan) Calculator
  - EMI (Equated Monthly Installment) Calculator
  - FD (Fixed Deposit) Returns Calculator
  - Goal-based Investment Planner
  - AI-powered analysis for all calculators
  - Indian Rupee (₹) formatting

- **Voice Features**
  - Speech recognition for user input
  - Text-to-speech for bot responses
  - Multi-language voice support
  - Visual recording indicators

- **User Experience**
  - Clean, modern UI with Tailwind CSS
  - Responsive design for mobile/desktop
  - Draggable calculator modals
  - Progress tracker with 4 steps
  - Achievement badge system
  - Session persistence (24 hours)
  - Custom scrollbars and animations

- **Developer Features**
  - Modular code architecture (9 JS files)
  - Separation of concerns
  - Comprehensive error handling
  - API retry logic with exponential backoff
  - LocalStorage for session management

### Project Structure
- Organized into logical directories (css/, js/)
- Separated HTML, CSS, and JavaScript
- Clear file naming conventions
- Comprehensive documentation

### Documentation
- README.md with full feature list
- SETUP.md for quick start guide
- CONTRIBUTING.md for contributors
- LICENSE (MIT)
- .gitignore for version control
- PROJECT_SUMMARY.md for overview

### Fixed
- Proper error handling for API failures
- JSON parsing with validation
- Incomplete response detection and retry
- Speech API error messages
- Session restore functionality

### Technical Details
- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS + Custom CSS
- **API**: Google Gemini 2.5 Flash
- **Storage**: LocalStorage
- **Speech**: Web Speech API

---

## Future Versions (Planned)

### [1.1.0] - Planned
- Add more financial calculators (PPF, NPS, Tax)
- Chart visualizations for projections
- PDF report generation
- Enhanced mobile experience
- Dark mode support

### [2.0.0] - Planned
- User authentication
- Cloud storage for sessions
- WhatsApp/Telegram integration
- Live market data integration
- Progressive Web App (PWA)
- Multi-user profiles

---

**Note**: This is the initial restructured release of the financial chatbot project, migrated from a single HTML file to a modular, production-ready structure.
