const express = require('express');
const app = require('./app')
const mongoose = require('mongoose')



app.use(express.json());
app.use(express.urlencoded({extended:false}));

const PORT = 3000;
const DATABASE_URL ='mongodb+srv://abhishek123:abhishek123@cluster0.faqdjux.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DATABASE_URL, {useNewUrlParser:true , useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error',(err)=>{console.log(err)});
db.once('open',()=>{console.log('connected to the database')})
app.listen(PORT, ()=>{
    console.log('App is running on port '+PORT)
})


