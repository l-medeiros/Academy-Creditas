let calculation = {
    result: 0,
    displayNumber: '',
    currentOper: '',
    nextOper: '',
};

let regexNum = /[\d\.]/g;
let regexSign = /[\+\-\/\*\=]/g;
let signButtons = document.getElementsByClassName("signButtons");

calc.addEventListener('click', event => {
    let target = event.target;
    if(target.tagName != 'BUTTON') return;
    
    if(target.value.match(regexNum)) {
        if(target.value === "-1") {
            calculation.displayNumber = '' + (-1* +calculation.displayNumber);
        }
        else {
            if(target.value === ".") {
                dot.disabled = true;
            }
            calculation.displayNumber += target.value;
        }
        Display.innerHTML = `${calculation.displayNumber}`;
    }
    else if(target.value.match(regexSign)) {
        calculation.nextOper = target.value;
        calculation = makeOperation(calculation);
        Display.innerHTML = `${calculation.result}`;
        
        changeButtonClass();
        target.classList.add("active");
    }
    else  {
        calculation = deletedisplayNumber(calculation, target.value);   
    }
});

function makeOperation(calculation) {

    if(calculation.currentOper === '') {
        calculation.result = +calculation.displayNumber;
    }
    if(calculation.nextOper !== '=') {
        calculation.currentOper = calculation.nextOper;
        calculation.displayNumber  = '';
    }
    else {
        switch(calculation.currentOper) {
            case '+':
                calculation.result += +calculation.displayNumber;
                break;    
            case '-':
                calculation.result -= +calculation.displayNumber;  
                break;  
            case '*':
                calculation.result *= +calculation.displayNumber;    
                break;
            case '/':
                calculation.result /= +calculation.displayNumber;    
                break
        }
    }
    
    
    dot.disabled = false;
    return calculation;
}

function deletedisplayNumber(calculation, deleteType) {
    if(deleteType === "C") {
        calculation.result = 0;
        calculation.displayNumber = '';
        calculation.currentOper = '';
        calculation.nextOper = '';
        dot.disabled = false;
        changeButtonClass();
    }
    else {
        if(calculation.displayNumber[calculation.displayNumber.length-1] === '.') { 
            dot.disabled = false;
        }
        
        calculation.displayNumber = calculation.displayNumber.slice(0, -1);
    }

    if(calculation.displayNumber === '') {
        Display.innerHTML = '0';
    }
    else {
        Display.innerHTML = `${calculation.displayNumber}`;
    }

    return calculation;
}

function changeButtonClass() {
    for(let i = 0; i < signButtons.length; i++) { 
        signButtons[i].classList.remove("active");
    }
}