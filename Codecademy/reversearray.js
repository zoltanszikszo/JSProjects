const sentence = ['Stop','confusing', 'me', 'all', 'the', 'time.'];

const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i]);
    }
    return reversed
}

// Alternate option can be:

const reverseArray = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++){
        reversed.unshift(arr[i]);
    }
    return reversed
}

console.log(reverseArray(sentence));