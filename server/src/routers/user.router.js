const express = require('express');

const {
  login,
  Register
} = require('../controllers/user.controller')

const router = express.Router();

router.post('/login', login);
router.post('/register', Register);

module.exports = { userRouter: router }; 