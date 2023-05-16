const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req,res) => {
    res.json({body: 'test ok2'});
});

app.post('/api/transaction', async (req,res) =>{
    await mongoose.connect('mongodb+srv://hillarynyakundi66:Tec2023@cluster0.tfqwdwo.mongodb.net/?retryWrites=true&w=majority');
    const{name,describtion,datetime} = req.body;
    const transaction = await Transaction.create({name,describtion,datetime});
    res.json(transaction);
});

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});