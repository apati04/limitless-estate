const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const keys = require('./config/keys');
const axios = require('axios');
const app = express();
// Send every request to the React app
// Define any API routes before this runs
app.use(bodyParser.json());
require('./routes/meetupRoutes')(app);
require('./routes/podcastRoutes')(app);
app.post('/api/sendmail', (req, res) => {
  const { firstname, lastname, email, company, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    secure: true,
    auth: {
      user: keys.userGmail,
      pass: keys.passGmail
    },
    tls: {
      rejectUnauthorized: true
    }
  });
  const sender = {
    name: `New Message- ${firstname} ${lastname}`,
    address: email
  };
  const fullname = firstname + ' ' + lastname;

  const mailOptions = {
    from: `"Andrew Patipaksiri" <andrew.patipak@gmail.com>`,
    to: 'kmitchell@limitless-estates.com',
    cc: ['lpatipaksiri@limitless-estates.com', 'andrew.patipak@gmail.com'],
    subject: `Contact Form- ${firstname}`,
    html: `
      <html>
      <head>
      <style>
      html {
        margin:0;
        padding:0;
        height: 100%;
      }
      /* source: http://typecast.com/images/uploads/modernscale.css */
      body {
        font-size: 100%;
        font-family: 'Roboto', sans-serif;
      }

      body,
      caption,
      th,
      td,
      input,
      textarea,
      select,
      option,
      legend,
      fieldset,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {

        font-size-adjust: 0.5;
      }

      </style>
      </head>
      <body style="text-align: left;">
        <div style="border-bottom": 1px solid black;">
          <h4>Firstname:  ${firstname}</h4>
          <h4>Last name: ${lastname}</h4>
          <h4>Email: ${email}</h4>
          <h4>Message: ${message}</h4>
        </div>
      </body>
      </html>
    `
  };
  transporter.sendMail(mailOptions);
  res.send('complete');
});

app.post('/api/mailchimp/contactus', async (req, res) => {
  const { firstname, lastname, email, message } = req.body;
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: firstname,
      LNAME: lastname,
      MMERGE3: message
    }
  };
  const rootURL =
    'https://us19.api.mailchimp.com/3.0/lists/6f72e55724/members/';
  try {
    const survey = await axios.post(rootURL, data, {
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${Buffer.from(
          `apikey:${keys.mailChimpApiKey}`
        ).toString('base64')}`,
        json: true
      }
    });
    res.status(200).send({ message: 'success' });
  } catch (err) {
    console.log('error: ', err);
    res.status(400).send({ error: err });
  }
});
/* 
message : MMERGE3
lastname: LNAME
FNAME
EMIL
*/

app.post('/api/mailchimp/subscribe', async (req, res) => {
  const region = keys.mailChimpApiKey.split('-')[1];
  const rootURL = `https://${region}.api.mailchimp.com/3.0/lists/3c16a06b45/members/`;
  const data = {
    email_address: req.body.email,
    status: 'subscribed'
  };

  const sub = await axios.post(rootURL, data, {
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${Buffer.from(
        `apikey:${keys.mailChimpApiKey}`
      ).toString('base64')}`,
      json: true
    }
  });
  res.send({ results: sub.data });
});
app.post('/api/mailchimp/survey', async (req, res) => {
  const {
    fullname,
    email,
    phone,
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q13,
    q14,
    contactPreference
  } = req.body;
  const region = keys.mailChimpApiKey.split('-')[1];
  const rootURL = `https://us19.api.mailchimp.com/3.0/lists/9bf9546e64/members/`;
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FULLNAME: fullname,
      PHONE: phone,
      MMERGE3: contactPreference,
      MMERGE2: q1,
      MMERGE5: q3,
      MMERGE10: q2,
      MMERGE11: q5,
      MMERGE7: q6,
      MMERGE12: q7,
      MMERGE13: q9,
      MMERGE14: q8,
      MMERGE15: q10,
      MMERGE16: q11,
      MMERGE18: q13,
      MMERGE19: q14
    }
  };
  try {
    const survey = await axios.post(rootURL, data, {
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${Buffer.from(
          `apikey:${keys.mailChimpApiKey}`
        ).toString('base64')}`,
        json: true
      }
    });
    res.status(200).send({ message: 'success' });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, 'client', 'public')));

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
