const mongoose = require("mongoose");
const env = require("../config/env.js");

const connectToDB = async () => {
  try {
    await mongoose.connect(env.MONGODB_DATABASE_NAME);
    console.log("Connect to db");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
module.exports = connectToDB;
