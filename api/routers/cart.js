import {
  createCart,
  deletedCard,
  getCart,
  getCarts,
  updatedCart,
} from "../controllers/cart.js";

import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

import express from "express";

const router = express.Router();

//CREATE

router.post("/", verifyToken, createCart);

//UPDATE
router.put("/:id", verifyUser, updatedCart);

//DELETE
router.delete("/:id", verifyUser, deletedCard);

//GET USER CART
router.get("/find/:userId", verifyUser, getCart);

// //GET ALL

router.get("/", verifyAdmin, getCarts);

export default router;
