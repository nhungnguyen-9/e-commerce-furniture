import Product from "../models/Product"

export const newProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(200).json({
        product,
    })
}

export const getAllProducts = async (req, res, next) => {
    const products = await Product.find()
    res.status(200).json({
        products
    })
}