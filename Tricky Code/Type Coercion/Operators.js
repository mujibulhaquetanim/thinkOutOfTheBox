// 1. Equality Comparisons (==)
    let eq2com = '5' == 5; // true
    console.log(eq2com); // true

// 2. Strict Equality Comparisons (===)
    let StrictEq2com = '5' === 5; // false
    console.log(StrictEq2com); // false

// 3. Logical Operator:
    let LogicalOp = 0 || 'Hello'; // 'Hello'
    console.log(LogicalOp); // 'Hello'

// 4. Unary Operators:
    let Unary = +'123'; // 123
    console.log(Unary); // 123

// 5. Logical NOT (!)
    let LogicalNot = !'Hello'; // false
    console.log(LogicalNot); // false

    // The reason is that an equality check and comparisons > <
    // work differently.
    // Comparisons convert null to a number, treating it as 0.
    // That's why (3) null 0 is true and (1) null > 0 is false.
    //this kind of comparison/code is avoided for clean code.
    console.log(null > 0); // false
    console.log(null == 0); // false
    console.log(null >= 0); // true

    console.log(undefined < 0); // false
    console.log(undefined == 0); // false
    console.log(undefined >= 0); // false
    console.log(undefined > 0); // false

    console.log('' < 0); // false
    console.log('' == 0); // false
    console.log('' >= 0); // false
    console.log('' > 0); // false

    console.log(null == undefined); // true
    console.log(null === undefined); // false

    console.log(0 == ''); // true
    console.log(0 === ''); // false

    console.log(0 == null); // true
    console.log(0 === null); // false

    console.log(0 == undefined); // true
    console.log(0 === undefined); // false

    console.log(0 == NaN); // true
    console.log(0 === NaN); // false

    console.log(0 == false); // false
    console.log(0 === false); // false

    console.log(0 == true); // false
    console.log(0 === true); // false

    console.log(0 == '0'); // true
    console.log(0 === '0'); // false

    console.log(0 == 'false'); // false
    console.log(0 === 'false'); // false

    console.log(0 == 'true'); // false
    console.log(0 === 'true'); // false

    

