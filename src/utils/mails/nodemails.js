"use strict";
const {EMAIL, EMAIL_PASSWORD} = require('../../config/config');
const nodemailer = require("nodemailer");


const sendMail = async(message, correo) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: EMAIL,
            pass: EMAIL_PASSWORD
        }
    });


  let Mensaje = await transporter.sendMail({
    from: 'Hola', // sender address
    to: correo, // list of receivers
    subject: "Hello ✔", // Subject line
    text: message, // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Email Enviado Correctamente");

}

module.exports ={
    sendMail
}