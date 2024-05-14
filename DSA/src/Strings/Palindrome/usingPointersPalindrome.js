function usingPointerPalindrome(defaultString) {
    let i = 0;
    let j = defaultString.length - 1;
    while (i <= j) {
        if (defaultString[i] !== defaultString[j]) return false;
        else {
            i++;
            j--;
        }
    }
    return true;
}

console.log(usingPointerPalindrome('abcba'))
console.log(usingPointerPalindrome('aA'))
console.log(usingPointerPalindrome('a'))
console.log(usingPointerPalindrome('malayalam'))

//O(n), as we are traversing the string for one time. space complexity is O(1) as we are not creating additional space to store.