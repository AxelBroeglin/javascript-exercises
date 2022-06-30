const removeFromArray = function(array, removedNumber) {
    for( let i = 0; i < array.length; i++){ 
    
        if ( array[i] === removedNumber) { 
    
            array.splice(i, 1); 
            return array
        }
    }
}
// Do not edit below this line
module.exports = removeFromArray;