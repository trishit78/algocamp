// const express = require('express');
// const app = express();

// const port = 3000;

// app.use(express.json());

// app.get('/',(req,res)=>{
//     res.json('welcome to bookstore api');
// })

// const books = [
//     {
//         id:1,
//         name:'Book 1'
//     },
//     {
//         id:2,
//         name:'Book 2'
//     },
//     {
//         id:3,
//         name:'Book 3'
//     }

// ]


// app.get('/get',(req,res)=>{
//     res.json({
//         data:books,
//         message:'data of all the books'
//     })
// })


// app.get('/book/:id',(req,res)=>{
//     const singleBook = parseInt(req.params.id);
//     const book = books.find((book)=>book.id === singleBook);
//     res.json({
//         data:book,
//         message:'the result of a single book'
//     }) 
// })


// app.post('/add',(req,res) =>{
    
//     const newbook = {
//         id:books.length + 1,
//         name:`Book ${books.length +1 }`
//     }
//     books.push(newbook);
//     res.json({
//         data:books,
//         message:'book added'
//     })
// })

// app.put('/update/:id',(req,res)=>{
//     const singleBook = parseInt(req.params.id);
//     const book = books.find((book)=>book.id === singleBook);
//     if(book != -1){
//         book.name = req.body.name || book.name;
//         res.json({
//             message:'updated successfully',
//             data:books            
//         })
//     } 
// })


// app.delete('/delete/:id',(req,res)=>{
//     const book = books.findIndex((book)=>book.id === parseInt(req.params.id));
//     const newbooks = books.splice(book ,1);
//     res.json(newbooks);
// })




// app.listen(port,()=>{
//     console.log('server is running');
// })


const mongoose  = require('mongoose');
mongoose.connect("mongodb+srv://trishit456:QrJNhrzr3jzseDi5@cluster0.t8utjub.mongodb.net/")
.then(()=>console.log("database connected successfully"))
.catch((e)=>console.log(e));


const {Schema} = mongoose;

const userSchema = new Schema ({
    name:String,
    email:String,
    age:Number,
    isActive:Boolean,
    tags:[String],
    createdAt:{type:Date,default:Date.now()}
})

const User = mongoose.model("User",userSchema);

async function runQueryExamples() {
    try {
        const newUser = new User({
            name:'honit',
            email:'trishit456@gmail.com',
            age:40,
            isActive:true,
            tags:['a','b','c']
        })
        await newUser.save();


        console.log('newUser is ',newUser);

        const allUsers = await User.find({});
        console.log(allUsers);
    } catch (error) {
        console.log(error);
    }finally{
        await mongoose.connection.close();
    }
}

runQueryExamples();