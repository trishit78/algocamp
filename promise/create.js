function getRandomInt(max){
    return Math.floor(Math.random()* max);
}

function createPromiseWithTimeout(){
    return new Promise(function executor(resolve,reject){
        setTimeout(function(){
            let num = getRandomInt(10);
            if(num %2 == 0){
                resolve(num);
            }
            else{
                reject(num);
            }
        },10000);
    });
}

// let y = createPromiseWithTimeout();
// console.log(y);


//////////////////////////////////////////////////////////////


function createPromiseWithTimeout1(){
    return new Promise(function executor(resolve,reject){
        setTimeout(function(){
            let num = getRandomInt(10);
            if(num %2 == 0){
                console.log("fulfilling");
                resolve(num);            // the random number is in the resolve
                console.log("completed resolving");
                resolve(10);            // after asigning the value to the resolve , it cannot be changed
                console.log("resolving again");
                return num;
            }
            else{
                console.log("rejected");
                reject(num);       //  the random number is in the resolve
                console.log("completed resolving");
                reject(10);         // after asigning the value to the reject, it cannot be changed
                console.log("rejecting again");
                return num;
            }
        },10000);
    });
}

let x = createPromiseWithTimeout1();
console.log(x);