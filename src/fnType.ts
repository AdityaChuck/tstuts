/*let greet = () => {
    console.log("hello");
}*/

// greet = "hellow" // cant' be done

//So how can it be done?

let greet: Function

greet = () => {
    console.log("hello");
}

// const add = (a: number, b: number, c?:number|string) => {
//     console.log(a+b)
//     console.log(c)
// }

const add = (a: number, b: number, c:number|string = 20): void => {
    console.log(a+b)
    console.log(c)
}

add(8,9)
const minus = (a: number, b: number): number => {
    return a-b
} 

let result = minus(10,2)
// result = "" //can't do this

//type alliases ---> 

type StringOrNum = string | number
type objWithName = { name: string, uid: StringOrNum }

const greet1 = (user: objWithName) => {
    console.log(`${user.name} says hellow`);
} //works perfectly fine

// let greet2: Function

// () => void //this takes the function returns of type void

//example --> 
let greet2 : (a: string, b: string) => void
greet2 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`); 
}

let calc : (a: number, b: number, c: string) => number

calc = (a:number, b:number, c:string) => {
    if(c === "add"){
        return(a+b)
    }else{
        if(a-b < 0 ){
            return (-(a-b))
        }else{
            return a-b
        }
    }
}

let val = calc(4,5,"subtract")
console.log("difference => ", val);


