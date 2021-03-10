let lastOperation = '';
let currentOperation = '';
let nextNumber = '';
let result = 0;

function numberClick(element) {
    if(element.value === '-1') {
        nextNumber *= -1;
    }
    else {
        if(element.value === '.') {
            dot.disabled = true;
        }
        nextNumber += element.value;
    }

    Display.innerText = nextNumber;
}

function signClick(element) {

    if(currentOperation === '') {
        result = Display.innerText;
        currentOperation = element.value;
        nextNumber = '';
    }
    
    else {
        if(element.value !== '=') {
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
        currentOperation = element.value;
    }
    
    Display.innerText = result;
    dot.disabled = false;

    changeButtonClass();
    element.classList.add("active");
}

function deleteClick(deleteType) {
    if(deleteType.value === "C") {
        result = 0;
        nextNumber = '';
        currentOperation = '';
        Display.innerText = 0;
        dot.disabled = false;
        changeButtonClass();
    }
    else {
        if(nextNumber[nextNumber.length-1] === '.') { 
            dot.disabled = false;
        }

        nextNumber = nextNumber.slice(0, -1);
        Display.innerText = nextNumber;
    }
}

function changeButtonClass() {
    let signButtons = document.getElementsByClassName("signButtons");
    for(let i = 0; i < signButtons.length; i++) { 
        signButtons[i].classList.remove("active");
    }
}

function evaluate(operation) {
    if(nextNumber !== '') {
        switch(operation) {
            case '+':
                result = +result + +nextNumber;
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