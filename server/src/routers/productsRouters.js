const express = require('express');
const router = express.Router();

const Product = require('../controllers/productsControllers')

console.log(' productos ---->  ', )

// PATH /API
// 
// router.get('/filter', products);
router.post('/computadoras', Product.create);
router.put('/computadoras:id', Product.update);
router.delete('/computadoras:id', Product.delete);



module.exports = { productRouter: router };