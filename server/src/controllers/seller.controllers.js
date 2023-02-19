// utils
const AppError = require('../utils/AppError');
const tryCatch = require('../utils/tryCatch');

// bycript
const bycript = require('bcryptjs');

// models
const Seller = require('../models/sellerModels');

exports.registerSeller = tryCatch(async (req, res, next) => { 
  const { name, email, password } = req.body;
  const hashedPassword = await bycript.hash(password, 12);
  const seller = await Seller.create({
    name,
    email,
    password: hashedPassword
  });

  if (!seller) {
    return next(new AppError('Seller not created', 400));
  }

  seller.save();
  
  seller.password = undefined;

  res.status(201).json({
    status: 'success',
    data: {
      seller
    }
  });
});