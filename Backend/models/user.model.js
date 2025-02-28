const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("../config/env.js");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      firstname: {
        type: String,
        require: true,
        minlength: [3, "First name must be at least 3 characters long"],
      },
      lastname: {
        type: String,
        minlength: [3, "Last name must be at least 3 characters long"],
      },
    },
    email: {
      type: String,
      require: true,
      unique: true,
      // minlength: [5, "Email must be at least 5 character long"],
    },
    password: {
      type: String,
      require: true,
      select: false,
    },
    socketId: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = () => {
  return (token = jwt.sign({ _id: this._id }, env.JWT_SECRET));
};

userSchema.methods.comparePassword = async (password) => {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
