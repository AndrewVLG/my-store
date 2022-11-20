
import Product from "../models/Product.js"
const utilits = () => {

    const getAll = async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch(e) {
            res.status(500).json({message: 'Server error'})
        }

    }

    const getProductsbyCategory = async (req, res) => {
        try {
            const products = await Product.find({category: req.params.category});
            res.json(products);
        } catch(e) {
            res.status(500).json({message: 'Server error'})
        }


    }






    return {getAll, getProductsbyCategory};
}

export default utilits;