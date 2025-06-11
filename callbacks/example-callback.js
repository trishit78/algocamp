const fs = require('fs');

fs.readFile('input.txt','utf8',(err,data)=>{
  if(err){
      throw err;
        
  } 
    console.log("this is tha data of input file:", data);

    const modify = data.toUpperCase();
    fs.writeFile('output.txt',modify,(err)=>{
        if(err) throw err;
        console.log("the data is modified");
    })

})