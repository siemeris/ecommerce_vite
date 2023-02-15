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

router.post('/computadoras', validate(producRegisterBody), Product.create);
router.put('/computadoras:id', Product.update);
router.delete('/computadoras:id', Product.delete);



module.exports = { productRouter: router };