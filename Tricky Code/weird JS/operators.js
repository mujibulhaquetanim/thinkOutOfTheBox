const result = 10 + isNaN(2)? 0 : 2;
console.log(result) // 0 because precedence of + is higher than ?. so NaN will return false, so when we convert false to a number it will return 0, so, 10+0 = 10 and 10 is truthy value that is why 0 is returned.
//10+false = 10, 10+0 = 10, 10 is a truthy value so, 0 is returned.

const RightResult = 10 + (isNaN(2)? 0 : 2);
console.log(RightResult) // 12

