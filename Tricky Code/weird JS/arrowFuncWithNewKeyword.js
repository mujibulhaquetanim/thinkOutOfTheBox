// const Person = (name)=>{
//     this.name = name;
//     return this;
// } //gives an error as person is not a constructor.

function Person(){
    this.name = 'js';
    return this;
}

const person = new Person();
console.log(person.name); //works well with normal function.