const { Schema, model } = require("mongoose");

const ordersSchema = new Schema({
  customer: String,
  address: String,
  email: String,
  phone: String,
  name: String,
  totalPrice: Number,
  order: [
    {
      name: String,
      price: Number,
      img: String,
    },
  ],
});

const Orders = model("orders", ordersSchema);

module.exports = { Orders };
