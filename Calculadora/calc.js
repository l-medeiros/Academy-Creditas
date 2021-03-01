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
        dot.disabled = false;
    }
    else  {
        calculo = deleteNumber(calculo, target.value);
        if(calculo.number === '') {
            Display.innerHTML = '0';
        }
        else {
            Display.innerHTML = `${calculo.number}`;
        }
        dot.disabled = false;
    }
});

function makeOper(calculo) {

    if(calculo.currentOper === '') {
        calculo.result = +calculo.number;
    }
    else {
        if(calculo.currentOper === '+') {
            calculo.result += +calculo.number;
        }    
        else if(calculo.currentOper === '-') {
            calculo.result -= +calculo.number;
        }    
        else if(calculo.currentOper === '*') {
            calculo.result *= +calculo.number;
        }    
        else if(calculo.currentOper === '/'){
            calculo.result /= +calculo.number;
        }    
    }
    
    calculo.currentOper = calculo.nextOper;
    calculo.number  = '';
    calculo.nextOper = '';
    return calculo;
}

function deleteNumber(calculo, deleteType) {
    if(deleteType === "C") {
        calculo.result = 0;
        calculo.number = '';
        calculo.currentOper = '';
        calculo.nextOper = '';
    }
    else {
        calculo.number = calculo.number.slice(0, -1);
    }

    return calculo;
}