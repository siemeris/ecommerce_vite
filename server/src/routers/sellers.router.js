const express = require('express');

// middlewares
const { validate } = require('../middlewares/body.middleware');

// controlers sellers
const { 
  registerSeller,
  loginSeller,
  getSellerById,
  deleteSeller
} = require('../controllers/seller.controllers');

const router = express.Router();


// routers
router.post('/register', registerSeller);
router.post('/login', loginSeller);
router.get('/seller/:id', getSellerById);
router.delete('/seller/delete/:id', deleteSeller);