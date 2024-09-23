let express = require('express');
let app = express();
let port = 3000;

app.get('/whisper', (req, res) => {
  let name = req.query.name;
  let lowerCaseName = name.toLowerCase();
  res.send(lowerCaseName);
});

app.get('/fullProductname', (req, res) => {
  let companyName = req.query.companyName;
  let productName = req.query.productName;

  let fullProductName = companyName + ' ' + productName;
  res.send(fullProductName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;

  let formattedDate = month + '/' + year;
  res.send(formattedDate);
});

app.get('/greet', (req, res) => {
  let city = req.query.city;

  let greeting = 'You live in ' + city;
  res.send(greeting);
});

app.get('/capital', (req, res) => {
  let capital = req.query.capital;
  let country = req.query.country;
  let countryCapital = capital + ' is the capital of ' + country;
  res.send(countryCapital);
});

app.get('/email', (req, res) => {
  let fname = req.query.fname;
  let lname = req.query.lname;
  let domain = req.query.domain;
  let email = fname + '.' + lname + '@' + domain + '.com';
  res.send(email);
});

app.listen(port, () => {
  console.log('server running locally with port', port);
});
