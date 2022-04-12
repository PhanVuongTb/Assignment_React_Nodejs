import express from "express";
import homeRoute from "./routes/home"
import productRoute from "./routes/product"
import categoryRoute from './routes/category'
import authRoute from './routes/auth'
import { checkAuth } from "./middlewares/checkAuth";
import mongoose from "mongoose";
import cors from "cors"
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/Assignment');

app.use(express.json());
app.use(cors());
app.use(homeRoute);
app.use(checkAuth, productRoute);
app.use("/api", checkAuth, productRoute);
app.use("/api", categoryRoute)
app.use("/api", authRoute)

app.listen(5000, () => {
    console.log("server is running on port 5000");
});