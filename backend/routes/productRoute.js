import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";
// import products from "../data/product.js";
const router = express.Router();

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       return res.json(product);
//     }

//     res.status(404).json({ message: "Resource not found" });
//   })
//);

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
