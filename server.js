import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from "./config/db.js";
import  employeeRoutes from './routes/employeeRoute.js';





dotenv.config()

connectDB().catch((err) => {console.log(err)})


const app = express()
// app.use(morgan())
app.use(cors({
    origin: '*'
}));
app.use(express.json())






app.use('/api/v1', employeeRoutes)
//
app.get('/' ,(req,res)   => {
    res.send('Wokring')
})
//


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`listening on port ${PORT}`));

