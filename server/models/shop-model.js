const { Schema, model } = require("mongoose");

const ShopSchema = new Schema({
  id: String,
  name: String,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = model("Shop", ShopSchema);
