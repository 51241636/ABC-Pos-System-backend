import express, { NextFunction, Request, Response } from "express";
import connectDB from "./config/database";
import userRouter from "../src/routes/userRoutes";
import "dotenv/config";

const app = express();

app.use(express.json());
connectDB();


app.use("/api",userRouter);
app.use((err:Error ,req:Request, res:Response, next:NextFunction) => {
  console.log(err.message);
  res.status(500).json({ message:err.message });
});

// app.use("/api",)


app.listen(process.env.PORT, () => {
    console.log("Server running on port 3000");
});