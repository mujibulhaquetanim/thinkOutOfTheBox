const result = 10 + isNaN(2) ? 0 : 2;
console.log(result) // 0 because precedence of + is higher than ?. so NaN will return false, so when we convert false to a number it will return 0, so, 10+0 = 10 and 10 is truthy value that is why 0 is returned.
//10+false = 10, 10+0 = 10, 10 is a truthy value so, 0 is returned.

const RightResult = 10 + (isNaN(2) ? 0 : 2);
console.log(RightResult) // 12


//numeric keys in JavaScript objects are converted to strings, allowing you to access these properties using either numeric or string representations of the keys
let lifeSpan = {
    99: "impressive" // 99 will be a string in the execution phase when used as an object key. This implicit conversion is a part of JavaScript's handling of object keys
};
// lifeSpan.100 = "unbelievable"; // this will give an error
let key = 100;
lifeSpan[key] = "unbelievable";
lifeSpan[101] = "unbelievable"; //another way.
lifeSpan["100"] = "unbelievable"; //another way.
console.log({ lifeSpan })

