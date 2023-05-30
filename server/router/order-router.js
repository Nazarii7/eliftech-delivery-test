const OrderController = require("../controller/order-controller");
const Router = require("express").Router;

const orderRouter = new Router();

orderRouter.post("/create_order", OrderController.createdOrder);
orderRouter.delete("/:id", OrderController.deleteOrder);
orderRouter.get("/", OrderController.getOrders);

module.exports = orderRouter;
