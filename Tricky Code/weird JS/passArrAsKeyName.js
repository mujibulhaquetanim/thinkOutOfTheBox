// const arr = ['name', 'programmer']; //if there are multiple values in the arr.
const arr = ['name']; //single value.
const obj = {};

obj.name = 'rahul';
obj[arr] = 'react';
console.log(obj.name); //output: react

// console.log(obj.name); //output: rahul
// console.log(obj); //output: { name: 'rahul', 'name,programmer': 'react' }