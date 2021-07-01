const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");


const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log("The server started on port 8000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to Server</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendVMail(user, info => {
    // console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});
app.post("/sendcartdata", (req, res) => {
  console.log("request came");
  let data = req.body;
  // let total = req.body;
  sendCartData(data, cart => {
    console.log(`The mail has beed send 😃 and the id is ${cart.messageId}`);
    res.send(cart);
  });
});


// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
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

async function sendCartData(data,  callback) {
  console.log("Console at line 54",data);
  // console.log("console at line 55", data[0].grandTotal);

    let content = data.reduce(function(a, b) {
      return a + `<div > <tr><td><img style="height: 30px; width: 30px;" src="${b?.image}">`  + `</td><td style="text-align: justify;">` + b?.title + `</td><td style="padding-left: 30px">` + b?.quntity + `</td><td style="padding-left: 30px">` + b?.price + `</td><td> </div>`;
    }, '');
    // console.log(content);
    // console.log(total);
  let cardtData = {
    from: ' <testu9810@mail.com>', // sender address
    to: "subhash.ramshetti9768@gmail.com",  // list of receivers
    subject: "Oder confirmation", // Subject line
    html:`
        <h1> Order placed Sucessfully 🎉🎉🎉</h1>
        <div  ><table><thead ><tr ><th>image</th><th>title</th><th style="padding-left: 20px">Quntity</th><th style="padding-left: 20px">Price</th></tr></thead><tbody> ${content} </tbody></table></div>
      <!--  <div style="text-align: end; font-size: larger; color: brown;"> Total: <strong>${content?.grandTotal}</strong> </div> -->
        `
  };

  let cart = await transporter.sendMail(cardtData);
  callback(cart);
}

async function sendVMail(user, callback) {
  // console.log(user.email);
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


