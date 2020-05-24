const route = require("express").Router();
const Signup = require("../Controllers/Signup");
const Newpassword = require("../Controllers/NewPassword");
const Login = require("../Controllers/login");
const Resetpassword = require("../Controllers/ResetPassword");
const requirelogin = require("../Middleware/Requirelogin");
const Home = require("../Controllers/Home");

route.get("/", Home);

//signup route
route.post("/signup", Signup);
route.post("/login", Login);
route.get("/resetpassword", requirelogin, Resetpassword);

route.post("/newpassword", requirelogin, Newpassword);

// route.get("/google",passport.authenticate("google",{
//     scope:["profile","email"]
// }));
// route.get("/demo",(req,res)=>{
//     res.send("sayt helo")
// })
// route.get("/google/callback",passport.authenticate("google"),(req,res)=>{
//     res.send("reached profile")
// })
module.exports = route;
