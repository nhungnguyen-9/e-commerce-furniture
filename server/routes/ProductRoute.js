import express from 'express'
import { getProducts, newProduct } from '../controllers/productController.js'

const productRouter = express.Router()

productRouter.get('/', getProducts)

productRouter.post('/create', newProduct)

// productRouter.get('/login', login)

export default productRouter