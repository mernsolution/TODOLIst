const express =require("express")
const productController= require('../controller/productController')
const router=express.Router();

router.post("/CreateProduct", productController.CreateProduct)
router.get("/findProduct",productController.findProduct);
router.post("/UpdateProduct/:id",productController.UpdateProduct)
router.post("/deleteProduct/:id", productController.deleteProduct)


module.exports= router;