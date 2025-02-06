const palindromes = function (str) {
    let stripped = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('')
    let i = 0, j = stripped.length-1
    while (i <= j) {
        if (stripped[i] !== stripped[j]) return false
        i++
        j--
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
