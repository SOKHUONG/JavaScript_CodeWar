function positiveSum( array ) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            sum = array[i]+sum;
        }
    }
    return sum;
}
