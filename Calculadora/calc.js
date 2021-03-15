let lastOperation = '';
let currentOperation = '';
let nextNumber = '';
let result = 0;

function updateDisplay(value) {
    Display.innerText = value;
}

function getNextNumber(number) {
    if(number === '-1') {
        nextNumber *= -1;
    }
    else {
        nextNumber += number;
    }
    updateDisplay(nextNumber);
    updateDotSate();
}

function doesOperation(sign) {
    if(currentOperation === '') {
        result = Display.innerText;
        nextNumber = '';
    }
    else if(sign.value !== '=') {
        evaluate(currentOperation);
        nextNumber = '';
    }
    else {
        if(currentOperation === '=') {
            evaluate(lastOperation);
        }
        else {
            evaluate(currentOperation);
            lastOperation = currentOperation;
        }
    }
    
    currentOperation = sign.value;
    updateDisplay(result);
    updateDotSate();
    updateActiveSignButton(sign);
}

function evaluate(operation) {
    if(nextNumber !== '') {
        switch(operation) {
            case '+':
                result = parseFloat(result) + parseFloat(nextNumber);
                break;    
            case '-':
                result -= nextNumber;  
                break;  
            case '*':
                result *= nextNumber;    
                break;
            case '/':
                result /= nextNumber;    
                break
        }
    }
}

function deleteClick(deleteType) {
    if(deleteType.value === "C") {
        result = 0;
        nextNumber = '';
        currentOperation = '';
        lastOperation = '';
        Display.innerText = 0;
        updateActiveSignButton();
    }
    else {
        nextNumber = nextNumber.slice(0, -1);
        Display.innerText = nextNumber;
    }
    updateDotSate();
}

function updateActiveSignButton(currentSign) {
    let signButtons = document.getElementsByClassName("signButtons");
    for(let i = 0; i < signButtons.length; i++) { 
        signButtons[i].classList.remove("active");
    }
    if(typeof(currentSign) !== 'undefined') {
        currentSign.classList.add("active");
    }
}

function updateDotSate() {
    if(nextNumber.includes('.')) {
        dot.disabled = true;
    }
    else {
        dot.disabled = false;
    }
}