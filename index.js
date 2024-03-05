const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.Password,
    },
  });

  const mailOptions = {
    from:{
        name: "Hilal",
        address: process.env.USER
    },
    to: "imhilal004@gmail.com",
    subject: "Sample mail to test the nodemailer",
    text: "Hello",
    html: "<h1>This is a mail from the nodemailer</h1>"
  }

  const sendMail = async(transporter, mailOptions) =>{
    try{
        await transporter.sendMail(mailOptions);
        console.log("Email has been sent successfully");
    }catch(err){
        console.log(err);
    }
  }

sendMail(transporter, mailOptions);