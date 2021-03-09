function numberClick(element) {
    if(element.value === '-1') {
        Display.dataset.number *= -1;
    }
    else {
        if(element.value === '.') {
            dot.disabled = true;
        }
        Display.dataset.number += element.value;
    }

    Display.innerText = Display.dataset.number;
}

function signClick(element) {

    if(Display.dataset.oper === '') {
        Display.dataset.result = Display.innerText;
    }

    if(element.value !== '=') {
        Display.dataset.oper = element.value;
        Display.dataset.number  = '';
    }
    
    else {
        switch(Display.dataset.oper) {
            case '+':
                Display.dataset.result = +Display.dataset.result + +Display.dataset.number;
                break;    
            case '-':
                Display.dataset.result -= Display.dataset.number;  
                break;  
            case '*':
                Display.dataset.result *= Display.dataset.number;    
                break;
            case '/':
                Display.dataset.result /= Display.dataset.number;    
                break
        }
    }
    
    Display.innerText = Display.dataset.result;
    dot.disabled = false;

    changeButtonClass();
    element.classList.add("active");
}

function deleteClick(deleteType) {
    if(deleteType.value === "C") {
        Display.dataset.result = 0;
        Display.dataset.number = '';
        Display.dataset.oper = '';
        Display.innerText = 0;
        dot.disabled = false;
        changeButtonClass();
    }
    else {
        if(Display.dataset.number[Display.dataset.number.length-1] === '.') { 
            dot.disabled = false;
        }

        Display.dataset.number = Display.dataset.number.slice(0, -1);
        Display.innerText = Display.dataset.number;
    }
}

function changeButtonClass() {
    let signButtons = document.getElementsByClassName("signButtons");
    for(let i = 0; i < signButtons.length; i++) { 
        signButtons[i].classList.remove("active");
    }
}