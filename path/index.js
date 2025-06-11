const path = require('path');
const fs = require('fs');
console.log('directory name', path.dirname(__filename));
console.log('file name',path.basename(__filename));

const pathJoin = path.join('/user','file','db','name')
// for joiing these only paths
console.log('path for joining',pathJoin);

const resolvePath = path.resolve('db','user','product');
// for joining the paths with all other dirname
console.log('resolved path',resolvePath);


const normalizePath = path.normalize('/user/path/../new/./db/products')

console.log('the normalized path',normalizePath);

const dataFolder = path.join(__dirname,"data");
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log('data named folder created');
}

const filePath = path.join(dataFolder,"example.txt");
fs.writeFileSync(filePath,'this is example')

const readContent = fs.readFileSync(filePath,'utf-8');
console.log('the fileContent is ',readContent);

const addedFileContent = fs.appendFileSync(filePath,'\n this is not a example');
console.log('file Content added');

const asyncFilePath = path.join(dataFolder,"async-example.txt");

fs.writeFile(asyncFilePath,'this is an example',(err)=>{
    if(err) throw err;
    console.log("async code is written");
    fs.readFile(asyncFilePath,'utf-8',(err,data)=>{
        if(err) throw err;
        console.log("the file data is ",data);
    })

});