//obj
let obj = {}
//obj are not empty even though it is {}, because it has lots of properties in it, that's iterating over the object has some gotchas that's why needing to check hasOwnProperty when iterating over the object. or, use Object.keys()
Object.keys(obj).map(key => console.log(key, obj[key]))

//map preserve the order of the keys
let map = new Map();
console.log(map['valueOf']) //undefined because no value is set

obj.a = 1;
map.set('a', 1);

//looping through the object
for (let key in obj) {
    console.log(key, obj[key]);
}
//looping through the map
for (let [key, value] of map) {
    console.log(key, value);
}

//copying the object
let newObj = Object.assign({}, obj);
console.log(newObj)

//copying the map
let newMap = new Map(map);
let deepClone = structuredClone(map)
console.log(newMap)
console.log(deepClone)

//returning an object from a function and accessing its properties using array syntax or dot notation.
function returnObj() {
    return { a: 1, b: 2 };
}
console.log(returnObj()["a"]) // 1
console.log(returnObj().b) // 2
