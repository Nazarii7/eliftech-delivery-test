const OrderController = require("../controller/order-controller");
const { ctrlWrapper } = require("../middlewares");
const Router = require("express").Router;

const orderRouter = new Router();

orderRouter.post("/create_order", ctrlWrapper(OrderController.createdOrder));
orderRouter.get("/get_orders", ctrlWrapper(OrderController.getOrders));

module.exports = orderRouter;
