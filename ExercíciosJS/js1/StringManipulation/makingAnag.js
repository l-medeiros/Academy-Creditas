'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Exercício
function makeAnagram(a, b) {
    let result = 0;
    let mapA = new Map();
    let mapB = new Map();
    
    mapA = mapping(mapA, a);
    mapB = mapping(mapB, b);
    
    for(let i of mapA.keys()) {
        let k = Math.abs(mapA.get(i) - mapB.get(i));
        
        if(k >= 0) {
            result += k;
        }
        else {
            result += mapA.get(i);
        }
            
        mapA.delete(i);
        mapB.delete(i);
    }
    for(let i of mapB.keys()) {
        let k = Math.abs(mapA.get(i) - mapB.get(i));
        
        if(k >= 0) {
            result += k;
        }
        else {
            result += mapB.get(i);
        }
            
        mapA.delete(i);
        mapB.delete(i);
    }
    
    return result;
}

function mapping(map, string) {
    for(let i of string) {
        if(map.get(i) === undefined) {
            map.set(i, 1);    
        }
        else {
            let k = map.get(i);
            k++;
            map.set(i, k);
        }
    }
    return map;    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}