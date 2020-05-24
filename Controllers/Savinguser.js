const nodemailer = require("nodemailer");
const nodemailertransport = require("nodemailer-sendgrid-transport");
const mongoose = require('mongoose');
const sendgridtransport = nodemailer.createTransport(
    nodemailertransport({
        auth: {
            api_key: "",
        },
    })
);

module.exports = function (user) {
    user
        .save()
        .then((user) => {
            sendgridtransport.sendMail({
                to: user.email,
                from: "no-reply@insta.com",
                subject: "signup-success",
                html: "<h1>welcome to repository</h1>",
            });
            const { _id, email, name } = user;
            return { message: "succes", user: { _id, name, email } };
            // res.redirect("/users/login");
        })
        .catch((err) => console.log(err));
};
