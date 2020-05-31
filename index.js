const sum = (arr) => {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

module.exports = sum;
