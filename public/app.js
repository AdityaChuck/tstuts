//interfaces
/*interface IsPerson{
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}
const me: IsPerson = {
    name: 'Chuck',
    age: 22,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log(amount)
        return amount
    }
}

const greetPerson = (person: IsPerson) => {
    console.log("hello", person.name);
}

greetPerson(me)
*/
import Invoice from "./classes/Invoice.js";
import ListTemplate from "./classes/ListTemplate.js";
import Payment from "./classes/Payment.js";
//ListTemplate instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
let doc1;
let doc2;
doc1 = new Invoice("yoshi", "web work", 340);
doc2 = new Payment("mario", "plumbing work", 560);
let docs = [];
docs.push(doc1);
docs.push(doc2);
console.log(docs);
const inv1 = new Invoice("mario", "work on the mario website", 235);
const inv2 = new Invoice("luigi", "work on the luigi website", 275);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//GENERICS
// const addUID = <T extends object>(obj: T) => { //or
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Clint', age: 89 });
console.log(docOne.name);
//we can also use GENERICS with interfaces. An interface defines how an object should look like.
/*
interface Resource<T>{
    uid: number;
    resourceName: string;
    data: T
}

const docThree: Resource<string> = {
    uid:1,
    resourceName: "person",
    // data: { name: "chuck" }//error
    data: "chuck"
}

console.log(docThree);
*/
//ENUMS ----> 
//-----------
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docTest = {
    uid: 1,
    resourceType: ResourceType.DIRECTOR,
    data: ["Woody Alan"]
};
console.log(docTest);
//tuples ---> almost same as array. Have all the array methods.
//-----------
//In normal JS arrays we can do change the value at different indices of the array. We can also change the array completely
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'Yoshi';
arr = [30, false, "Yoshi"];
//But, when we define it as a tupple, then we can not change the value at different indices of the array
let tup = ['ryu', 89, true]; //no error
// tup[0] = 90 //error
//what is an interface in typescript? ---> 
/*
    An interface in typescript is something that defines a structure to be followed. For example if a class, say x implements an interface called y -->
    interface y{
        retval(): number
    }
    class x implements y{} //since class x implements the interface y, it has to have the function retval, otherwise it will result an error

    so, to get things into perspective, the class x's correct definition should be -->
    class x implements y{
        format(){
            return 0
        }
    } //now it is correct
*/
//What are generics in typescript? ---> 
/*
    Generics in typescript is a block of code which can be reused with different types.

    const addUID = (obj: object) => {
    let uid = Math.floor(Math.random()*100)
    return {...obj, uid}
    }

    let docOne = addUID({name: 'Clint', age:89})
    console.log(docOne.name); //this will throw an error, since we have not explicitly defined the type of obj in addUID. We have just given it a type of object, due to which typescript can not make sense of the name property on obj. To tackle this problem we can use a concept called GENERICS
    
    const addUID = <T>(obj: T) => { //now using <T> we are capturing whatever we are passing into the obj as the specifics of the type so calling obj.name won't give us an error
    let uid = Math.floor(Math.random()*100)
    return {...obj, uid}
    }

    let docOne = addUID({name: 'Clint', age:89})
    console.log(docOne);

*/
