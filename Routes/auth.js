const {JWT_SECRET} = require("../keys");
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const route = require('express').Router();
const User = mongoose.model("User")
const crypto = require('crypto-random-string')
const passport = require('passport')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const nodemailertransport = require('nodemailer-sendgrid-transport')

const sendgridtransport = nodemailer.createTransport(nodemailertransport({
    auth:{
        api_key:"",
    }
}))

const requirelogin = require('../Middleware/Requirelogin')
route.get('/',(req,res)=>{
  return res.send("Started")
})

//signup route
route.post('/signup',(req,res)=>{
   const {name,email,password} = req.body
    //console.log(req.body)
  if(!email || !name || !password){
      res.status(422).json({err:"all fields are compulsary"})
  }
   User.findOne({email:email})
       .then(result=>{
           if(result){
               res.status(422).json({err:"user already exist with this email adress"})
           }
//generating salt and saving user figured by a friend still have to learn how this should be done only salt generation
           bcrypt.genSalt(10, (err, salt) => {
               bcrypt.hash(password, salt, (err, hash) => {

                   const user = new User({
                       email,
                       password:hash,
                       name
                   })
                   user
                       .save()
                       .then(user => {
                           sendgridtransport.sendMail({
                               to:user.email,
                               from:"no-reply@insta.com",
                               subject:"signup-success",
                               html:"<h1>welcome to repository</h1>"
                           })
                           const {_id,email,name} = user
                           res.json({message:"succes",user:{_id,name,email}})
                           // res.redirect('/users/login');
                       })
                       .catch(err => console.log(err));
               });
           });



       })
       .catch(err=>console.log(err))
})
route.post('/login',(req,res,next)=>{
    const {email,password} = req.body
    User.findOne({email:email})
        .then(saveduser=>{
            console.log(saveduser)
            if(!saveduser) {
                return res.status(422).json({error: "invalid email or password"})
            }
            bcrypt.compare(password,saveduser.password)
                .then(domatch=>{
                    console.log(domatch)
                    if(domatch){
                        //res.json({message: "succefully signin"})
                        const token = jwt.sign({sub:saveduser._id},JWT_SECRET)
                        const {_id,name,email} = saveduser;
                        res.json({token,user:{_id,name,email}});
                    }
                    else{
                        return res.json({err:"invalid email or adress"});
                    }
                })
                .catch(err=>{
                    console.log(err)
                })


        })

})
route.get('/resetpassword',(req,res)=>{
crypto.randomByte(32,(err,buffer)=>{
    if(err){
        console.log(err)
    }
    const token = buffer.toString("hex")
    User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
               return res.status(422).json({err:"user dosent exist with this email"})
            }
            user.resettoken= token
            user.expire=Date.now() + 600
            user.save()
                .then(result=>{
                    sendgridtransport.sendMail({
                        to:user.email,
                        from:"no-reply@insta.com",
                        subject:"password-reset",
                        html:"<h1>you requested for password reset</h1>" +
                            `<h5>click on this link <a href='http://localhost:5000/${token}'></a></h5>`
                    })
                    res.json({message:"check your email"})
                })
        })
})

})

route.post('/newpassword',(req,res)=>{
    const password = req.body.password
    const senttoken = req.body.token
    User.findOne({resettoken:senttoken})
})

// route.get('/google',passport.authenticate('google',{
//     scope:['profile','email']
// }));
// route.get('/demo',(req,res)=>{
//     res.send("sayt helo")
// })
// route.get('/google/callback',passport.authenticate('google'),(req,res)=>{
//     res.send("reached profile")
// })
module.exports = route
