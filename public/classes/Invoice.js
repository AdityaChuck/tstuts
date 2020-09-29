export default class Invoice {
    //types of access modifiers ---> public, private, readonly 
    /*
        public ---> can be accessed both inside and outside the class
        private ---> can be accessed only inside the class
        readonly ---> can only be read. let it be inside or outside the class
    */
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
