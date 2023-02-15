const Products = require('../models/productsModels');

class products {

    async findAll(){
        try {
            return await Products.find().lean();
        } catch (error) {
            throw error
        }
    }
    async create(Products){
        try {
            return await Products.create(Products);
        } catch (error) {
            throw error
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


module.exports = new products;