const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const auth = require('./routes/auth');
const budget = require('./routes/budget');
const dashboard = require('./routes/dashboard');
const faqs = require('./routes/faqs');
const paymentReminder = require('./routes/payment-reminder');
const profile = require('./routes/profile');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS")
    next();
});

app.get('/', (req,res,next) => {
    res.send('money-wiser-backend app is running!');
});

app.use('/api/auth',auth);
app.use('/api/budget',budget);
app.use('/api/dashboard',dashboard);
app.use('/api/faqs',faqs);
app.use('/api/payment-reminder',paymentReminder);
app.use('/api/profile',profile);

module.exports = app;