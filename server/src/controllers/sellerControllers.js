
const Sellers = require('../models/sellerModels');


exports.obtainSellers = async (req, res) => {

    try {
        const Sellers = await Sellers.find();
        res.json(Sellers)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarSellers = async (req, res) => {
    
    try {
        const { nombre, email, password, role, status } = req.body;
        let Sellers = await Sellers.findById(req.params.id);
        if (!Sellers) {
            res.status(404).json({ msg: 'No existe el producto '})
        }

        Sellers.nombre = nombre
        Sellers.email = email
        Sellers.password = password
        Sellers.role = role
        Sellers.status = status

        Sellers = await Sellers.findOneAndUpdate({ _id: req.params.id },Sellers, {new: true} )
        res.json(Sellers);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');  
    }
}

exports.obtenerSellers = async (req, res) => {
    
    try {
        let Sellers = await Sellers.findById(req.params.id);
        if (!Sellers) {
            res.status(404).json({ msg: 'No existe el producto '})
        }
        res.json(Sellers);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');  
    }
}

exports.eliminarSellers = async (req, res) => {
    
    try {
        let Sellers = await Sellers.findById(req.params.id);
        if (!Sellers) {
            res.status(404).json({ msg: 'No existe el producto '})
        }
        await Sellers.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');  
    }
}