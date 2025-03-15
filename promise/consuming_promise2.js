function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function createPromiseWithTimeout(){
    return new Promise(function executor(resolve,reject){
        console.log("Entering the executor callback in the promise constructor.");
        setTimeout(function () {
            let num = getRandomInt(10);
            if(num%2==0){
                resolve(num);
            }
            else{
                reject(num);
            }
        },10000);
        console.log("Exitting the executor callback in the promise constructor");
    })
}

console.log("starting ....");
const p=createPromiseWithTimeout();
console.log("we are now waiting for the promise to complete");

console.log("currently my promise object is like...",p);

console.log("going to register 1st set of handlers");

p
.then(
    function fulfillHandler(value){
        console.log("inside fulfil handler 1 with value",value)
        console.log("currently promise object is looking like: ",p);
        setTimeout(function t(){ console.log("ended 0 with timer")},0);
        console.log("exitting the fulfillment handler 1")
    },
    function rejectionHandler(value){
        console.log("inside rejection handler 1 with value",value);
        console.log("currently promise object is looking like: ",p);
        setTimeout(function t(){ console.log("ended 0 with timer")},0);
        console.log("exitting the rejection handler 1")
    }
)

console.log("going to register 2nd set of handlers");

p
.then(
    function fulfillHandler2(value){
        console.log("inside fulfil handler 2 with value",value)
        console.log("currently promise object is looking like: ",p);
    },
    function rejectionHandler2(value){
        console.log("inside rejection handler 2 with value",value);
        console.log("currently promise object is looking like: ",p);
    }
)


console.log('ending.....')