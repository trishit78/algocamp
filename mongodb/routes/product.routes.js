const express = require('express');

const addProduct = require('../controllers/product.controllers')

const router = express.Router();

router.post("/add",addProduct)

module.exports = router;