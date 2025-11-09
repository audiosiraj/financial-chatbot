// Calculator Functions

function calculateSIP(e) {
    e.preventDefault();
    const investment = parseFloat(document.getElementById('sip-investment').value);
    const rateInput = parseFloat(document.getElementById('sip-rate').value);
    const years = parseFloat(document.getElementById('sip-years').value);
    
    const rate = rateInput / 100 / 12;
    const months = years * 12;

    const futureValue = investment * (((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate));
    const totalInvested = investment * months;
    const totalGains = futureValue - totalInvested;

    const resultEl = document.getElementById('sip-result');
    const langData = i18n[window.selectedLanguage].calculator.sip;

    const inputs = {
        investment,
        rate: rateInput,
        years,
        futureValue,
        totalInvested
    };

    resultEl.innerHTML = `
        <p>${langData.resultTitle}</p>
        <h4>${formatCurrency(futureValue)}</h4>
        <div class="flex justify-between text-sm mt-3 border-t pt-3">
            <span class="text-gray-600">${langData.invested}:</span>
            <span class="font-medium">${formatCurrency(totalInvested)}</span>
        </div>
        <div class="flex justify-between text-sm mt-1">
            <span class="text-gray-600">${langData.gains}:</span>
            <span class="font-medium text-green-600">${formatCurrency(totalGains)}</span>
        </div>
        <div class="ai-analysis-container mt-4 border-t pt-4">
            <button type="button" class="analyze-btn w-full px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition-colors" data-tool="sip" data-inputs='${JSON.stringify(inputs)}'>
                ✨ <span data-i18n="calculator.analyze">Analyze My Results</span>
            </button>
            <div class="ai-advice-content mt-3 text-sm text-gray-700 p-3 bg-gray-50 rounded-lg hidden"></div>
        </div>
    `;
    resultEl.classList.remove('hidden');
}

function calculateEMI(e) {
    e.preventDefault();
    const p = parseFloat(document.getElementById('emi-amount').value);
    const rateInput = parseFloat(document.getElementById('emi-rate').value);
    const n = parseFloat(document.getElementById('emi-months').value);

    const r = rateInput / 100 / 12;
    const emi = p * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;

    const resultEl = document.getElementById('emi-result');
    const langData = i18n[window.selectedLanguage].calculator.emi;

    const inputs = {
        loanAmount: p,
        rate: rateInput,
        months: n,
        emi,
        totalInterest
    };

    resultEl.innerHTML = `
        <p>${langData.resultTitle}</p>
        <h4>${formatCurrency(emi)}</h4>
        <div class="flex justify-between text-sm mt-3 border-t pt-3">
            <span class="text-gray-600">${langData.interest}:</span>
            <span class="font-medium">${formatCurrency(totalInterest)}</span>
        </div>
        <div class="flex justify-between text-sm mt-1">
            <span class="text-gray-600">${langData.total}:</span>
            <span class="font-medium">${formatCurrency(totalPayment)}</span>
        </div>
        <div class="ai-analysis-container mt-4 border-t pt-4">
            <button type="button" class="analyze-btn w-full px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition-colors" data-tool="emi" data-inputs='${JSON.stringify(inputs)}'>
                ✨ <span data-i18n="calculator.analyze">Analyze My Results</span>
            </button>
            <div class="ai-advice-content mt-3 text-sm text-gray-700 p-3 bg-gray-50 rounded-lg hidden"></div>
        </div>
    `;
    resultEl.classList.remove('hidden');
}

function calculateFD(e) {
    e.preventDefault();
    const p = parseFloat(document.getElementById('fd-amount').value);
    const rateInput = parseFloat(document.getElementById('fd-rate').value);
    const t = parseFloat(document.getElementById('fd-years').value);

    const r = rateInput / 100;
    const n = 4;
    const maturityValue = p * Math.pow((1 + r / n), n * t);
    const totalGains = maturityValue - p;

    const resultEl = document.getElementById('fd-result');
    const langData = i18n[window.selectedLanguage].calculator.fd;

    const inputs = {
        investment: p,
        rate: rateInput,
        years: t,
        maturityValue
    };

    resultEl.innerHTML = `
        <p>${langData.resultTitle}</p>
        <h4>${formatCurrency(maturityValue)}</h4>
        <div class="flex justify-between text-sm mt-3 border-t pt-3">
            <span class="text-gray-600">${langData.invested}:</span>
            <span class="font-medium">${formatCurrency(p)}</span>
        </div>
        <div class="flex justify-between text-sm mt-1">
            <span class="text-gray-600">${langData.gains}:</span>
            <span class="font-medium text-green-600">${formatCurrency(totalGains)}</span>
        </div>
        <div class="ai-analysis-container mt-4 border-t pt-4">
            <button type="button" class="analyze-btn w-full px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition-colors" data-tool="fd" data-inputs='${JSON.stringify(inputs)}'>
                ✨ <span data-i18n="calculator.analyze">Analyze My Results</span>
            </button>
            <div class="ai-advice-content mt-3 text-sm text-gray-700 p-3 bg-gray-50 rounded-lg hidden"></div>
        </div>
    `;
    resultEl.classList.remove('hidden');
}

function calculateGoal(e) {
    e.preventDefault();
    const target = parseFloat(document.getElementById('goal-target').value);
    const years = parseFloat(document.getElementById('goal-years').value);
    const rateInput = parseFloat(document.getElementById('goal-rate').value);
    
    const rate = rateInput / 100 / 12;
    const months = years * 12;

    const monthlySIP = (target * rate) / ((Math.pow(1 + rate, months) - 1) * (1 + rate));

    const resultEl = document.getElementById('goal-result');
    const langData = i18n[window.selectedLanguage].calculator.goal;

    const inputs = {
        target,
        years,
        rate: rateInput,
        monthlySIP
    };

    resultEl.innerHTML = `
        <p>${langData.resultTitle}</p>
        <h4>${formatCurrency(monthlySIP)}</h4>
        <div class="ai-analysis-container mt-4 border-t pt-4">
            <button type="button" class="analyze-btn w-full px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition-colors" data-tool="goal" data-inputs='${JSON.stringify(inputs)}'>
                ✨ <span data-i18n="calculator.analyze">Analyze My Results</span>
            </button>
            <div class="ai-advice-content mt-3 text-sm text-gray-700 p-3 bg-gray-50 rounded-lg hidden"></div>
        </div>
    `;
    resultEl.classList.remove('hidden');
}

async function getCalculatorAdvice(button) {
    const tool = button.dataset.tool;
    const inputs = JSON.parse(button.dataset.inputs);
    const langName = i18n[window.selectedLanguage].sidebarTitle || 'English';
    let prompt = '';

    button.disabled = true;
    button.innerHTML = `✨ <span data-i18n="calculator.analyzing">${i18n[window.selectedLanguage].calculator.analyzing || 'Analyzing...'}</span>`;

    switch (tool) {
        case 'sip':
            prompt = `Act as a friendly financial advisor for a beginner in India. A user calculated that investing ${formatCurrency(inputs.investment)}/month for ${inputs.years} years at ${inputs.rate}% will give them ${formatCurrency(inputs.futureValue)}. 
            Give one short (1-2 sentence) piece of encouraging advice based on this. Is this a good way to build wealth?
            Respond ONLY in the ${langName} language. Keep it under 50 words.`;
            break;
        case 'emi':
            prompt = `Act as a friendly financial advisor for a beginner in India. A user is taking a loan of ${formatCurrency(inputs.loanAmount)} for ${inputs.months} months at ${inputs.rate}%. Their EMI is ${formatCurrency(inputs.emi)} and they will pay ${formatCurrency(inputs.totalInterest)} in interest.
            Give one short (1-2 sentence) piece of simple advice about this EMI or interest. 
            Respond ONLY in the ${langName} language. Keep it under 50 words.`;
            break;
        case 'fd':
            prompt = `Act as a friendly financial advisor for a beginner in India. A user is investing ${formatCurrency(inputs.investment)} in an FD for ${inputs.years} years at ${inputs.rate}% and will get ${formatCurrency(inputs.maturityValue)}.
            Give one short (1-2 sentence) piece of simple advice about this FD investment. Is it good for safety or growth?
            Respond ONLY in the ${langName} language. Keep it under 50 words.`;
            break;
        case 'goal':
            prompt = `Act as a friendly financial advisor for a beginner in India. A user needs to invest ${formatCurrency(inputs.monthlySIP)}/month for ${inputs.years} years at ${inputs.rate}% to reach their goal of ${formatCurrency(inputs.target)}.
            Give one short (1-2 sentence) piece of encouraging advice about this monthly investment. Is this goal achievable?
            Respond ONLY in the ${langName} language. Keep it under 50 words.`;
            break;
    }

    try {
        const advice = await callGeminiForAdvice(prompt);
        const adviceContainer = button.nextElementSibling;
        adviceContainer.innerHTML = advice.replace(/\n/g, '<br>');
        adviceContainer.classList.remove('hidden');
        button.classList.add('hidden');
    } catch (error) {
        console.error("Calculator AI Error:", error);
        const adviceContainer = button.nextElementSibling;
        adviceContainer.innerHTML = "Sorry, I couldn't generate advice. Please try again.";
        adviceContainer.classList.remove('hidden');
        button.disabled = false;
        button.innerHTML = `✨ <span data-i18n="calculator.analyze">${i18n[window.selectedLanguage].calculator.analyze || 'Analyze My Results'}</span>`;
    }
}

function openModal(toolType) {
    closeModal();

    const template = document.getElementById(`${toolType}-calc-template`);
    if (!template) {
        console.error(`Calculator template not found: ${toolType}-calc-template`);
        return;
    }

    const calculatorModalTitle = document.getElementById('calculator-modal-title');
    const calculatorModalBody = document.getElementById('calculator-modal-body');
    const calculatorModal = document.getElementById('calculator-modal');
    const calculatorModalContent = document.getElementById('calculator-modal-content');

    calculatorModalTitle.textContent = i18n[window.selectedLanguage].calculator[toolType].title;
    calculatorModalBody.innerHTML = template.innerHTML;

    updateUIText(window.selectedLanguage, calculatorModalBody);

    const form = calculatorModalBody.querySelector('form');
    if (toolType === 'sip' && form) {
        form.addEventListener('submit', calculateSIP);
    } else if (toolType === 'emi' && form) {
        form.addEventListener('submit', calculateEMI);
    } else if (toolType === 'fd' && form) {
        form.addEventListener('submit', calculateFD);
    } else if (toolType === 'goal' && form) {
        form.addEventListener('submit', calculateGoal);
    }

    calculatorModal.classList.remove('hidden');
    calculatorModal.classList.add('flex');
    
    calculatorModalContent.style.top = '100px';
    calculatorModalContent.style.left = '100px';
    calculatorModalContent.style.transform = 'translate3d(0, 0, 0)'; 
}

function closeModal() {
    const calculatorModal = document.getElementById('calculator-modal');
    const calculatorModalBody = document.getElementById('calculator-modal-body');
    
    calculatorModal.classList.add('hidden');
    calculatorModal.classList.remove('flex');
    calculatorModalBody.innerHTML = '';
}

function makeDraggable(modal, header) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    header.addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", dragEnd);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        
        if (e.target === header || header.contains(e.target)) {
            isDragging = true;
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            
            xOffset = currentX;
            yOffset = currentY;
            
            setTranslate(currentX, currentY, modal);
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }
}
