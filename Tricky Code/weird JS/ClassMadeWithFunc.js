class FunctionClass {
    info = 'Class was made using function in JS';
    show() {
        console.log(this.info);
    }
}
console.log(`The Type of a Class in JS is: ${typeof FunctionClass}`);

let obj = new FunctionClass;
obj.show();

// Class vs. Function:
// In JavaScript, there is technically no real distinction between a “class” and a “function.” Both are just functions.
// Any function can be invoked as a constructor using the new keyword, and the prototype property of that function is used for objects to inherit methods from.
// The term “class” is used conceptually to describe this practice, but under the hood, it’s all just generic JavaScript syntax1.
// ref: https://stackoverflow.com/questions/30783217/what-benefits-does-es2015-es6-class-syntax-provide/30783368#30783368