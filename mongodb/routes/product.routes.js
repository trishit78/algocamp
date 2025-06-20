const express = require('express');

const productController = require('../controllers/product.controllers')
const router = express.Router();

router.post("/add",productController)

module.exports = router;