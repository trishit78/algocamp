// const {readFile} = require('fs/promises');    //commonjs module

// async function readGivenFile(pathToFile){
//     const data = await readFile(pathToFile);
//     console.log(data.toString());
// }


// const pathToFile = __dirname +"/index.html"

// // const data = await readFile(pathToFile);   // top level await only works in es module not in commonjs module
// // console.log(data.toString());                 


// readGivenFile(pathToFile)



//import { writeFile } from 'fs';
import {readFile,writeFile} from 'fs/promises';

console.log(import.meta.url);  // current file location
console.log(process.cwd());  // file location of the current working directory

//const pathToFile = process.cwd() +"/index.html";   //way1           absolute path

const pathToFile = new URL('./index.html', import.meta.url);  //way2    // relative path
const outputPath = new URL('./output.html', import.meta.url); 


try {
    let data = await readFile(pathToFile);
//console.log(data.toString());

let template = data.toString();
const obj={
    name:"Rahul",
    message:"Hello World",
}

for (const [key,value] of Object.entries(obj)){
    template = template.replace(`{{${key}}}`,value);
}
await writeFile(outputPath,template);

} catch (error) {
    console.log(error)

}