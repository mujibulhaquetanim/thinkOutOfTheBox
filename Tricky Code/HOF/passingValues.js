// this is a simple example of passing values to a higher order function and then passing it to another function. it can be used in react to pass values to a higher order component and then pass it to another component. for example, in react, we can pass values to a higher order component and then pass it to a child component.
function a(b) {
    console.log('a is called')
    return function(c) {
        return b(c);
    };
}

function b(c) {
    console.log("coming from b", c);
    const cResult = c();
    return `returned from b ${cResult}`;
}

function c(){
    return 'returned from c';
}

const resultFunction = a(b(c));
