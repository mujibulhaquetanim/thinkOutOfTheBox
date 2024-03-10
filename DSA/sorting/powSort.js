function powSort(arr) {
    const newArr = new Array(arr.length).fill(0);
    leftPointer = 0;
    rightPointer = arr.length - 1;

    for (i = arr.length - 1; i >= 0; i--) {
        leftPow = Math.pow(arr[leftPointer], 2);
        rightPow = Math.pow(arr[rightPointer], 2);

        if (leftPow > rightPow) {
            newArr[i] = leftPow;
            leftPointer++;
        } else {
            newArr[i] = rightPow;
            rightPointer--;
        }
    }
    return newArr;
}

a = [-9, 1, -5, 3, -3]
b = [-7, 3, 6, 1, 8];

console.log(powSort(a));
console.log(powSort(b));