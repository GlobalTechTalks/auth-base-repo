const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const MONGOURI = require('./keys').MONGOURI
require('./Models/User')
const passportsetup = require('./config/passport')

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log('mongoose connected');
});

mongoose.connection.on('error',()=>{
    console.log('error connecting');
});
app.use(require('./Routes/auth'))
app.listen(3000,()=>{
    console.log("listeming on 3000")
});