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

