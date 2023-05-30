const shopShema = require("../models/shop-model");

class ShopController {
  async getShops(req, res, next) {
    try {
      const page = req.query.page || 1;
      const limit = 9;
      const shops = await shopShema
        .find({})
        .skip((page - 1) * limit)
        .limit(10)
        .populate("products");
      return res.json(shops);
    } catch (error) {
      next(error);
    }
  }
  async getShopById(req, res, next) {
    try {
      const shop = await shopShema.findById(req.params.id);
      if (shop) {
        return res.json(shop);
      } else {
        return res.status(404).end();
      }
    } catch (error) {
      next(error);
    }
  }
  async createShop(req, res, next) {
    try {
      const body = req.body;
      if (body.name === undefined) {
        return res.status(400).json({
          error: "content missing",
        });
      }
      const shop = new shopShema({
        name: body.name,
        products: [],
      });
      const savedShop = await shop.save();
      return res.status(201).json(savedShop);
    } catch (error) {
      next(error);
    }
  }
  async deleteShop(req, res, next) {
    try {
      const id = req.params.id;
      await shopShema.findByIdAndRemove(id);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ShopController();
