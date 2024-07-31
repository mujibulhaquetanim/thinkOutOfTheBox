// in js, func are treated like a variable.
function show() { }

show = "the show is overwritten";
console.log(show) // the show is overwritten
// show(); //error: show is not a function

//another example:
var foo = "ayaain"

function showName() {
    foo = "local variable"
    return;
    function foo() { } //this foo will be attached to showName in the execution phase, and then, foo= "" will reassigned it to "local variable" instead of function. but if we remove foo() then foo= "" will work
}
showName();
console.log(foo)

