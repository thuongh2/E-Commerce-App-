import Product from "../models/Product.js";
import express from "express";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import { deleteProduct, getProduct, getProductByName, getProducts, saveProduct, updateProduct } from "../controllers/product.js";

const router = express.Router();

// CREATE

router.post("/", verifyAdmin, saveProduct);

//UPDATE

router.put("/:id", verifyAdmin, updateProduct);

//DELETE

router.delete("/:id", verifyAdmin, deleteProduct);

// GET PRODUCT

router.get("/find/:id", getProduct);

// GET BY NAME

router.get("/find/name/:name", getProductByName);

// GET ALL PRODUCT

router.get("/", getProducts);

export default router;
