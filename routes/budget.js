const express = require("express");
const router = express.Router();
const TransactionModel = require("../models/transaction");

router.get('/', (req,res) => {
    res.send('response from budget.js!');
});

router.get('/getTransactions', (req,res) => {
  TransactionModel.find({}).then(transactions =>{
    res.send(transactions);
  }).catch(err => {
    res.send({message:err.toString()});
  });
});

// router.get('/loadTransactions', (req,res) => {
//     const obj = [
//         {
//           "DATE": "29-Jun-17",
//           "TRANSACTION DETAILS": "TRF FROM  Indiaforensic SERVICES",
//           "WITHDRAWAL AMT": "",
//           "DEPOSIT AMT": "10,00,000.00",
//           "BALANCE AMT": "10,00,000.00"
//         },
//         {
//           "DATE": "05-Jul-17",
//           "TRANSACTION DETAILS": "TRF FROM  Indiaforensic SERVICES",
//           "WITHDRAWAL AMT": "",
//           "DEPOSIT AMT": "10,00,000.00",
//           "BALANCE AMT": "20,00,000.00"
//         },
//         {
//           "DATE": "18-Jul-17",
//           "TRANSACTION DETAILS": "FDRL/INTERNAL FUND TRANSFE",
//           "WITHDRAWAL AMT": "",
//           "DEPOSIT AMT": "5,00,000.00",
//           "BALANCE AMT": "25,00,000.00"
//         }];

//         for(let i=0 ; i<obj.length; i++){

//             if(obj[i]['WITHDRAWAL AMT'] === ''){
//               obj[i]['WITHDRAWAL AMT'] = '0';
//             }
//             if(obj[i]['DEPOSIT AMT'] === ''){
//               obj[i]['DEPOSIT AMT'] = '0';
//             }
//             if(obj[i]['BALANCE AMT'] === ''){
//               obj[i]['BALANCE AMT'] = '0';
//             }

//             const newRecord = new TransactionModel({
//                 date : new Date(obj[i]['DATE']),
//                 description : obj[i]['TRANSACTION DETAILS'],
//                 withdraw : parseFloat(obj[i]['WITHDRAWAL AMT'].replace(/,/g, '')).toFixed(2),
//                 deposit : parseFloat(obj[i]['DEPOSIT AMT'].replace(/,/g, '')).toFixed(2),
//                 balance : parseFloat(obj[i]['BALANCE AMT'].replace(/,/g, '')).toFixed(2)
//             });
//             newRecord.save().then(() => {
//               console.log('object' + i +' saved');
//             });
//         }
//         res.send('response from load transactions api!');
// });

module.exports = router;