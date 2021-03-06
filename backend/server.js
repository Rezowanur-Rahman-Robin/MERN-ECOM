import path from 'path'
import express from'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';


dotenv.config()

connectDB();

const app = express();

const port=process.env.PORT || 5000 ;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json()) //allow us to use json data on the req.body.

app.get('/',(req,res)=>{
    res.status(200).send('API is running');
})


app.use('/api/products', productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)


app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)


const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads'))) //make uploads folder static




app.use(notFound)//middleware

app.use(errorHandler)


app.listen(port,console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`));