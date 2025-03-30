function* fetchNextElement(){
    console.log("inside generator");
    const x =10;
   console.log("changing values",yield 11);
    console.log("entering after a yield");
    const y = x + (yield 30);
    console.log("value of y is", y);
}

console.log("start");
const iter = fetchNextElement();
console.log("called generator");
console.log("first", iter.next())
console.log("second", iter.next(99))
console.log("third", iter.next())
console.log("fourth", iter.next())