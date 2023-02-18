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
            const productCreate =  await Products.create(req.body);
            productCreate.save()

            return res.status(202).json({
                status: 'succes',
                data: {
                    productCreate
                }
            })
        } catch (error) {
            return res.status(404).json({
                status: 'fail',
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