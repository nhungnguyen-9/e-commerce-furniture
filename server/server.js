import express from 'express'
import dotenv from 'dotenv'
import connectDatabase from './config/mongodb.js'
import { errorHandling } from './middleware/ErrorHandling.js'
import userRouter from './routes/UserRoute.js'
import productRouter from './routes/ProductRoute.js'
import cors from 'cors'

dotenv.config()
connectDatabase()
const port = process.env.PORT

const app = express()

//config cors
app.use(cors())

app.use(express.json())

//api
app.use('/api/auth', userRouter)
app.use('/product', productRouter)

//error handling middleware
app.use(errorHandling)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})