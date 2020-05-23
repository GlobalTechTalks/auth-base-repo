const passport = require('passport')
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
var JWTKEY = require('../keys').JWT_SECRET
const mongoose = require('mongoose');
const passportJWT = require("passport-jwt");
//const clientid = require('../keys').google.clientID
const User = mongoose.model("User")
//const clientsecret = require('../keys').google.clientSecret

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

//passport.use(new GoogleStrategy({
 //       clientID: clientid,
  //      clientSecret:clientsecret,
   //     callbackURL: "http://localhost:3000/google/callback"
   // },
   // (accessToken, refreshToken, profile, done) =>{
      //  User.findAndModify({ googleId: profile.id }, function (err, user) {
        //    return done(err, user);
       // });
//         User.findOne({googleId:profile.id})
//             .then(existinguser=>{
//                 if(existinguser){}
//                 else{
//                     new User({
//                     name:profile.displayName,
                       //email:profile.email.
//_id:profile.id
//                     }).save()
//res.send('success',user:{token:accesstoken})
//                 }
//             })
// console.log("access token",accessToken)
//         console.log("refresh token",refreshToken)
//         console.log("profile",profile)
//         console.log("done",done)a
// }
// ));

const options = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:JWTKEY,

}
passport.use(new JwtStrategy(options,(payload,done)=>{
    User.findOne({_id:payload.sub})
        .then(user=>{
            if(user){
                done(null,user)
            }
            else{
                console.log('xcghj')
                return done(null,false)

            }
        })
        .catch(err=>{
            done(err,null);
        })
}))