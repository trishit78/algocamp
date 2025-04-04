function createPromise(){
    return new Promise(function exec(resolve,reject){
        console.log("resolving the promise");
        resolve("done");
    });
}

setTimeout(function process(){
    console.log("timer completed");
    p.then(function fulfillHandler1(value){
        console.log("we fulfilled1 with a value",value);
    }, function rejectHandler(){});
},0);

let p = createPromise();
p.then(function fulfillHandler1(value){
    console.log("we fulfilled1 with a value",value);
}, function rejectHandler(){});

p.then(function fulfillHandler2(value){
    console.log("we fulfilled2 with a value",value);
}, function rejectHandler(){});

p.then(function fulfillHandler3(value){
    console.log("we fulfilled3 with a value",value);
}, function rejectHandler(){});

for(let i=0;i<1000000000;i++) {}

console.log("ending");