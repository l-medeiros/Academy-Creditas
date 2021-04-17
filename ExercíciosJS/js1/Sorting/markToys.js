function maximumToys(prices, k) {
    let maxToys = 0;
    let totalPrice = 0;
    
    prices.sort(compareNumeric); 
    
    for(let i = 0; i < prices.length; i++) {
        totalPrice += prices[i];
        
        if(totalPrice > k) {
            return maxToys;
        }
        maxToys++;
    }
    
    return maxToys;
}

function compareNumeric(a, b) {
    return a - b;
}