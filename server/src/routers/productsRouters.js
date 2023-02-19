const express = require('express');
const router = express.Router();

// middelwares
const {
  producRegisterBody
} = require('../middlewares/productBody.middleware')
const {
  validate
} = require('../middlewares/body.middleware')

const {
  actualizarProducto,
  crearProducto,
  obtenerProductos,
  updateProductoById,
  deleteProduct
} = require('../controllers/productsControllers')


router.post('/register', validate(producRegisterBody), crearProducto);
router.put('/update/:id', updateProductoById);
router.delete('/delete/:id', deleteProduct);



module.exports = { productRouter: router };