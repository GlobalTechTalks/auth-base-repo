module.exports = (req, res) => {
  const password = req.body.password;
  const senttoken = req.body.token;
  User.findOne({ resettoken: senttoken });
};
