import cookieParser from "cookie-parser"
import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/db.js"
import userRouter from "./routes/UserRoute.js"
import sellerRouter from "./routes/sellerRoute.js"
import connectCloudinary from './config/cloudinary.js'
import productRouter from './routes/productRoutes.js'
import cartRouter from "./routes/cartRoute.js"
import addressRouter from "./routes/addressRoute.js"
import orderRouter from "./routes/orderRoute.js"

const app = express()
const port = 3000

await connectDB()
await connectCloudinary()

//allow multiple origins
const allowedOrigins = 'http://localhost:5173'

//Middleware configuration
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: allowedOrigins, credentials: true}))

app.get('/', (req, res) => 
  res.send('Hello, API is working fine!')
)
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})
