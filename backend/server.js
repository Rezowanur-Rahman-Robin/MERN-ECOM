import express from'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';


dotenv.config()

connectDB();

const app = express();

const port=process.env.PORT || 5000 ;

app.get('/',(req,res)=>{
    res.status(200).send('API is running');
})

app.use('/api/products', productRoutes)

app.use(notFound)//middleware

app.use(errorHandler)


app.listen(port,console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`));