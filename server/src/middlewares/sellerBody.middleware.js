const { body } = require('express-validator');

// models
const Seller = require('../models/sellerModels');
const AppError = require('../utils/AppError');

exports.sellerRegisterBody = [
  body('name')
    .notEmpty()
    .withMessage('Name is required'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email is invalid')
    .custom( async(value) => {
      const SellerExist = await Seller.findOne({ email: value })
      if (SellerExist) {
        return AppError('seller already exist', 400)
      }
      return true
    })
]