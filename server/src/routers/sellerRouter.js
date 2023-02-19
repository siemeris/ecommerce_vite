const express = require('express');
const router = express.Router();
const Sellers = require('../controllers/sellerControllers');


router.get('/obtain', Sellers.obtainSellers);
router.put('/update:id', Sellers.actualizarSellers);
router.delete('/delete:id', Sellers.eliminarSellers);



module.exports = { sellersRouter: router };