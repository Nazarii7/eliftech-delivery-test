const ShopController = require("../controller/shop-controller");
const { ctrlWrapper } = require("../middlewares");
const Router = require("express").Router;

const shopRouter = new Router();

shopRouter.get("/get_shops", ctrlWrapper(ShopController.getShops));

module.exports = shopRouter;
