const areaBruteForce = function (arr) {
    let area=0;
    
    for (let i = 0; i < arr.lenght - 1; i++) {
        for (let j = i + 1; j < arr.lenght; j++) {
            const height = Math.min(arr[i], arr[j]);
            const width = (j - i);
            area = Math.max(area, height * width);
        }
    }
    return area;
}
console.log(areaBruteForce([3,7,5,6,8,4]))