"use strict";
/*let greet = () => {
    console.log("hello");
}*/
// greet = "hellow" // cant' be done
//So how can it be done?
let greet;
greet = () => {
    console.log("hello");
};
// const add = (a: number, b: number, c?:number|string) => {
//     console.log(a+b)
//     console.log(c)
// }
const add = (a, b, c = 20) => {
    console.log(a + b);
    console.log(c);
};
add(8, 9);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 2);
const greet1 = (user) => {
    console.log(`${user.name} says hellow`);
}; //works perfectly fine
// let greet2: Function
// () => void //this takes the function returns of type void
//example --> 
let greet2;
greet2 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (a, b, c) => {
    if (c === "add") {
        return (a + b);
    }
    else {
        if (a - b < 0) {
            return (-(a - b));
        }
        else {
            return a - b;
        }
    }
};
let val = calc(4, 5, "subtract");
console.log("difference => ", val);
