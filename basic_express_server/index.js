const express  = require('express')
const app = express();

const PORT =3000;

app.get('/', (req,res)=>{
    res.send('hello world');
})

app.post('/', (req,res)=>{
    res.send('hello world post');
})

app.delete('/', (req,res)=>{
    res.send('hello world delete');
})



app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})