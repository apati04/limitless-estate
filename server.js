const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const keys = require('./config/keys');
const request = require('request');
const app = express();
// Send every request to the React app
// Define any API routes before this runs
app.use(bodyParser.json());

app.post('/api/sendmail', (req, res) => {
  const { firstname, lastname, email, company, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    service: 'gmail',
    auth: {
      user: keys.userGmail,
      pass: keys.passGmail
    }
  });
  const sender = {
    name: `New Message- ${firstname} ${lastname}`,
    address: email
  };
  const mailOptions = {
    from: sender,
    to: 'kmitchell@limitless-estates.com',
    cc: 'lpatipaksiri@limitless-estates.com',
    subject: `Contact Form- ${firstname}`,
    html: `
      <html>
      <head>
      </head>
      <body style="text-align: left;">
        <div style="border-bottom": 1px solid black;">
        <h4>First and Last Name:  ${firstname} ${lastname}</h4>
     
        <h4>Company (optional): ${company}</h4>
        <h4>Email: ${email}</h4>
        <h4>Message:</h4>
        </div>
        <p style="margin-top: 10px">${message}</p>
      </body>
      </html>
    `
  };
  transporter.sendMail(mailOptions);
  res.redirect('/');
});

app.get('/api/pdf', (req, res) => {
  request.get(
    'https://drive.google.com/file/d/1GQnUvNoLIHX-Dg7dr2Use7eyB7CO5dxE/view?usp=sharing',
    function(err, response, body) {
      res.send(response);
    }
  );
});
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.use(express.static('client/public'));
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
