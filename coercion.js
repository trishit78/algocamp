console.log(2-9);   //-7
console.log(2-null);  // 2-null => 2-0 => 2
console.log(2-undefined)  // 2-undefined => 2-NaN  => NaN


console.log(1-"453")  // -452
console.log(1-"543fsre5")  // 1-NaN => NaN

console.log(1-"0Xa")  // 0xa takes this as a hexadecimal number and coverts it to 10
