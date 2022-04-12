// b1: include thư viện http
import express from "express";
import cors from "cors"
import { checkAuth } from "./middlewares/checkAuth";
import Home from "./routes/home";
import Products from "./routes/products";
import mongoose from "mongoose";
import categoryRoute from "./routes/category";
import authRoute from './routes/auth'
const app = express();
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/Assignment');

app.use(express.json())
app.use(Home);
app.use("/api", checkAuth, Products);
app.use("/api", categoryRoute);
app.use("/api", authRoute)


// const homeRoute = require('./routes/home');
// app.use(homeRoute);

// const products = require('./routes/product');
// app.use(products);

app.listen(5000, () => {
    console.log("server is running")
})
