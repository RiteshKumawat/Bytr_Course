let express = require('express');
let cors = require('cors');
let app = express();
let PORT = 3000;

app.use(cors());

app.get('/calculate-returns', (req, res) => {
  let marketPrice = parseFloat(req.query.marketPrice);
  let boughtAt = parseFloat(req.query.boughtAt);
  let quantity = req.query.quantity;

  let returns = (marketPrice - boughtAt) * quantity;
  res.send(returns.toString());
});

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturns = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturns.toString());
});

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  let returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturns = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturns.toString());

});

app.get('/status', (req, res) => {
  let returnPercentage = req.query.returnPercentage;
  let status = 'loss';
  if (returnPercentage > 0) status = 'profit';

  res.send(status);
});

app.listen(PORT, (req, res) => {
  console.log('Server is listening');
});
