const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to Server</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  console.log(user.email);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: false,
    requireTLS: true, // true for 465, false for other ports
    auth: {
      user: "testu9810@gmail.com",
      pass: "User@1234"
    }
  });

  let mailOptions = {
    from: ' <testu9810@mail.com>', // sender address
    to: user.email, // list of receivers
    subject: "Welcome to E-commerce 👻 Please verify", // Subject line
    html: `<h1>Hi ${user.name}</h1><br>
    <h3> <a href="http://localhost:4200/signin"> click here to verify</a> </h3>
    <h4>Thanks for joining us</h4>
    `
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

