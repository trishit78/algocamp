function download(url){
    console.log("starting the download ");
    return new Promise(function exec(res,rej){
        setTimeout(function p(){
            console.log("Completed downloading data in 5 sec");
            const content = "ABCDEF";
            res(content);
        },5000);
    })
}

download("www.xyz.com")
.then(function fulfillmentHandler(value){
    console.log("Content downloaded is ", value);
})

//here we are not giving the access of the callback to the download function

//  if the res(content) is send two times then also only one time the callback will be executed

// if the res function is not called then also we will get to know , because the status will always be in a pending state