function bruteMatchTarget(arr, targetValue) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (targetValue === arr[i] + arr[j]) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log(bruteMatchTarget([1, 2, 3, 4, 5], 9));