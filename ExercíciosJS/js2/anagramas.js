function combineAnagrams(words) {
    let wordsInLowerCase = words.slice(); 
    let finalArray = [];

    wordsInLowerCase.forEach((word, index) => {
        wordsInLowerCase[index] = word.toLowerCase();       

        let currentWord = wordsInLowerCase[index].split('');
        currentWord = currentWord.sort().join('');

        wordsInLowerCase[index] = currentWord;               
    });
    
    //Verificar a ocorrência dos anagramas
    wordsInLowerCase.forEach(word => {
        if(word) {
            let indexsArray = [];                        
            let groupOfAnagramas = [];                       
            let nextIndex = wordsInLowerCase.indexOf(word);
            
            while (nextIndex != -1) {
                indexsArray.push(nextIndex);
                nextIndex = wordsInLowerCase.indexOf(word, nextIndex + 1);
            }
            
            indexsArray.forEach(anagramIndex => {      
                groupOfAnagramas.push(words[anagramIndex]);
                wordsInLowerCase[anagramIndex] = 0;
            });
            finalArray.push(groupOfAnagramas);
        }
    });
    
    return finalArray;
}

let words = ['CaRs', 'racs', 'scar', 'foR', 'poTatos', 'four', 'creams', 'scream'];
console.table(combineAnagrams(words)); 