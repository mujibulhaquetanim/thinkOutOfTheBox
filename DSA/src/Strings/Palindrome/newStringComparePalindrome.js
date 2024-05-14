function newStringComparePalindrome(defaultString) {
    let newString = '';

    for (let i = defaultString.length - 1; i >= 0; i--) {
        newString += defaultString[i];
    }
    console.log(newString);
    if (defaultString === newString) return true;
    else return false;
}

console.log(newStringComparePalindrome('abcba'))
console.log(newStringComparePalindrome('aA'))
console.log(newStringComparePalindrome('a'))
console.log(newStringComparePalindrome('malayalam'))

//If i = defaultString.length, it will loop around for one more extra value, as length returns a count value from 1 rather than 0, which will exceed the defaultString length bounds and be added to newString as undefined for that iteration.