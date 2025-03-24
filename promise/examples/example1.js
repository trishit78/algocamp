function fetchData(url){
    return new Promise(function (resolve,reject){
        console.log("starting downloading from ", url);
        setTimeout(function processDownloading(){
            let data= 'dummy data';
            console.log("download completed");
            resolve(data);
        },7000);
    });
}

console.log("start");
let promiseObj = fetchData("fsakfg");
promiseObj.then(function A(data){
    console.log("value is" , data);
})
console.log("end");