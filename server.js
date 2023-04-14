require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectToDB = require('./config/db')

const app = express();
const PORT = 3000

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
//* ==============================================================================
app.get('/', (req, res) => {
    res.send('<h1>Hey Captain</h1>')
})

//* New Route
app.get('/logs/new', (req, res) => {
    // res.send('new')
    res.render('New')
})

//* Create
app.get('/logs', (req, res) => {
    res.send('received')
})

//* ==============================================================================
app.listen(3000, () => {
    console.log(`Listening to port ${PORT}`);
    connectToDB()
})