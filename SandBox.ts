//Lesson one -- How to compile?

/*const character  = "Hose";

console.log(character);

const inputs = document.querySelectorAll("input");

console.log(inputs);

inputs.forEach(item => {
    if(item.type === "text"){
        item.value = "fuck you"
    }
    else{
        item.value = "96"
    }
    
})*/

//Lesson Two -- Types

let character = "Hose"
let age = 89
let fuckYou = false

// character = 78 //--->Doesn't allow
character = "Mario" //--->Allows

// age = "false"  //--->Doesn't allow
age = 46 //--->Allows

//fuckYou = "yes daddy" //---> Doesn't allow
fuckYou = false //---> Allows

//We don't explicitly have to specify the types although it is advised to do that. Basically, ts has something called inference. So it will have a look at the first init and do the checks later 

//let's have a look at the function signature

// const circ = (d) => {
//     return d*Math.PI
// }

// console.log(circ("hose")); //Does it make sense? We can pass anything in js which is not resourcefull and thus dynamic typing falls behind. in fact, what we should have is, the function should take only Type number. 

//now let's do the exact same thing with ts type validation 

const circ = (d : number) => {
    return d*Math.PI
}

//console.log(circ("hose")); //It throws an error doesn't it?

console.log(circ(3)) //This will be syntactically correct

//Linters are exceptional. Ain't they?

//now let's take an array
let names = ['luigi', 'mario', 'yoshi']

//we can't reassign something to an array which is not of tyoe Array

// names = "jojoj" //this gives an error
names = ['muft']//However, this does not

names.push("heroshi") //this is fine
// name.push(3) //however, this is not allows

// if we want to have an array wth mixed types, then we just have to declare that

let mixed = ["ken", 4, true]

//now all these will be allowed

mixed.push(1)
mixed.push("hose")
mixed.push(!!mixed[0])


//now let's have a look at object
 let obj = {
    name: "mario",
    belt: "yellow",
    age : 30
 }

//  obj.name= 00; //this will not be executed
obj.name = "ryu" //this will work

//we can't add additional properties to the obj
// obj.skills = ["fighting", "flight"]//this will not work

obj = {
    name:"yoshi",
    belt:"orange",
    // age:89, //this will give an error since we can not omit a poperty in case we have declared it in the original structure
    age:67,
    // skills: ["fighting", "flight"] //this also will throw error
}






