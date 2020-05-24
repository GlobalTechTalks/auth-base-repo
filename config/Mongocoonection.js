const mongoose = require('mongoose')
const dotenv = require("dotenv");

dotenv.config();
const MONGOURI = process.env.MONGOURI

module.exports = function(){
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("mongoose connected");
});

mongoose.connection.on("error", () => {
    console.log("error connecting");
});}

