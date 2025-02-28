const express = require("express");
const app = express();
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoutes);
module.exports = app;
