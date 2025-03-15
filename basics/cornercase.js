// console.log("" + 0);  // 0 -> "0"
// console.log(""+(-0))   // -0 -> "0"

// console.log("" + [])  // [] -> ""
// console.log("" + {})  // returns [object Object]

// console.log("" + [1,2,3]);  // [1,2,3]
// console.log("" + [null,undefined]);
// // null and undefined always gets removed 
// console.log("" + [1,2,null,4]);

// console.log(0-"010"); // gets converted to decimal number 10
// console.log(0-"O10");
// console.log(0- 010 ); //octal number    giving error but the code is ruuning
// console.log(0-"0xb") // hexadecimal number
// console.log(0-0xb)  //hex

// console.log(1<2<3)  // ->(1<2) = true ->true <3 -> 1 < 3 ->true
// console.log(3>2>1)  // ->(3>2) -> true -> true>1 -> 1>1  -> false


// let x=NaN;

// console.log(x==NaN) 

// console.log(isNaN(x))
// console.log(isNaN("abc"))  // isNaN converts the string  to a number
// // if we do not want coercion to happen then 
// console.log(Number.isNaN(x))  //this time coercion doesnot happen, 

// if(typeof(x) == 'number' && x !== x){
//     console.log(true)
// }

let x= -0;
console.log(x===0);
console.log(Object.is(x,-0));
console.log(Object.is(x,0));

console.log(Math.sign(-3));
console.log(Math.sign(2));
console.log(Math.sign(-0));
console.log(Math.sign(0));


console.log(x<0)