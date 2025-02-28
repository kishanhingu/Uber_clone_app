// const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const env = require("../config/env.js");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  //   const isBlacklisted = await UserModel.findOne({ token });

  //   if (isBlacklisted) {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);
    const user = await UserModel.findById(decoded._id);

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
