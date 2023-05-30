const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  id: String,
  shopId: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
  name: String,
  photo: String,
  price: Number,
});

module.exports = model("Product", ProductSchema);
