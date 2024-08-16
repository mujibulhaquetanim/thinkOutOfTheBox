function bruteIsomorphicString(s, t) {
    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        let char1 = s[i];
        let char2 = t[i];

        let foundMultiple = false;
        for (let j = 0; j < t.length; j++) {
            console.log(`s: ${s[j]}`)
            console.log(`t: ${t[j]}\n`)
            if (t[j] === char2 && j !== i && s[j] !== char1) {
                foundMultiple = true;
                break;
            }
        }

        if (foundMultiple) {
            return false;
        }
    }

    return true;
}


console.log(bruteIsomorphicString("egrg", "kppp"));