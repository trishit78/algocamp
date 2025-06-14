const book = require('../models/book.models')


const getAllBooks = async(req,res)=>{

}

const getSingleBook = async(req,res)=>{
    
}

const AddBook = async(req,res)=>{
    try {
        const newAddedBook = await book.create(req.body);
        res.json({
            success:true,
            msg:'book added successfully',
            data:newAddedBook            
        })
    } catch (error) {
        
    }


}

const updateBook = async(req,res)=>{
    
}

const deleteBook = async(req,res)=>{
    
}

module.exports = {
    getAllBooks,getSingleBook,AddBook,updateBook,deleteBook
}