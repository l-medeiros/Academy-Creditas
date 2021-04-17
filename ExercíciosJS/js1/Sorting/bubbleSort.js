function countSwaps(a) {
    let numSwaps = 0;
    let firstElement;
    let lastElement;
    
    for(let i = 0; i < a.length; i++) {    
    
        for(let j = 0; j < a.length - 1; j++) {
            let aux;
            
            if (a[j] > a[j+1]) {
                aux = a[j];
                a[j] = a[j+1];
                a[j+1] = aux;
                
                numSwaps++;
            }
        }
    }
    firstElement = a[0];
    lastElement = a[a.length-1];
    
    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${firstElement}`);
    console.log(`Last Element: ${lastElement}`);
}