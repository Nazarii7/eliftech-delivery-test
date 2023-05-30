const { orderShema } = require("../models/cart-model");

class OrderController {
  async createdOrder(req, res) {
    try {
      const order = req.body;
      const newOrder = new orderShema(order);
      const createdOrder = await newOrder.save();
      res.json(createdOrder);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error" });
    }
  }
}

module.exports = new OrderController();
