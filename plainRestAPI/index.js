// http module can help you to create http server

const http = require('http');
// 1.  we would like to setup a http server

const PORT =3000;  // we defined a var to store the value of the port
const server = http.createServer(async(req,res)=>{
    // whenever any request hits my server, this func will be called
    console.log('req recieved');
    
    if(req.method == "GET"){
        res.end("GET request recieved");
    }else if(req.method == "POST"){
        // in post req lets send the response code as 201
        res.writeHead(201);
        res.end("post request recieved");
    }
    else{
        res.end("hello");
    }
});    // creating a new server instance, but it is not running

server.listen(PORT,()=>{
    // this function will be called when the sever is started.
    console.log("server is running on port 3000");
})

