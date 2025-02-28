const mongoose = require("mongoose");

const blacklistTokenSchema = mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 86400, // 24 hours in second
  },
});

const blacklistToken = mongoose.model("BlacklistToken", blacklistTokenSchema);
module.exports = blacklistToken;
