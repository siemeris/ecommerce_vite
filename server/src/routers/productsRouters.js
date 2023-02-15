const express = require('express');
const router = express.Router();

const {
    products,
    createProducts,
    updateProducts,
    deleteProducts
} = require('../controllers/productsControllers')

// PATH /API
// 
router.get('/filter', products);
router.post('/computadoras', createProducts);
router.put('/computadoras:id', updateProducts);
router.delete('/computadoras:id', deleteProducts);



module.exports = { productRouter: router };