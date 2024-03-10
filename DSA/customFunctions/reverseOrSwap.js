const reverse= function (arr, start, end) {
    console.log(arr);
    while (start < end) {
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
    }
    return arr;
}

const arr=[1,2,3,4,5,6,7];

console.log(reverse(arr,0,arr.length-1));