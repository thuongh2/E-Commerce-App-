import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routers/auth.js";
import userRoute from "./routers/user.js";
import productRoute from "./routers/product.js";
import cartRoute from "./routers/cart.js";
import orderRoute from "./routers/order.js";
import stripeRoute from "./routers/stripe.js";

import cors from "cors";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
