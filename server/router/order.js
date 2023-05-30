const OrderController = require("../controller/order");

const router = require("express").Router();

router.post("/", OrderController.createdOrder);

module.exports = router;
