import { createRouter } from "next-connect"
import { connect } from "@/backend/config/mongodb"
import { newProduct, getProducts } from "@/backend/controllers/productController"

const handler = createRouter()

connect()

handler.post(newProduct)
handler.get(getProducts)

export default handler