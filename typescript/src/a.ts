// const x:number = 1;
// console.log(x);

// function greet(firstname:string){
//     console.log(firstname);
// }

// greet("trishit");

function sum(a:number,b:number):number{
    return a+b;
}

console.log(sum(3,4));



function identity<T>(args:T){
    return args;
}

function identity2<T>(args:T){
    return args;
}

let output1 = identity<string> ("string");
let output2 = identity2<number> (100);

console.log(output1);
console.log(output2);

