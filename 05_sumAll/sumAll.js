const sumAll = function(n,m) {
    if (n<0 || m<0 || typeof(m) !== 'number' || typeof(n) !== 'number'){
        return 'ERROR'
        }else {
        if(n<m){
        n1 = n
        n2 = m 
        }else{
            n1 = m
            n2 = n
        }
        return (n1+n2)*(n2/2)}
};

// Do not edit below this line
module.exports = sumAll;
