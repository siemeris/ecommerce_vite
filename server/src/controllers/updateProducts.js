const Products = require('../models/productsModels');

class updateProducts {

    async findAll(){
        try {
            return await Products.find().lean();
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


module.exports = new updateProducts;