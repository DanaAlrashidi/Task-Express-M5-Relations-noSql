const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alwaimry55:cwHwhc907ujwxL1Q@cluster0.wwncd98.mongodb.net/"
    );
    console.log("Connect to DB!");
  } catch (error) {
    console.log("Could not connect to DB", error);
  }
};
module.exports = connectDB;
