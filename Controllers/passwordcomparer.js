const dotenv = require("dotenv");
const bcrypt = require('bcrypt')
dotenv.config();
const JWTKEY = process.env.JWT_SECRET

const jwt = require('jsonwebtoken')
module.exports = function (password, saveduser) {
  bcrypt
    .compare(password, saveduser.password)
    .then((domatch) => {
      console.log(domatch);
      if (domatch) {
        //res.json({message: "succefully signin"})
        const token = jwt.sign({ sub: saveduser._id }, JWTKEY);
        const { _id, name, email } = saveduser;
        return { token, user: { _id, name, email } };
      } else {
        return { err: "invalid email or adress" };
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
