import cors from "cors";
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import userRoutes from './routes/userRoutes.js';


dotenv.config()

connectDB();

const app = express();
app.use(cors())
const port=process.env.PORT || 5000 ;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json()) //allow us to use json data on the req.body.

app.use('/api/products', productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)


app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)


const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads'))) //make uploads folder static


// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } 

  app.get('/', (req, res) => {
    res.send('API is running....')
  })




app.use(notFound)//middleware

app.use(errorHandler)


app.listen(port,console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`));