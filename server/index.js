require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const moongoose = require("mongoose");

const orderRouter = require("./router/order-router");
const productRouter = require("./router/product-router");
const shopRouter = require("./router/shop-router");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/shops", shopRouter);

const start = async () => {
  try {
    await moongoose.connect(process.env.DB_URL, {
      maxPoolSize: 50,
      wtimeoutMS: 2500,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log(`Server started on PORT = ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
