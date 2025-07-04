"use strict";
function sumOfAge(obj1, obj2) {
    return obj1.age + obj2.age;
}
const obj1 = {
    name: "Trishit",
    age: 25
};
const obj2 = {
    name: "Roy",
    age: 45
};
const ans = sumOfAge(obj1, obj2);
console.log(ans);
