const express = require('express');

const app = express();
const port = 3000;


app.get('/',(req,res)=>{
    res.send('this is home page');
})


app.get('/products',(req,res)=>{
    res.send('this is products page')
})

app.get('/products/:productId',(req,res)=>{
    const productid = parseInt(req.params.productId);
    const productList = [
        {
            id:1,
            name:'hdd'
        },
        {
            id:2,
            name:'ssd'
        },
        {
            id:3,
            name:'laptop'
        }
    ] 
    const selectedProduct = productList.find(product=>product.id === productid);
    if(selectedProduct){

        res.json(selectedProduct);
    }else{
        res.send(404);
    }
})

app.listen(port,()=>{
    console.log('server is running on port 3000');
})