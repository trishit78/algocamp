// function delayFn(time){
//     return new Promise((resolve)=>{
//         setTimeout(resolve,time)
//     })
// }

// console.log("this is start");
// delayFn(2).then(()=>{
//     console.log("this is 2 sec delay")
// })
// console.log('end');

function divide(num1,num2){
    return new Promise((res,rej)=>{
        if(num2 === 0) rej('cant be divided');
        else{
            res('answer is :'+num1/num2);
        }
    })
}

divide(10,5)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))