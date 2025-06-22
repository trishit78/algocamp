const Product = require('../models/product.models');

const addProduct = async(req,res)=>{
    try {
    const sampleProducts = [
        {
            name:"laptop",
            category:"electronics",
            price:999,
            inStock:true,
            tags:["computer","tech"]
        },
        {
            name:"smartphone",
            category:"electronics",
            price:699,
            instock:true,
            tags:["mobile","tech"]
        },
        {
            name:"Headphones",
            category:"Electronics",
            price:199,
            inStock:false,
            tags:["audio","tech"]
        },
        {
            name:"Running shoes",
            category:"sports",
            price:89,
            inStock:true,
            tags:["footwear","running"]
        }
    ];
    const result = await Product.insertMany(sampleProducts);
    res.json({
        msg:"all the data is inserted"
    })
    } catch (error) {
        console.log('error occured in adding the product');
    }
};

module.exports = addProduct