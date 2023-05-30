const { Schema, model } = require("mongoose");

const OrderShema = new Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  order: [
    {
      info: {
        id: String,
        name: String,
        photo: String,
        price: String,
      },
      amount: Number,
    },
  ],
});

module.exports = model("Order", OrderShema);
