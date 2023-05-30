const productShema = require("../models/product-model");
const shopShema = require("../models/shop-model");

class ProductController {
  async getProduct(req, res, next) {
    try {
      const page = req.query.page || 1;
      const limit = 10;
      const shops = await productShema
        .find({})
        .skip((page - 1) * limit)
        .limit(10);
      return res.json(shops);
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    try {
      const shop = await productShema.findById(req.params.id);
      if (shop) {
        return res.json(shop);
      } else {
        return res.status(404).end();
      }
    } catch (error) {
      next(error);
    }
  }

  async createProduct(req, res, next) {
    try {
      const body = req.body;
      if (body.shopId === undefined) {
        return res.status(400).json({
          error: "Content missing",
        });
      }
      const shopId = body.shopId;
      const shop = await shopShema.findById(shopId);
      if (!shop) {
        return res.status(404).json({
          error: "Shop not found",
        });
      }
      const newProd = new productShema({
        ...body,
        shopId: body.shopId,
        price: Math.floor(Math.random() * 96) + 5,
      });
      const createdProduct = await newProd.save(newProd);
      await shopShema.findByIdAndUpdate(shopId, {
        products: shop.products
          ? shop.products.concat(createdProduct._id)
          : [createdProduct._id],
      });
      res.status(201).json(createdProduct);
    } catch (error) {
      next(error);
    }
  }
  async deleteProduct(req, res, next) {
    try {
      const id = req.params.id;
      await productShema.findByIdAndRemove(id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
