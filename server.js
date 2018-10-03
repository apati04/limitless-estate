const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const keys = require('./config/keys');
const request = require('request');
const axios = require('axios');
const app = express();
// Send every request to the React app
// Define any API routes before this runs
app.use(bodyParser.json());

app.get('/api/events/meetups', async (req, res) => {
  const apiKey = keys.meetupApiKey;
  const url = `https://api.meetup.com/Out-of-State-Multifamily-Apartment-Investors-Meetup/events?sign=true&key=${apiKey}&status=upcoming&page=20&photo-host=public`;
  const response = await axios.get(url);

  if (response.data[0]) {
    const filterData = response.data.filter(({ name, fee }) => {
      return (
        name ===
        'Out of State Apartment Investing Mastermind - Long Beach Chapter'
      );
    });
    res.status(200).send(filterData);
  }
});
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

app.post('/api/questionnaire', async (req, res) => {
  const {
    fullname,
    email,
    phone,
    accreditedInvestor,
    q1,
    q2,
    q3,
    q4IRR,
    q4ARP,
    q4CoC,
    q5,
    q6,
    q10,
    q11,
    q12,
    q13,
    q14,
    proofOfFunds,
    contactPreference,
    riskTolerance
  } = req.body;
  const transporter = await nodemailer.createTransport({
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
  /*
preferedFormof Contact: {contactPreference}
q7 : {accreditedInvestor}
q8 : {proofOfFunds}
q9 : risk {riskTolerance}
*/
  // "Jim" <${config.mail.testAccount}>//
  const sender = {
    name: `Investor Qualifier- ${fullname}`,
    address: email
  };
  const mailOptions = {
    from: `"Andrew Patipaksiri" <andrew.patipak@gmail.com>`,
    to: 'kmitchell@limitless-estates.com',
    cc: ['lpatipaksiri@limitless-estates.com', 'andrew.patipak@gmail.com'],
    subject: `Investor Questionnaire - ${fullname}`,
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
      <body style="text-align: left; font-size: 1em;">
        <div style="border-bottom": 1px solid black;">
          <h4>Name: ${fullname}</h4>
          <h4>Email Address: ${email}</h4>
          <h4>Phone Number: ${phone}</h4>
          <h4>Preferred Form of Contact: <span>${contactPreference}</span></h4>
          </div>
          <ol>
            <li>
              Why are you interested in investing in Real Estate?
              <ul>
                <li>${q1}</li>
              </ul>
            </li>
            <li>
              What is the biggest hurdle you are trying to overcome by investing in Real Estate?
              <ul>
                <li>${q2}</li>
              </ul>
            </li>
            <li>
              Do you want to invest in multifamily, value-add projects?
              <ul>
                <li>${q3}</li>
              </ul>
            </li>
            <li>
              What are your return expectations?
              <ul>
                <li>Annual Return Percentage: ${q4ARP}</li>
                <li>Internal Rate of Return: ${q4IRR}</li>
                <li>Cash on Cash: ${q4CoC}</li>
              </ul>
            </li>
            <li>
            What is your investment minimum and maximum hold time?
              <ul>
                <li>${q5}</li>
              </ul>
            </li>
            <li>
            What is the minimum dollar amount you are willing to invest?
              <ul>
                <li>${q6}</li>
              </ul>
            </li>
            <li>
            Are you an accredited investor?
              <ul>
                <li>${accreditedInvestor}</li>
              </ul>
            </li>
            <li>
            Can you show proof of funds?
              <ul>
                <li>${proofOfFunds}</li>
              </ul>
            </li>
            <li>
            How would you rate your risk tolerance
              <ul>
                <li>${riskTolerance}</li>
              </ul>
            </li>
            <li>
            If you are out of the country, have you invested in the US real estate market in the past?
              <ul>
                <li>${q10}</li>
              </ul>
            </li>
            <li>
            Have you invested as a limited partner (LP) on a syndication deal in the past?
              <ul>
              
                <li>${q11}</li>
              </ul>
            </li>
            <li>
            Are you comfortable investing with other LPs or would you require to be the only LP in
this investment?
              <ul>
                <li>${q12}</li>
              </ul>
            </li>
            <li>
            In a short paragraph please provide us with your investing experience.
              <ul>
                <li>${q13}</li>
              </ul>
            </li>
            <li>
            Is there anything else we should know about you and your investment goals?
              <ul>
                <li>${q14}</li>
              </ul>
            </li>
          </ol>
      </body>
      </html>
    `
  };

  const payload = await transporter.sendMail(mailOptions);

  res.send(payload);
});

app.post('/api/mailchimp/subscribe', async (req, res) => {
  const region = keys.mailChimpApiKey.split('-')[1];
  const rootURL = `https://${region}.api.mailchimp.com/3.0/lists/3c16a06b45/members/`;
  const data = { email_address: req.body.email, status: 'subscribed' };
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
// app.get('*', function(req, res) {
//   app.use(express.static('client/public'));
//   res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
// });
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
