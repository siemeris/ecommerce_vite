const Products = require('../models/productsModels');


exports.crearProducto = async (req, res, next) => {
    
    try {
        Products = new Products(req.body);
        await Products.save();
        res.send(Products);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res, next) => {

    try {
        const Products = await Products.find();
        res.json(Products)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProducto = async (req, res, next) => {
    
    try {
        const { title, model, brand, price, description } = req.body;
        let Products = await Products.findById(req.params.id);
        if (!Products) {
            res.status(404).json({ msg: 'No existe el producto '})
        }

        product.title = title;
        product.model = model;
        product.brand = brand;
        product.price = price;
        product.description = description;

        Products = await Products.findOneAndUpdate({ _id: req.params.id },product, {new: true} )
        res.json(Products);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');  
    }
}

exports.obtenerProducto = async (req, res, next) => {
    
    try {
        let Products = await Products.findById(req.params.id);
        if (!Products) {
            res.status(404).json({ msg: 'No existe el producto '})
        }
        res.json(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');  
    }
}

exports.deleteProduct = async (req, res, next) => {
    
    try {
        let Products = await Products.findById(req.params.id);
        if (!Products) {
            res.status(404).json({ msg: 'No existe el producto '})
        }
        await Products.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');  
    }
}


