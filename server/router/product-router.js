const ProductController = require("../controller/product-controller");
const Router = require("express").Router;

const productRouter = new Router();

productRouter.get("/", ProductController.getProduct);
productRouter.get("/:id", ProductController.getProductById);
productRouter.post("/create_product", ProductController.createProduct);
productRouter.delete("/:id", ProductController.deleteProduct);

module.exports = productRouter;
