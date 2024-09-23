let express = require('express');
let cors = require('cors');
let app = express();
let PORT = 3000;

app.use(cors());

function getDiscountedPrice(price, discountPercent) {
  let discountedPrice = price - (discountPercent / 100) * price;
  return discountedPrice;
}

function getTaxAmount(price, taxPercent) {
  let taxAmount = (taxPercent / 100) * price;
  return taxAmount;
}

function getEstimatedDeliveryinDays(distance, shippingMethod) {
  let totalDistance = 0;
  let expressDistanceParam = 100;
  let standardDistanceParam = 50;

  if (shippingMethod === 'express') {
    totalDistance = distance / expressDistanceParam;
  } else {
    totalDistance = distance / standardDistanceParam;
  }
  return totalDistance;
}

app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let total = newItemPrice + cartTotal;
  res.send(total.toString());
});

app.get('/membership-discount', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember === 'true';
  let total = 0;

  let discountPercentage = 10;
  if (isMember) {
    total = getDiscountedPrice(cartTotal, discountPercentage);
  } else {
    total = cartTotal;
  }
  res.send(total.toString());
});

app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let taxPercentage = 5;
  let total = getTaxAmount(cartTotal, taxPercentage);
  res.send(total.toString());
});

app.get('/estimate-delivery', (req, res) => {
  let distance = parseFloat(req.query.distance);
  let shippingMethod = req.query.shippingMethod;
  let total = getEstimatedDeliveryinDays(distance, shippingMethod);
  res.send(total.toString());
});

app.get('/shipping-cost', (req, res) => {
  let distance = parseFloat(req.query.distance);
  let weight = parseFloat(req.query.weight);
  let shipmentRate = 0.1;
  let total = distance * weight * shipmentRate;
  res.send(total.toString());
});

app.get('/loyalty-points', (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let loyaltyPointsRate = 2;
  let total = purchaseAmount * loyaltyPointsRate;
  res.send(total.toString());
});

app.listen(PORT, (req, res) => {
  console.log('Server is listening');
});
