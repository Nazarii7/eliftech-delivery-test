const orderShema = require("../models/cart-model");

class OrderController {
  async createdOrder(req, res, next) {
    try {
      const order = req.body;
      const newOrder = new orderShema(order);
      const createdOrder = await newOrder.save();
      return res.json(createdOrder);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteOrder(req, res, next) {
    try {
      const id = req.params.id;
      await orderShema.findByIdAndRemove(id);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }

  async getOrders(req, res, next) {
    try {
      const orders = await orderShema.find({});
      return res.json(orders);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new OrderController();
