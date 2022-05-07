const mongoose = require('mongoose');

const Transaction = new mongoose.Schema({
    date:{type:Date},
    description:{type: String},
    withdraw:{type: mongoose.Decimal128},
    deposit:{type: mongoose.Decimal128},
    balance:{type: mongoose.Decimal128}
});

module.exports = mongoose.model("Transaction", Transaction);