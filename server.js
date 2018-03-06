const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
// Send every request to the React app
// Define any API routes before this runs
app.use(bodyParser.json());

app.post('/api/sendmail', (req, res) => {
  const { firstname, lastname, email, company, message } = req.body;
  const poolConfig = {
    pool: true,
    host: 'smtp.gmail.com',
    secure: true,
  };
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    service: 'gmail',
    auth: {
      user: 'aitech9188@gmail.com',
      pass: 'makeithappen9188',
    },
  });

  const sender = {
    name: `Inquiry- ${firstname} ${lastname}`,
    address: email,
  };
  const mailOptions = {
    from: sender,
    to: 'apax714@gmail.com',
    subject: `Question- ${firstname}`,
    html: `
      <html>
      <head>
      </head>
      <body style="text-align: left;">
        <div style="border: 1px solid black;">
        <h2>New Message!</h2> 
        <h3><strong>First name</strong>:${firstname}</span> </h3>
        <h3><strong>Last name</strong>: <span>${lastname}</span></h3>
        <h3><strong>Company</strong>: <span>${company}</span></h3>
        <h3><strong>Email</strong>: <span>${email}</span></h3>
        <h3><strong>Message</strong>: <span>${email}</span></h3>
        </div>
        <p style="margin-top: 10px">${message}</p>
      </body>
      </html>
    `,
  };
  transporter.sendMail(mailOptions);
  res.send('complete');
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.use(express.static('client/public'));
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
