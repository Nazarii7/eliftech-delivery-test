const ShopController = require("../controller/shop-controller");
const Router = require("express").Router;

const shopRouter = new Router();

shopRouter.get("/", ShopController.getShops);
shopRouter.get("/:id", ShopController.getShopById);
shopRouter.post("/create_shop", ShopController.createShop);
shopRouter.delete("/:id", ShopController.deleteShop);

module.exports = shopRouter;
