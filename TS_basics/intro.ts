/*
Types in typescript

below are all primitive types in TS

string ->store text
number ->integers,real
boolean
undefined
null
bigint
symbol

var <variable name>: number = <value>;  //type annotation or type signature

*/

let id:number = 5;
let firstName = "Trishit";  // TS understands firstName will store strings
// firstName = 12; TSC thorws error

// var lastName = "Singh";  TSC thorws error
console.log(id,firstName);

//union of types
let userId : number | string = "26";
userId = 10;


// can implement any type 
let x:any = 10;
x = "Trishit";
x = false;
console.log(x);

let ids: number[] = [1,2,3,4,5];
let hetero : any[] = [1,2,3,false,"123",null];

let data : (number | string | boolean)[] = [1,"Trishit",true];
let data1  = [1,"Trishit",true];


// arrays in form of typed tuple
// tuple is a set of values
let data2 :[number,string,boolean]  = [1,"Trishit",true];

/*
 how to define types for objects
 - classes -> data members, member functions
 - interface -> its a contract
*/

class Car{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    display(){
        console.log(this.name);
    }
};

interface Product{
    name:string;
    price:number;
    brand:string;

    display(): void;

}

let p1 : Product = {         // -> interface to a object
    name:"Iphone",
    price:100000,
    brand:"apple",
    display:()=>{
        console.log("display")
    }
};
console.log(p1);

// let c1 : Car ={           // -> object
//     name:"Santro",
//     price:10000000,
//     brand:"Tata"
// };


function sum(a : number,b?: number):number{  //-> here b is optional because of ?
    return a+(b || 0);  //->  if there is b then b else 0
}

console.log(sum(10));


// date object in TS
const dob = new Date(1998,3,11);
console.log(dob);
console.log(dob.getDate());


/**
 * any type -> your free ticket to get rid of TS type checking
 * 
 * if you want to define a var with type any, then either mention ":any" while declaring the variable or donot assign a value while declaring a variable
 */

let z;  // this variable x is of type any
console.log(z);
z = "10";
z=10;

function fun():void{

}

function fun1() : (number | string){
    return 10;
}
console.log(fun())

/**
 * ENUMS or Enumaration 
 * const INITIALIZED = 'initialized'
 * Ticket status = ['initialized','cancelled','resolved','pending']
 * ti.status = "resolved"
 * 
 */






// enum TicketStatus{
//     INITIALIZED,
//     CANCELLED,
//     PENDING,
//     CLOSED
// }


enum TicketStatus{
    INITIALIZED = "initialized",
    CANCELLED="cancelled",
    PENDING = "pending",
    CLOSED="closed"
}

const Ticket={
    id:1,
    title:'new ticket',
    status:TicketStatus.INITIALIZED
}
if(Ticket.status == TicketStatus.CLOSED){
    console.log("DONE");
}


enum StatusCodes{
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    Creaated = 201,
    BadRequest = 400
}

const response = {
    url:"www.something.com",
    type:"GET",
    data:"some string",
    status:StatusCodes.Success
}
console.log(response)