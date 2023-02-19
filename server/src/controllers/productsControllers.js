const Products = require('../models/productsModels');

exports.crearProducto = async (req, res) => {
    
    try {
        let product;
        product = new Products(req.body);
        await product.save();
        res.send(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {

    try {
        const products = await Products.find();
        res.json(products)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProducto = async (req, res) => {
    
    try {
        const { title, model, brand, price, description } = req.body;
        let product = await Products.findById(req.params.id);
        if (!product) {
            res.status(404).json({ msg: 'No existe el producto '})
        }

        product.title = title;
        product.model = model;
        product.brand = brand;
        product.price = price;
        product.description = description;

        product = await product.findOneAndUpdate({ _id: req.params.id },product, {new: true} )
        res.json(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');  
    }
}

exports.productoById = async (req, res) => {
    
    try {
        let product = await Products.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'No existe el producto '})
        }
        return res.json(product);

    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error' });;  
    }
}

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
    try {
     
      const porductFind = await Products.findByIdAndDelete(id)

        if (!porductFind) {
            return res.status(404).json({ msg: 'No existe el producto '})
        }

        return res.json({ msg: 'Producto eliminado con exito'});

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Hubo un error' });;  
    }
}


