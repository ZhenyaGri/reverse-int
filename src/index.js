module.exports = function reverse (n) {
    str = String(Math.abs(n));
    newN = ''
    for (i = str.length-1; i >= 0; i--){
        newN += str[i];
    }
    return +newN;
}

console.log(module.exports(-538));
