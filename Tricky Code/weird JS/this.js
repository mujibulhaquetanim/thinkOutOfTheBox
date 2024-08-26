let length = 10;

function getLength() {
    return this.length;
}

const getLengthArrow = () => {
    return this.length;
}

let arr = [getLength, getLengthArrow, 6, 9]

console.log("getLength: " + arr[0]()); //result: 3. because this result depends on where the function is called, as this was called in the arr[0], so it will return the length of the array, which is 3.
console.log("getLengthArrow: " + arr[1]()); //undefined. because it is an arrow function and getLengthArrow is not bound to any obj, so it will return undefined.

RootObj = {
    name: "RootObj",
    ReferRootObj() {
        let name = "RootFunc"
        return this.name;
    },

    LocalObj: () => {
        let name = "LocalFunc";
        return this.name;
    },

    arrowFunc() {
        let name = "arrowFunc";
        return () => this.name; //
    },

    childObj: {
        name: "childObj",
        ReferChildObj() {
            let name = "childFunc"
            return this.name;
        },

        arrowFunc() {
            let name = "arrowFunc"
            return () => this.name;
        }

    }
}


console.log("RootObj.ReferRootObj: " + RootObj.ReferRootObj())//RootObj, as it refers to immediate parent but not its own parent.
console.log("RootObj.LocalObj: " + RootObj.LocalObj()) //undefined, as it refers to global obj, where it was defined.
console.log("RootObj.arrowFunc: " + RootObj.arrowFunc()()) //RootObj, as it refers to its own parent which is RootObj.
console.log("RootObj.childObj.ReferChildObj: " + RootObj.childObj.ReferChildObj()) //childObj, as it refers to immediate parent but not its own parent. its immediate parent is childObj now as it is inside of an obj.
console.log("RootObj.childObj.arrowFunc: " + RootObj.childObj.arrowFunc()()) //childObj, as it refers to its own parent which is childObj.

//tricky exception:
function makeUser() {
    return {
        name: "Emma",
        ref: this
    }
}

let user = makeUser(); //we are calling from an global scope not from any obj that is why:
console.log(user.ref.name) //undefined as it points to an window/global obj.

//to fix it:
function makeUser() {
    return {
        name: "Emma",
        ref() {
            return this
        }
    }
}

let user1 = makeUser(); //it is already inside of an obj
console.log(user1.ref().name)// Emma, because it returns the obj itself.
