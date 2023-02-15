const Products = require('../models/productsModels');

class deleteProducts {

    async findAll(){
        try {
            return await Products.find().lean();
        } catch (error) {
            throw error
        }
    }

    async delete(id){
        try {
            return await Products.findByIdAndDelete(id);
        } catch (error) {
            throw error
        }
}};


module.exports = new deleteProducts;