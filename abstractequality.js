console.log(null == undefined);
// in the docs it is true
console.log(12=="12");
/*
 12->number
 "12" -> ToNumber ->12
 12==12 -> true

*/


console.log(false == "0");
/*
  x->boolean ->ToNumber ->false -> 0
  x=0,y="0" , x==y
  y->ToNumber ->0
  0 == 0 ->true
*/


console.log(NaN === NaN)
// return false, because  how two NaN numbers can become equal 

console.log(-0 === +0) 
// return true
// else all are true




let obj1={x:10};
let obj2={x:10};
let obj3={x:10};


console.log(obj1 === obj2)  // false because of obj1 and obj2 are in different memory locations 
console.log(obj1 === obj3)  // false
console.log(obj1 === obj1)  // true   because of same memory location

console.log({x:10} == {x:10});  // false because of different memory locations

