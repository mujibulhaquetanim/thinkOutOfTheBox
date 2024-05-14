function newArraycomparePalindrome(defaultString) {
    let newStringArray = [];
    for (let i = defaultString.length; i >= 0; i--) {
        newStringArray.push(defaultString[i]);
    }
    if (defaultString === newStringArray.join('')) return true;
    else return false;
}

console.log(newArraycomparePalindrome('abcba'))
console.log(newArraycomparePalindrome('aA'))
console.log(newArraycomparePalindrome('a'))
console.log(newArraycomparePalindrome('malayalam'))

//pushing elements to an array is O(n) time complexity.