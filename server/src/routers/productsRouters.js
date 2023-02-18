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

router.post('/register', validate(producRegisterBody), Product.create);
router.put('/update:id', Product.update);
router.delete('/delete:id', Product.delete);



module.exports = { productRouter: router };