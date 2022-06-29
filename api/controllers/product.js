import Product from "../models/Product.js";

export const saveProduct = async (req, res, next) => {
    const newProduct = new Product(req.body);
  
    try {
      const saveProduct = await newProduct.save();
      res.status(200).json(saveProduct);
    } catch (err) {
      next(err);
    }
  }
  
  //UPDATE
  
  export const updateProduct =  async (req, res, next) => {
    try {
      const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateProduct);
    } catch (err) {
      next(err);
    }
  }
  
  //DELETE
  
  export const deleteProduct = async (req, res, next) => {
    try {
      const updateProduct = await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      next(err);
    }
  }
  
  // GET PRODUCT
  
  export const getProduct = async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }
  
  // GET ALL PRODUCT
  
  export const getProducts = async (req, res, next) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
  
    try {
      let products;
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }
  
  