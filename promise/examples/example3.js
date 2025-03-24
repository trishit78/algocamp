console.log("start of the file");

setTimeout(function timer1(){
    console.log("timer1 done");
},0);

for(let i=0;i<100000000;i++){
    //something
}

//  PROMISE RESOLVE

// function f(){
//     return new Promise(function exec(res,rej){
//         res("sanket's promise");
//     })
// }

let x = Promise.resolve("sanket's promise");
x.then( function processPromise(value){
    console.log("whose promise ? ", value);
});

setTimeout(function timer2(){
    console.log("timer 2 done");
},0);

console.log("End of the file");