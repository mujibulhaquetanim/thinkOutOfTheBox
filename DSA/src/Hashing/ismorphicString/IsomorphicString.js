function isomorphicCharMatch(str1, str2) {
    if (str1.length !== str2.length) return false;
    const str1Hash = {};
    const str2Hash = {};
    for (let i = 0; i < str1.length; i++) {
        let char1 = str1[i];
        let char2 = str2[i];
        if (!str1Hash[char1]) str1Hash[char1] = char2;
        if (!str2Hash[char2]) str2Hash[char2] = char1;
        
        console.log("first Hash: ", str1Hash)
        console.log("second Hash: ", str2Hash)
        console.log("\n")

        if (str1Hash[char1] !== char2 || str2Hash[char2] !== char1) return false;
    }
    console.log("first Hash: ", str1Hash)
    console.log("second Hash: ", str2Hash)
    console.log("\n")
    return true;

}
console.log(isomorphicCharMatch('aac', 'bbb'))