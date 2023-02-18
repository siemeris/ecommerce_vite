const Products = require('../models/productsModels');

class Product {

    async findAll(req, res, next) {
        try {
            return products =  await Products.find().lean();
            res.status(201).json({
                status: 'success',
                data: {
                    products
                }
            })
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                errMenssage: error.message
            })
        }
    }
    async create(req, res, next) {
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
    async delete(req, res, next) {
        const { id } = req.params
        try {
            const productDelet = await Products.deleteOne({_id: id});
            productDelet.save()

            res.status(201).json({
                status: 'success',
                message: 'se elimino exitosomente',
                            })

            
        } catch (error) {
            return res.status(200).json({
                status: 'fail',
                message: error.message
            })
        }
    }
    async update(req, res, next) {
        const { id } = req.params
        try {
            const productUpdate = await Products.findByIdAndUpdate(id);
            productUpdate.save()
            res.status(201).json({
                status: 'success',
                message: 'se actualizo exitosomente',
                data: {
                    product: productUpdate
                }
            })
        } catch (error) {
            return res.status(200).json({
                status: 'fail',
                message: error.message
            })
        }
    }
};


module.exports = new Product;