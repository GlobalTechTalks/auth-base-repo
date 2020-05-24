const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");

dotenv.config();
const MY_PORT = process.env.PORT;
const MY_APP_SECRET = process.env.APP_SECRET;
require("./Models/User");


const passportsetup = require("./config/passport");
const mongo = require('./config/Mongocoonection')
mongo()


app.use(require("./Routes/auth"));
app.listen(MY_PORT, () => {
  console.log(`listeming on ${MY_PORT}`);
});
