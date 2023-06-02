const { Orders } = require("../models/index");

class OrderController {
  async createdOrder(req, res) {
    try {
      const { customerInfo, cart, totalPrice } = req.body;
      const newOrder = new Orders({
        address: customerInfo.address,
        email: customerInfo.email,
        phone: customerInfo.phone,
        name: customerInfo.name,
        order: cart,
        totalPrice,
      });

      await newOrder.save();

      return res.json(newOrder);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }

  async getOrders(req, res) {
    try {
      const orders = await Orders.find({});

      return res.json(orders);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
}

module.exports = new OrderController();
