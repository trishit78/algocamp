const express = require('express');

const router = express.Router();

const {getAllBooks,getSingleBook,AddBook,updateBook,deleteBook} = require('../controllers/book-controller')
router.get('/get',getAllBooks);   // get all books
router.get('/get/:id',getSingleBook);  //get single book
router.post('/add',AddBook);   //add a single book
router.put('/update/:id',updateBook)  //update a book
router.delete('/delete/:id', deleteBook)  //delete a book


module.exports = router;
