function twoStrings(s1, s2) {
    let stringOneChars = new Set();
    
    for(let char of s1) {
        stringOneChars.add(char);
    }
    
    for(let char of s2) {
        if(stringOneChars.has(char)) {
            return "YES";
        }
    }
    return "NO";
}