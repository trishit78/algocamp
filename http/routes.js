const http = require('http');
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url == '/'){
        res.end('home page')
    }
    else if(url == '/projects'){
        res.end('projects page');
    }
    else{
        res.end('this page is not found');
    }
})

server.listen(3000,()=>{
    console.log("this is on port 3000");
})