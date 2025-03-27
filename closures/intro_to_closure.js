function process(){
    let i=0;
    function innerProcess(){
        i+=1;      // this i is coming from the process scope
        return i;
    }
    return innerProcess;  // we are not calling the function , just returning the function 
}

let res = process();
console.log(res);

console.log("first time innerProcess called",res());
console.log("second time innerProcess called",res());
console.log("third time innerProcess called",res());