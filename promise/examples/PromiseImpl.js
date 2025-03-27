function download(url,cb){
    return new Promise(function exec(resolve,reject){
        console.log("started downloading from : ", url);
        setTimeout(function exec(){
            console.log("Downloading completed");
            const content = "ABCDEF";
            resolve(content);
        },5000);
    })
}



function writeFile(data,cb){
    /*
    uploads the data from a file to a given url
    */
   return new Promise(function exec(resolve,reject){
    console.log("started writing a file with", data);
    setTimeout(function write(){
        console.log("completed writing the data in a file");
        const filename = "file.txt";
        resolve(filename);
    },5000);
   })
}

function upload( url, file){
    return new Promise(function exec(resolve,reject){
        console.log("started uploading ",file,"on", url);
    setTimeout(function exec(){
        console.log("upload completed.");
        const response = "SUCCESS";
        resolve(response);
    },4000)
    })
}

download("www.xyz.com")
.then(function processDownload(value){
    console.log("downloading done with following value",value);
    return writeFile(value);
})
.then(function processWrite(value){
    console.log("data written in the file with name:", value);
    return upload(value,"www.upload.com");
})
.then(function processUpload(value){
    console.log("we have uploaded with",value);
})