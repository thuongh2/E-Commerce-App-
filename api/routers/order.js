import { createOrder, deleteOrder, getIcome, getOrders, getUserOrder, updateOrder } from "../controllers/order.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import express from "express";

const router = express.Router();

//CREATE

router.post("/",verifyUser, createOrder);

//UPDATE
router.put("/:id", verifyAdmin, updateOrder);

//DELETE
router.delete("/:id", verifyAdmin, deleteOrder);

//GET USER ORDERS
router.get("/find/:userId", verifyUser, getUserOrder);

// //GET ALL

router.get("/", verifyAdmin, getOrders);

// GET MONTHLY INCOME

router.get("/income", verifyAdmin, getIcome);

export default router