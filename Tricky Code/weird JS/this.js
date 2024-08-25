let length = 10;

function getLength() {
    return this.length;
}

let arr = [getLength, 6, 9]

console.log(arr[0]()); //result: 3. because this result depends on where the function is called, as this was called in the arr[0], so it will return the length of the array, which is 3.

RootObj = {
    name: "RootObj",
    ReferRootObj() {
        let name = "RootFunc"
        return this.name;      
    },

    LocalObj: () => {
        let name = "LocalFunc";
        return this.name;
    }
}


console.log(RootObj.ReferRootObj())//RootObj, as it refers to immediate parent.
console.log(RootObj.LocalObj()) //undefined, as it refers to global obj, where it was defined.