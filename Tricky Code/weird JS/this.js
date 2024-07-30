let length = 10;

function getLength() {
    return this.length;
}

let arr = [getLength, 6, 9]

console.log(arr[0]()); //result: 3. because this result depends on where the function is called, as this was called in the arr[0], so it will return the length of the array, which is 3.