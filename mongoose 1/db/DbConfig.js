// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();

mongoose.connect(
  "mongodb+srv://Daniel:04302001@cluster0.2r2uv.mongodb.net/rawExpressTests?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const MyModel = mongoose.model("Test", new Schema({ name: String }));

MyModel.create({ name: "testing" });
