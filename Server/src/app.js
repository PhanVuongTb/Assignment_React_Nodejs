
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import productsRouter from "../routes/product";
import usersRouter from "../routes/user";
import categoryRoute from '../routes/category';
import authRoute from "../routes/auth";
const app = express();
//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

//route
app.use(productsRouter);
app.use(usersRouter);
app.use(categoryRoute);
app.use(authRoute);
//connec data
mongoose.connect('mongodb://127.0.0.1:27017/we16308')
    .then(() => console.log("Ket noi db thanh cong"))
    .catch((error) => console.log(error));


//connection
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server is running  port", PORT);
})