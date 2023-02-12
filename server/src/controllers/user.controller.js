const AppError = require('../utils/appError');
const tryCatch = require('../utils/tryCatch');

const bcrypt = require('bcryptjs');

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

exports.Register = tryCatch(async (req, res, next) => { 
  const {
    email, 
    password,
    nameUser,
    nameFull,
  } = req.body;  

  // encontrar en la base de datos si existe el email
  const userFind = await User.findOne({ email });

  if (userFind) {
    return next(new AppError('este usuario ya esta registrado', 404));
  }

  // encriptar contraseña
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const userNew = {
    email,
    password: passwordHash,
    nameUser,
    nameFull,
  }

  // resgistrando el usuario en el modelo User
  const user = await User.create(userNew);

  user.password = undefined;

  return res.status(200).json({
    code: 200,
    status: 'success',
    data: {
      user,
    }
  });

});


