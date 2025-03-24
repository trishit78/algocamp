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

x=download("www.xyz.com")                // this a promise1
x                                                           
.then(                                                        // this is promise2, different from promise1
    function fulfillmentHandler(value){
    console.log("Content downloaded is ", value);
    return "New promise string";                                    //  returning the string from          fullfillmentHandler , it calls the chained promise , which is newFullFillHandler
    },
    function rejectHandler1(value){
        console.log("rejected with", value);
    }
)
.then(                                             // this is promise3 which is a new chained promise
    function newFullFillHandler(value){
        console.log("value from chained then promise", value);
    }
)