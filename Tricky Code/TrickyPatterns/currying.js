//Currying won't execute unless until all the arguments are passed.
//useful for functions that take multiple arguments and in real scenario, we don't know how many arguments will be passed at the time of execution. for example: from api call, we don't know how many arguments will be passed. if we use currying then we can pass the arguments one by one. it uses closure to pass the arguments to the function.

const add = (a) => (b) => (c) => a + b + c
console.log(add(1)(2)(3))

//another one:
const sendEmail = (to) => (subject) => (body) => (regards) => `to: ${to}\nsubject: ${subject}\nbody: ${body}\nregards: ${regards}`
console.log(sendEmail('emmawatson@hogwarts.com')('love proposal')('I love you')('MujibAi'))

// Currying is a powerful technique in functional programming that allows you to transform a function that takes multiple arguments into a series of functions, each taking a single argument. Here’s how it works:
// Partial Application: Currying involves partially applying a function. Instead of passing all the arguments at once, you pass them one by one, creating a chain of functions. Each function takes a single argument and returns another function until all arguments are consumed.
// Closure: Curried functions use closures to remember the previously passed arguments. When you call a curried function with an argument, it returns a new function that “remembers” that argument. This process continues until all arguments are supplied.
// Flexibility: Currying is particularly useful when you don’t know all the arguments upfront, such as in scenarios like API calls or event handlers. It allows you to create specialized functions on the fly by partially applying them