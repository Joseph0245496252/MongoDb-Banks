//import express, - body-parser 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose') 
const {listBanksController, updateBankController, createBankController, deleteBankContoller} = require('./controllers');

//create express server instance
const server = express();

//middlewares
server.use(bodyParser.json());


//routes
// view bnak - get method
server.get('/bank/:id?', listBanksController)
// create  bank - post method
server.post('/bank', createBankController)
// update bank - put method
server.put('/bank', updateBankController)
// // detate bank - delate method
server.delete('/bank', deleteBankContoller)
//connect to databse and start server
mongoose.connect(
    "mongodb+srv://CodetrainGen12:ktV9ydvyZd37am01@cluster0.zqir9.mongodb.net/codetrain?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(result => {
        server.listen(3000, () => console.log('server is ready'));
    }).catch(err => console.log(err));






