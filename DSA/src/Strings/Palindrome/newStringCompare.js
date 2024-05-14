function newStringCompare(defaultString) {
    let newString = '';
    console.log(defaultString.length)
    for (let i = defaultString.length-1; i >= 0; i--) {
        newString += defaultString[i];
    }
    console.log(newString);
    if (defaultString === newString) return true;
    else return false;
}

console.log(newStringCompare('abcba'))

//if we keep i= defaulString.length, then it will loop through for one extra value, as length gives count value from 1, not from 0