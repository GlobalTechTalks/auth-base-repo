const bcryptgenerator = require("./Saltgenerator");
const mongoose = require('mongoose')
const User = mongoose.model("User");

const saveuser = require("./Savinguser");
module.exports = (req, res, next) => {
  const { name, email, password } = req.body;
  //console.log(req.body)
  if (!email || !name || !password) {
    res.status(422).json({ err: "all fields are compulsary" });
  }

  //finding user
  User.findOne({ email: email })
    .then((result) => {
      if (result) {
        res
          .status(422)
          .json({ err: "user already exist with this email adress" });
      }
      //generating salt and saving user figured by a friend still have to learn how this should be done only salt generation
      let hash = bcryptgenerator(password);
      const user = new User({
        email,
        password: hash,
        name,
      });

      //saving user
      let saveduser = saveuser(user);
      return res.status(200).json(saveduser);
    })
    .catch((err) => console.log(err));
};
