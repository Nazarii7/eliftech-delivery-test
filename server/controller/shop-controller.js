const { Shops } = require("../models/shop-model");

class ShopController {
  async getShops(res) {
    try {
      const shops = await Shops();
      return res.json(shops);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
}

module.exports = new ShopController();
