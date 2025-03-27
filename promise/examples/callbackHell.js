function download(url,cb){
    console.log("started downloading from : ", url);
    setTimeout(function down(){
        console.log("Downloading completed");
        const content = "ABCDEF";
        cb(content);
    },5000);
}


function writeFile(data,cb){
    /*
    uploads the data from a file to a given url
    */
   console.log("started writing a file with", data);
    setTimeout(function write(){
        console.log("completed writing the data in a file");
        const filename = "file.txt";
        cb(filename);
    },5000);
}

function upload( url, file, cb){
    console.log("started uploading ",file,"on", url);
    setTimeout(function up(){
        console.log("upload completed.");
        const response = "SUCCESS";
        cb(response);
    },4000)
}


download("www.xyz.com", function processDownloading(data){
    console.log("we are now going to process the downloaded data:  ", data);
    writeFile(data, function processWrite(filename){
        console.log("we have downloaded and written the file,now will upload");
        upload("ww.upload.com", filename,function processUpload(response){
            console.log("we have uploaded with", response);
        })
    })
})


// this is an example of inversion of control
// here cb hell exists
// inversion of control is also a problem here.