function forEachRecursivo(array, fun) {
    if(array.length == 0) {
        return;
    }

    fun(array[0]);
    array.shift();
    forEachRecursivo(array, fun);
}

function printElemento(elem) {
    console.log(elem);
}

let array = [0, 1, 2, 3, 4, 5];
forEachRecursivo(array, printElemento);