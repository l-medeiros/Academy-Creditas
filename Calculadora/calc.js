let lastOperation = '';
let currentOperation = '';
let nextNumber = '';
let result = 0;

function numberClick(button) {
    if(button.value === '-1') {
        nextNumber *= -1;
    }
    else {
        nextNumber += button.value;
    }
    
    Display.innerText = nextNumber;
    changeDotState();
}

function signClick(button) {
    if(currentOperation === '') {
        result = Display.innerText;
        nextNumber = '';
    }
    else if(button.value !== '=') {
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
    
    currentOperation = button.value;
    Display.innerText = result;

    changeDotState();
    deleteButtonClass("active");
    button.classList.add("active");
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
        deleteButtonClass("active");
    }
    else {
        nextNumber = nextNumber.slice(0, -1);
        Display.innerText = nextNumber;
    }
    changeDotState();
}

function deleteButtonClass(deletedClass) {
    let signButtons = document.getElementsByClassName("signButtons");
    for(let i = 0; i < signButtons.length; i++) { 
        signButtons[i].classList.remove(deletedClass);
    }
}

function changeDotState() {
    if(nextNumber.includes('.')) {
        dot.disabled = true;
    }
    else {
        dot.disabled = false;
    }
}