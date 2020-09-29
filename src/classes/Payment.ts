import HasFormatter from "../interfaces/HasFormatter.js"

export default class Payment implements HasFormatter {

    //types of access modifiers ---> public, private, readonly 

    /*
        public ---> can be accessed both inside and outside the class
        private ---> can be accessed only inside the class
        readonly ---> can only be read. let it be inside or outside the class
    */

    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(
        readonly recipient:string,
        private details: string,
        public amount: number
    ){}
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`
    }
}