const { validationChain, validationResult } = require('express-validator');

// Errors utils
const AppError = require('../utils/appError');

const validate = validations => { 

  return async (req, res, next) => { 
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);

    if (errors.isEmpty()) return next();

    return next(new AppError('Validation error', 400, errors.array()));
  };

};

module.exports = { validate };
