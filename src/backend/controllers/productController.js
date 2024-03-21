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


export const getProductDetails = async (slug) => {
    console.log('slug Ctrl: ', slug)
    const product = await Product.findOne({ slug })

    if (!product) {
        return next(new ErrorHandler("Product not found.", 404))
    }

    res.status(200).json(product)
}
