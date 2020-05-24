const bcrypt = require("bcrypt");

module.exports = function (password) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return hash;
    });
  });
};
