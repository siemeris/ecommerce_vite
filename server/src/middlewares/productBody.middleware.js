const { body } = require('express-validator'); 

exports.producRegisterBody = [
  body('title')
    .notEmpty()
    .withMessage('El titulo es requerido')
    .isString()
    .withMessage('El titulo debe ser un string'),
  body('model')
    .notEmpty()
    .withMessage('El modelo es requerido')
    .isString()
    .withMessage('El modelo debe ser un string'),
  body('brand')
    .notEmpty()
    .withMessage('La marca es requerida')
    .isString()
    .withMessage('La marca debe ser un string'),
  body('price')
    .notEmpty()
    .withMessage('El precio es requerido')
    .isNumeric()
    .withMessage('El precio debe ser un numero'),
  body('description')
    .notEmpty() 
    .withMessage('La descripcion es requerida')
    .isString()
    .withMessage('La descripcion debe ser un string'),
  body('characteristics')
    .notEmpty()
    .withMessage('Las caracteristicas son requeridas')
    .isArray()
    .withMessage('Las caracteristicas deben ser un array'),
]
