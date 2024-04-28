function matchTarget(arr, targetValue) {
    let neededValue = 0;
    let hashValue = {};
    for (let i = 0; i < arr.length; i++) {
        neededValue = targetValue - arr[i];
        if (neededValue in hashValue) {
            return [hashValue[neededValue], i];
        } else {
            hashValue[arr[i]] = i;
        }
    }
    return [];
}

console.log(matchTarget([1, -2, 3, 4, 5], 3));