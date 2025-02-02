const removeFromArray = function(arr, ...args) {

    const ansArr = []
    for (let i in arr) {
        let num = arr[i]
        if (!args.includes(num)) {
            ansArr.push(num)
        }
    }
    return ansArr
};

// Do not edit below this line
module.exports = removeFromArray;
