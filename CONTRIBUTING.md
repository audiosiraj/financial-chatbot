# Contributing to FinHelp

First off, thank you for considering contributing to FinHelp! It's people like you that make FinHelp such a great tool for financial literacy.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed and what behavior you expected**
* **Include screenshots if possible**
* **Include browser version and OS details**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a detailed description of the suggested enhancement**
* **Explain why this enhancement would be useful**
* **List some examples of how this enhancement would be used**

### Pull Requests

* Fill in the required template
* Follow the JavaScript style guide
* Include comments in your code where necessary
* Update documentation as needed
* Test your changes thoroughly

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/finhelp-chatbot.git
   ```
3. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Make your changes and test thoroughly
5. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. Open a Pull Request

## Coding Guidelines

### JavaScript Style Guide

* Use ES6+ features where appropriate
* Use meaningful variable names
* Add comments for complex logic
* Keep functions small and focused
* Use async/await for asynchronous code
* Handle errors appropriately

Example:
```javascript
// Good
async function getUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        throw error;
    }
}

// Avoid
function getData(id) {
    fetch('/api/users/'+id).then(r => r.json()).then(d => console.log(d));
}
```

### CSS Style Guide

* Use Tailwind utility classes where possible
* Custom CSS should go in `css/styles.css`
* Use meaningful class names
* Follow mobile-first responsive design

### File Organization

* HTML: `index.html`
* Styles: `css/styles.css`
* Scripts:
  - `js/app.js` - Application initialization
  - `js/api.js` - API calls
  - `js/chat.js` - Chat functionality
  - `js/calculators.js` - Calculator logic
  - `js/config.js` - Configuration
  - `js/i18n.js` - Translations
  - `js/session.js` - Session management
  - `js/speech.js` - Voice features
  - `js/utils.js` - Utility functions

## Adding New Languages

To add a new language:

1. Open `js/i18n.js`
2. Add your language code and translations:
```javascript
const i18n = {
    en: { /* ... */ },
    hi: { /* ... */ },
    newLang: {
        sidebarTitle: "Title in new language",
        // ... other translations
    }
};
```
3. Add language code to `js/speech.js`:
```javascript
const langCodeMap = { 
    en: 'en-US', 
    hi: 'hi-IN', 
    newLang: 'newLang-COUNTRY' 
};
```
4. Add button to `index.html` language selector
5. Test thoroughly

## Adding New Calculators

To add a new calculator:

1. Create template in `index.html`:
```html
<script type="text/html-template" id="newcalc-calc-template">
    <form id="newcalc-form" class="space-y-4">
        <!-- Your form fields -->
    </form>
</script>
```

2. Add calculator function in `js/calculators.js`:
```javascript
function calculateNewCalc(e) {
    e.preventDefault();
    // Your calculation logic
}
```

3. Add translations to `js/i18n.js`
4. Add button to sidebar in `index.html`
5. Test the calculator thoroughly

## Testing

Before submitting a PR, please test:

* All three languages (English, Hindi, Odia)
* All calculator tools
* Voice input/output
* Session save/restore
* Mobile responsiveness
* Different browsers (Chrome, Firefox, Safari)

## Documentation

* Update README.md if you change functionality
* Add JSDoc comments for new functions
* Update SETUP.md if you change setup process

## Questions?

Feel free to open an issue with the "question" label if you have any questions about contributing!

## Thank You!

Your contributions to open source, large or small, make projects like this possible. Thank you for taking the time to contribute.
