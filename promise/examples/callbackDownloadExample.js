function download(url,cb){
    console.log("started downloading from url", url);
    setTimeout(function exec(){
        console.log("completed downloading after 5s");
        const content = "ABCDEF";
        cb(content);
    },5000);
}

download("www.xyz.com", function processDownloading(data){
    console.log("downloading data is", data);
})



// in this peice of the i can only call the download function and give a callback,url
// i have no control over the callback , how many times it will be called or not get called
// here i am give the access of the callback to the third party function 