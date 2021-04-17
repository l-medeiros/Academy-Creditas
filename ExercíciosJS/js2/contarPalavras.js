function countWords(phrase) {
    let wordsFrequence = new Map();
    let notCharRegex = /[\d\W]/g;

    let arrayWords = phrase.split(' ');

    arrayWords.forEach(word => {
        word = word.toLowerCase();
        word = word.replace(notCharRegex, '');

        if(wordsFrequence.has(word)) {
            wordsFrequence.set(word, wordsFrequence.get(word)+1);
        }
        else {
            wordsFrequence.set(word, 1);
        }
    });

    return wordsFrequence;
}

console.log(countWords('Do22o! bee doo bee doo'));