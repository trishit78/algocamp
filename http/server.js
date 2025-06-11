const http = require('http');

const port =3000;


const server = http.createServer((req,res)=>{
    console.log(req);
    res.writeHead(200,{'Content-Type':'text-plain' });
    res.end('hello from nodejs app')
})

server.listen(3000,()=>{
    console.log('server is running on 3000');
});