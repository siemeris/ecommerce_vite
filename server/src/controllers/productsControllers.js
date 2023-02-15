const Products = require('../models/productsModels');

class Product {

    async findAll(){
        try {
            return await Products.find().lean();
        } catch (error) {
            throw error
        }
    }
    async create(req, res, next){
        try {
          const productNew = new Products(req.body);
          productNew.save();
          
          res.status(201).json({
            status: 'success',
            data: {
              product: productNew
            }
          })
        } catch (error) {
          return res.status(500).json({
            status: 'fail',
            message: error.message
          })
        }
    }
    async filter(options) {
        // precio, categoria, modelo, marcas
        // code......
    }
    async delete(id){
        try {
            return await Products.findByIdAndDelete(id);
        } catch (error) {
            throw error
        }
    }
    async update(id){
        try {
            return await Products.findByIdAndUpdate(id);
        } catch (error) {
            throw error
        }
}};


module.exports = new Product;