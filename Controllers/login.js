const passwordvalidator = require("./passwordcomparer");
const mongoose = require('mongoose')
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.send(422).json({ err: "please fill all required fields" });
  }
  User.findOne({ email: email }).then((saveduser) => {
    console.log(saveduser);
    if (!saveduser) {
      return res.status(422).json({ error: "invalid email or password" });
    }
    return passwordvalidator(password, saveduser);
  });
};
