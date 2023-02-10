const AppError = require('../utils/appError');
const tryCatch = require('../utils/tryCatch');

const User = require('../models/usersModels');

exports.login = tryCatch(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const userFind = await User.findOne({ email, password });


  if (!userFind) {
    return next(new AppError('User not found', 404));
  }

  return res.status(200).json({
    code: 200,
    status: 'success',
    data: {
      user: userFind,
    }
  }).send();

}); 


