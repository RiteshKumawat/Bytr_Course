let express = require('express');
let app = express();
let port = 3000;

app.get('/custom-commit', (req, res) => {
  let type = req.query.type;
  let message = req.query.message;
  let result = type + ' : ' + message;
  res.send(result);
});

app.get('/certificate', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;

  let result =
    'This certification is awarded to ' +
    firstName +
    ' ' +
    lastName +
    ' for completing the course ' +
    courseName;
  res.send(result);
});

app.get('/autoreply', (req, res) => {
  let sMonth = req.query.startMonth;
  let lMonth = req.query.endMonth;

  let result =
    "Dear customer, thank you for reaching out to me. Unfortnately, I'm out of office from " +
    sMonth +
    ' till ' +
    lMonth +
    '. Your enquiry will be resolved by my collegue';
  res.send(result);
});

app.get('/secureurl', (req, res) => {
  let domain = req.query.domain;
  let result = 'https://' + domain;
  res.send(result);
});

app.get('/sendotp', (req, res) => {
  let otpCode = req.query.otpCode;
  let result =
    'Your OTP for account verification is ' +
    otpCode +
    ' . Do not share this with anyone';
  res.send(result);
});

app.get('/welcome', (req, res) => {
  let firstName = req.query.firstName;
  let email = req.query.email;
  let result =
    'Hey ' +
    firstName +
    ". We're exited to have you here, we'll send future notifications to your registered mail (" +
    email +
    ')';
  res.send(result);
});

app.get('/github-profile', (req, res) => {
  let username = req.query.userName;
  let result = 'https://github.com/' + username;
  res.send(result);
});

app.get('/text-to-csv', (req, res) => {
  let id = req.query.id;
  let email = req.query.email;
  let rollNumber = req.query.rollNumber;
  let result = id + ', ' + email + ',' + rollNumber;
  res.send(result);
});

app.listen(port, () => {
  console.log('server running locally with port', port);
});
