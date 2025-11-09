// Internationalization (i18n) Object
const i18n = {
    en: {
        sidebarTitle: "Financial Chatbot",
        langPrompt: "Choose Language:",
        toolsTitle: "Quick Financial Tools",
        tools: {
            sip: "SIP Calculator",
            emi: "EMI Calculator",
            fd: "FD Returns",
            goal: "Goal Planner"
        },
        welcomeMsg: "Hello! I am FinHelp, your personal financial guide. What's your main financial goal right now?",
        inputPlaceholder: "Type or speak your message...",
        calculator: {
            sip: {
                title: "SIP Calculator",
                investment: "Monthly Investment (₹)",
                rate: "Expected Return Rate (% p.a.)",
                years: "Time Period (Years)",
                resultTitle: "Maturity Value",
                invested: "Total Invested",
                gains: "Total Gains"
            },
            emi: {
                title: "EMI Calculator",
                amount: "Loan Amount (₹)",
                rate: "Interest Rate (% p.a.)",
                months: "Loan Tenure (Months)",
                resultTitle: "Monthly EMI",
                interest: "Total Interest",
                total: "Total Payment"
            },
            fd: {
                title: "FD Returns Calculator",
                amount: "Total Investment (₹)",
                rate: "Interest Rate (% p.a.)",
                years: "Time Period (Years)",
                resultTitle: "Maturity Value",
                invested: "Total Invested",
                gains: "Total Gains"
            },
            goal: {
                title: "Goal Planner",
                target: "Target Amount (₹)",
                years: "Time Period (Years)",
                rate: "Expected Return Rate (% p.a.)",
                resultTitle: "Monthly SIP Needed"
            },
            calculate: "Calculate",
            close: "Close",
            analyze: "✨ Analyze My Results",
            analyzing: "Analyzing..."
        }
    },
    hi: {
        sidebarTitle: "वित्तीय चैटबॉट",
        langPrompt: "भाषा चुनें:",
        toolsTitle: "त्वरित वित्तीय उपकरण",
        tools: {
            sip: "एसआईपी कैलकुलेटर",
            emi: "ईएमआई कैलकुलेटर",
            fd: "एफडी रिटर्न",
            goal: "लक्ष्य योजनाकार"
        },
        welcomeMsg: "नमस्ते! मैं फिनहेल्प, आपका व्यक्तिगत वित्तीय गाइड हूँ। अभी आपका मुख्य वित्तीय लक्ष्य क्या है?",
        inputPlaceholder: "अपना संदेश लिखें या बोलें...",
        calculator: {
            sip: {
                title: "एसआईपी कैलकुलेटर",
                investment: "मासिक निवेश (₹)",
                rate: "अपेक्षित रिटर्न दर (% प्रति वर्ष)",
                years: "समय अवधि (वर्ष)",
                resultTitle: "परिपक्वता मूल्य",
                invested: "कुल निवेशित",
                gains: "कुल लाभ"
            },
            emi: {
                title: "ईएमआई कैलकुलेटर",
                amount: "ऋण राशि (₹)",
                rate: "ब्याज दर (% प्रति वर्ष)",
                months: "ऋण अवधि (महीने)",
                resultTitle: "मासिक ईएमआई",
                interest: "कुल ब्याज",
                total: "कुल भुगतान"
            },
            fd: {
                title: "एफडी रिटर्न कैलकुलेटर",
                amount: "कुल निवेश (₹)",
                rate: "ब्याज दर (% प्रति वर्ष)",
                years: "समय अवधि (वर्ष)",
                resultTitle: "परिपक्वता मूल्य",
                invested: "कुल निवेशित",
                gains: "कुल लाभ"
            },
            goal: {
                title: "लक्ष्य योजनाकार",
                target: "लक्ष्य राशि (₹)",
                years: "समय अवधि (वर्ष)",
                rate: "अपेक्षित रिटर्न दर (% प्रति वर्ष)",
                resultTitle: "आवश्यक मासिक एसआईपी"
            },
            calculate: "गणना करें",
            close: "बंद करें",
            analyze: "✨ मेरे परिणाम का विश्लेषण करें",
            analyzing: "विश्लेषण कर रहा है..."
        }
    },
    or: {
        sidebarTitle: "ଆର୍ଥିକ ଚାଟବଟ୍",
        langPrompt: "ଭାଷା ବାଛନ୍ତୁ:",
        toolsTitle: "ଶୀଘ୍ର ଆର୍ଥିକ ଉପକରଣ",
        tools: {
            sip: "SIP କାଲକୁଲେଟର",
            emi: "EMI କାଲକୁଲେଟର",
            fd: "FD ରିଟର୍ନସ୍",
            goal: "ଲକ୍ଷ୍ୟ ଯୋଜନାକାରୀ"
        },
        welcomeMsg: "ନମସ୍କାର! ମୁଁ ଫିନହେଲ୍ପ, ଆପଣଙ୍କର ବ୍ୟକ୍ତିଗତ ଆର୍ଥିକ ଗାଇଡ୍ | ବର୍ତ୍ତମାନ ଆପଣଙ୍କର ମୁଖ୍ୟ ଆର୍ଥିକ ଲକ୍ଷ୍ୟ କ'ଣ?",
        inputPlaceholder: "ଆପଣଙ୍କର ବାର୍ତ୍ତା ଟାଇପ୍ କରନ୍ତୁ କିମ୍ବା କୁହନ୍ତୁ...",
        calculator: {
            sip: {
                title: "SIP କାଲକୁଲେଟର",
                investment: "ମାସିକ ନିବେଶ (₹)",
                rate: "ଆଶା କରାଯାଉଥିବା ରିଟର୍ନ ହାର (% p.a.)",
                years: "ସମୟ ଅବଧି (ବର୍ଷ)",
                resultTitle: "ପରିପକ୍ୱତା ମୂଲ୍ୟ",
                invested: "ମୋଟ ନିବେଶ",
                gains: "ମୋଟ ଲାଭ"
            },
            emi: {
                title: "EMI କାଲକୁଲେଟର",
                amount: "ଋଣ ରାଶି (₹)",
                rate: "ସୁଧ ହାର (% p.a.)",
                months: "ଋଣ ଅବଧି (ମାସ)",
                resultTitle: "ମାସିକ EMI",
                interest: "ମୋଟ ସୁଧ",
                total: "ମୋଟ ଦେୟ"
            },
            fd: {
                title: "FD ରିଟର୍ନସ୍ କାଲକୁଲେଟର",
                amount: "ମୋଟ ନିବେଶ (₹)",
                rate: "ସୁଧ ହାର (% p.a.)",
                years: "ସମୟ ଅବଧି (ବର୍ଷ)",
                resultTitle: "ପରିପକ୍ୱତା ମୂଲ୍ୟ",
                invested: "ମୋଟ ନିବେଶ",
                gains: "ମୋଟ ଲାଭ"
            },
            goal: {
                title: "ଲକ୍ଷ୍ୟ ଯୋଜନାକାରୀ",
                target: "ଲକ୍ଷ୍ୟ ରାଶି (₹)",
                years: "ସମୟ ଅବଧି (ବର୍ଷ)",
                rate: "ଆଶା କରାଯାଉଥିବା ରିଟର୍ନ ହାର (% p.a.)",
                resultTitle: "ଆବଶ୍ୟକ ମାସିକ SIP"
            },
            calculate: "ଗଣନା କରନ୍ତୁ",
            close: "ବନ୍ଦ କରନ୍ତୁ",
            analyze: "ଫଳାଫଳ ବିଶ୍ଳେଷଣ କରନ୍ତୁ |",
            analyzing: "ବିଶ୍ଳେଷଣ କରୁଛି..."
        }
    }
};
