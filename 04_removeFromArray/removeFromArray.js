const removeFromArray = function(array, removedNumber) {
    
    //Créer un array des valeurs après array puis boucle forEach (puis for ?) pour comparer avec array de base.
    let arr = Array.from(removedNumber)
    arr.forEach(element => {
        for( let i = 0; i < array.length; i++){ 
    
            if ( array[i] === removedNumber) { 
                array.splice(i, 1); 
                return array
            }
        }
});

   
}
// Do not edit below this line
module.exports = removeFromArray;