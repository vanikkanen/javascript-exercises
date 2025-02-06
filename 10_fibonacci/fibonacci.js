const fibonacci = function(index) {

    index = +index
    if (index < 0) return "OOPS"

    let fibSeq = [0,1,1]

    if (index < fibSeq.length) {
        return fibSeq[index]
    }
    let prevPrev = 1
    let prev = 1
    let ans
    for (let i = 3; i <= index; i++) {
        ans = prev+prevPrev
        prevPrev = prev
        prev = ans
    }
    return ans

};

// Do not edit below this line
module.exports = fibonacci;
