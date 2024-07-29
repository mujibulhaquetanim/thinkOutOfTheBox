let map = new Map();
let obj = {
    a: new Set('a')
}
map.set('a', 1);
map.set('b', new Set([1, 2, 3]));

console.log(map);
console.log(map.get('b'));
console.log(obj)

for (let [key, value] of map) {
    console.log(key, value);
}

//iterating the keys and values
for (let [key, value] of map.entries()) {
    console.log(key, value);
}

//iterating the keys
for (let key of map.keys()) {
    console.log(key);
}

//map object methods
map.forEach((value, key) => {
    console.log(key, value);
})

console.log(map.has('a'));
console.log(map.size)
console.log(map.delete('a'));
console.log(map)