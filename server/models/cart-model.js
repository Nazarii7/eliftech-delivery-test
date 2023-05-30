const mongoose = require("mongoose");

const orderShema = new mongoose.Schema({
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

orderShema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model("Order", orderShema);
