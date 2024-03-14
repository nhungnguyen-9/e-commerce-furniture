import Product from "../models/ProductModel.js"

export const newProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(200).json({
        product,
    })
}

export const getProducts = async (req, res, next) => {
    let products
    try {
        products = await Product.find()
    } catch (err) {
        console.log(err)
    }
    return res.status(200).json({ products })
}