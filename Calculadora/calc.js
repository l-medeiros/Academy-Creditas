let calculo = {
    result: 0,
    number: '',
    currentOper: '',
    nextOper: '',
};

let regexNum = /[\d\.]/g;
let regexSignal = /[\+\-\/\*\=]/g;

calc.addEventListener('click', event => {
    let target = event.target;
    if(target.tagName != 'BUTTON') return;

    if(target.value.match(regexNum)) {
        calculo.number += target.value;
        Display.innerHTML = `${calculo.number}`;
        
        if(target.value === ".") {
            dot.disabled = true;
        }
    }
    else if(target.value.match(regexSignal)) {
        calculo.nextOper = target.value;
        calculo = makeOper(calculo);
        Display.innerHTML = `${calculo.result}`;
    }
    else  {
        calculo = deleteNumber(calculo, target.value);
        if(calculo.number === '') {
            Display.innerHTML = '0';
        }
        else {
            Display.innerHTML = `${calculo.number}`;
        }
    }
});

function makeOper(calculo) {
    
    if(calculo.currentOper === '') {
        calculo.result = +calculo.number;
    }
    else {
        switch(calculo.currentOper) {
            case '+':
                calculo.result += +calculo.number;
                break;    
            case '-':
                calculo.result -= +calculo.number;  
                break;  
            case '*':
                calculo.result *= +calculo.number;    
                break;
            case '/':
                calculo.result /= +calculo.number;    
                break
        }
    }
    
    calculo.currentOper = calculo.nextOper;
    calculo.number  = '';
    calculo.nextOper = '';
    dot.disabled = false;
    return calculo;
}

function deleteNumber(calculo, deleteType) {
    if(deleteType === "C") {
        calculo.result = 0;
        calculo.number = '';
        calculo.currentOper = '';
        calculo.nextOper = '';
        dot.disabled = false;
    }
    else {
        if(calculo.number[calculo.number.length-1] === '.') { 
            dot.disabled = false;
        }
        
        calculo.number = calculo.number.slice(0, -1);
    }
    
    return calculo;
}