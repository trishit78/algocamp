const result = {
    name:"Sanket",
    marks:98
}

/**
 * 
 * the type of the above raw object is inferred as {name:string,marks:number}
 * something like the object given below
 * const result:{name:string,marks:number} = {
 *  name:"sanket",
 * marks:98
 * }
 */
console.log(result);

result.marks = 99;
// this will not throw an error because it is updating the marks value of the object

result.address = "XYZ";
// adding a new key value pair
/**
 * now the above statement will throw a compiler error because in the type  {name:string,marks:number}
 * we never mentioned anything about any address.
 * that's why TS thinks we are violating the default type
 * To solve this , we can add an additional optional address property while defending the object
 * 
const result : {name:string,marks:number,address? : string}= {
    name:"Sanket",
    marks:98
}
     
 * 
 * 
 */

