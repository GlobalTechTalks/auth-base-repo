const crypto = require("crypto");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res) => {
  crypto.randomByte(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(422)
          .json({ err: "user dosent exist with this email" });
      }
      user.resettoken = token;
      user.expire = Date.now() + 600;
      user.save().then((result) => {
        sendgridtransport.sendMail({
          to: user.email,
          from: "no-reply@insta.com",
          subject: "password-reset",
          html:
            "<h1>you requested for password reset</h1>" +
            `<h5>click on this link <a href="http://localhost:5000/${token}"></a></h5>`,
        });
        res.json({ message: "check your email" });
      });
    });
  });
};
