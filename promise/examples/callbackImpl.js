// Tasks: (Don't use promises only use callbacks)
// 1. write a function to download data from a url
// 2. write a function to save that downloaded data in a file and return the filename
// 3. write a function to upload the file written in previous step to a newUrl


function download(url, cb){
    console.log("started downloading content",url);
    setTimeout(function down(){
        console.log("downloading...");
        const content = "ABCDEF";
        cb(content);
    },4000);
}


function upload( url, file, cb){
    console.log("started uploading ",file,"on", url);
    setTimeout(function up(){
        console.log("uploaded the file..");
        const filename = "file.txt";
        
    },4000)
}

download("www.xyz.com", function process(content){
    console.log("the content is ", content)
})