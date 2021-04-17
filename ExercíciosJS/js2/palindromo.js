function palindrome(phrase) {
    let notCharRegex = /[\d\W]/g;

    phrase = phrase.toLowerCase();
    phrase = phrase.replace(notCharRegex, '');

    let charArray = phrase.split('');
    let size = charArray.length;
    let middle = (size/2)+1;

    for(let i = 0; i < middle; i++) {
        if(charArray[i] !== charArray[size-i-1]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome("Madam, i'm adam."));