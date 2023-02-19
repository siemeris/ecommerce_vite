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
