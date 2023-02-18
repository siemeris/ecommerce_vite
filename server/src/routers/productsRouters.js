const express = require('express');
const router = express.Router();

// middelwares
const {
  producRegisterBody
} = require('../middlewares/productBody.middleware')
const {
  validate
} = require('../middlewares/body.middleware')

const Product = require('../controllers/productsControllers')


router.post('/register', validate(producRegisterBody), Product.crearProducto);
router.put('/update:id', Product.actualizarProducto);
router.delete('/delete:id', Product.deleteProduct);



module.exports = { productRouter: router };