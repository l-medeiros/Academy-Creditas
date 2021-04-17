function checkMagazine(magazine, note) {
    let magazineWordsFrequence = new Map();
    
    for(let word of magazine) {
        if(magazineWordsFrequence.has(word)) {
            magazineWordsFrequence.set(word, magazineWordsFrequence.get(word)+1);    
        }
        else {
            magazineWordsFrequence.set(word, 1);
        }
    }
    
    for(let word of note) {
        if(!magazineWordsFrequence.has(word)) {
            console.log("No");
            return 0;
        }
        else {
            if(magazineWordsFrequence.get(word) > 1) {
                let k = magazineWordsFrequence.get(word);
                k--;
                magazineWordsFrequence.set(word, k);
            }
            else {
                magazineWordsFrequence.delete(word);
            }
        }
    }
    
    console.log("Yes");
}