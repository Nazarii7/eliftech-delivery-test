const express = require("express");
const moongose = require("mongoose");
const config = require("config");
const { default: mongoose } = require("mongoose");

const PORT = config.get("serverPort");
const app = express();

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"));
    app.listen(5000, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
