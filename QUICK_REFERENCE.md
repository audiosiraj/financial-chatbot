# 🚀 Quick Reference Card

## 📁 File Structure at a Glance

```
📦 finacial-chatbot/
├── 📄 index.html          ← Open this to run the app
├── 📁 css/
│   └── styles.css         ← All custom styles
├── 📁 js/
│   ├── i18n.js           ← Languages (add more here)
│   ├── config.js         ← API key (change here)
│   ├── utils.js          ← Helper functions
│   ├── api.js            ← Gemini API calls
│   ├── calculators.js    ← Calculator logic
│   ├── chat.js           ← Chat functionality
│   ├── speech.js         ← Voice features
│   ├── session.js        ← Session storage
│   └── app.js            ← Main initialization
└── 📚 Documentation (8 files)
```

---

## ⚡ Quick Commands

### Test Locally
```bash
# Just open in browser
open index.html

# Or use Python server
python -m http.server 8000
# Visit: http://localhost:8000
```

### Deploy to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Quick Edit
```bash
# Change API key
code js/config.js

# Add language
code js/i18n.js

# Modify styles
code css/styles.css
```

---

## 🎯 Key Files to Modify

| Want to... | Edit this file |
|------------|----------------|
| Change API key | `js/config.js` line 2 |
| Add language | `js/i18n.js` + `index.html` |
| Modify colors | `css/styles.css` or use Tailwind |
| Add calculator | `js/calculators.js` + `index.html` |
| Change AI behavior | `js/config.js` (SYSTEM_PROMPT) |
| Update translations | `js/i18n.js` |

---

## 🐛 Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| API not working | Check internet, verify API key in `js/config.js` |
| Voice not working | Use HTTPS or localhost, grant mic permission |
| CSS not loading | Check path: `css/styles.css` |
| JS errors | Open DevTools Console (F12) |
| Language not changing | Refresh page, check `js/i18n.js` |

---

## 📦 What Each File Does

### HTML
- **index.html** - Main app structure, calculator templates

### CSS
- **styles.css** - Custom animations, modal styles, scrollbars

### JavaScript
- **i18n.js** - All translations (EN, HI, OR)
- **config.js** - API key & system prompts
- **utils.js** - Formatting, UI updates, error handling
- **api.js** - Gemini API with retry logic
- **calculators.js** - SIP, EMI, FD, Goal calculations + AI analysis
- **chat.js** - Message handling, JSON parsing, UI rendering
- **speech.js** - Voice input/output
- **session.js** - LocalStorage save/restore
- **app.js** - Initialize everything

---

## 🎨 Customization Quick Tips

### Change Colors
```css
/* In css/styles.css or use Tailwind classes */
.chat-bubble-user {
    @apply bg-purple-600 text-white; /* Change blue to purple */
}
```

### Add New Language
```javascript
// In js/i18n.js
const i18n = {
    // ... existing languages
    ta: { // Tamil
        sidebarTitle: "நிதி சாட்பாட்",
        // ... add all translations
    }
};

// In js/speech.js
const langCodeMap = { 
    // ... existing
    ta: 'ta-IN' 
};
```

### Change AI Personality
```javascript
// In js/config.js
const SYSTEM_PROMPT_TEMPLATE = `
You are a funny, casual financial advisor...
// Modify the prompt here
`;
```

---

## 🚀 Deployment Options

| Platform | Ease | Speed | Free? |
|----------|------|-------|-------|
| GitHub Pages | ⭐⭐⭐ | 2 min | ✅ Yes |
| Netlify | ⭐⭐⭐⭐⭐ | 30 sec | ✅ Yes |
| Vercel | ⭐⭐⭐⭐ | 1 min | ✅ Yes |
| Traditional Host | ⭐⭐ | 5 min | 💰 Varies |

**Recommended**: Netlify (drag & drop)

---

## 📊 Feature Checklist

✅ AI Chatbot (Gemini)  
✅ 3 Languages (EN, HI, OR)  
✅ 4 Calculators (SIP, EMI, FD, Goal)  
✅ Voice Input/Output  
✅ Session Persistence  
✅ Progress Tracker  
✅ Achievement System  
✅ Draggable Modals  
✅ Mobile Responsive  
✅ Error Handling  

---

## 🔧 Development Workflow

1. **Local Test**: Open `index.html`
2. **Make Changes**: Edit relevant files
3. **Test Again**: Refresh browser
4. **Commit**: `git add . && git commit -m "message"`
5. **Push**: `git push`
6. **Auto-Deploy**: (if using Netlify/Vercel)

---

## 📚 Documentation Guide

| Doc File | When to Read |
|----------|-------------|
| **PROJECT_COMPLETE.md** | 👉 **Start here!** Overview |
| **README.md** | Full feature list & guide |
| **SETUP.md** | First-time setup |
| **DEPLOYMENT.md** | Ready to deploy |
| **CONTRIBUTING.md** | Want to contribute |
| **CHANGELOG.md** | Version history |

---

## 💡 Pro Tips

1. **API Key**: Get your own from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. **Test Voice**: Requires HTTPS (or localhost)
3. **Mobile Test**: Use Chrome DevTools mobile emulation
4. **Debug**: F12 → Console for errors
5. **Tailwind**: Use [Tailwind Cheat Sheet](https://tailwindcomponents.com/cheatsheet/)

---

## 🎯 One-Line Commands

```bash
# Test locally
python -m http.server 8000

# Git init & push
git init && git add . && git commit -m "init" && git remote add origin URL && git push -u origin main

# Find file
grep -r "searchTerm" .

# Count lines
find . -name "*.js" | xargs wc -l
```

---

## 🆘 Need Help?

1. Check **README.md** for detailed docs
2. Open **DevTools Console** (F12) for errors
3. Review **DEPLOYMENT.md** for hosting issues
4. Check **CONTRIBUTING.md** for code guidelines
5. Create GitHub issue

---

## ⭐ Quick Stats

- **Files**: 23 total
- **JS Modules**: 9
- **Languages**: 3
- **Calculators**: 4
- **Docs**: 8
- **Code Size**: ~52KB
- **Doc Size**: ~38KB

---

**🎉 You're all set! Happy coding!**

*Last Updated: Nov 9, 2024*
