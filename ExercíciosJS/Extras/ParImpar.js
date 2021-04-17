function parImparRecursivo(n) {
    n += '';
    
    if(n.length == 1) {
        n = +n;
        
        if(n == 2) {
            return true;
        }
        else if(n == 1) {
            return false;
        }
        else {
            return parImparRecursivo(n-2);
        }
    }
    else {
        n = n.substr(1);
        return parImparRecursivo(n);
    }
}

console.log(parImparRecursivo(111111111112222222222222222223333333333333333334444444444444555555555555556666666666677777777888888888889999999000000000000));
