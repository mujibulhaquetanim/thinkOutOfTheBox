function monotonicArray(arr) {
    const firstValue = arr[0];
    const lastValue = arr[arr.length - 1];

    if (firstValue === lastValue) {
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] !== arr[i]) return false;
        }
    } else if (firstValue < lastValue) {
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] < arr[i]) return false;
        }
    } else {
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] > arr[i]) return false;
        }
    }
    return true;
}

console.log(monotonicArray([1, 2, 1, 4, 5]));