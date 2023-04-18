require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectToDB = require('./config/db')
const methodOverride = require('method-override');

const Log = require('./models/logs')

const app = express();
const PORT = 3000

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//* setting a middleware to run in our app
app.use((req, res, next) => {
    console.log(req.url);
    next()
})
//* parses the data from the request
app.use(express.urlencoded({extended: false}))

//* override using a query value
app.use(methodOverride('_method'))

//* ==============================================================================
app.get('/', (req, res) => {
    // res.send('<h1>Hey Captain</h1>')
    res.render('Home')
})

//* Index Route
app.get('/logs/', (req, res) => {
    // res.send('index')
    Log.find({}, (error, allLogs) => {
        res.render('Index', {logs: allLogs})
    })
})

//* New Route
app.get('/logs/new', (req, res) => {
    // res.send('new')
    res.render('New')
})

//* Edit Route
app.get('/logs/:id/edit', (req, res) => {
    // res.send('edit form')
    Log.findById(req.params.id, (error, foundLog) => {
        if (!error) {
            res.render('Edit', {log: foundLog})
        } else {
            res.send({msg: error.message})
        }
    })
})

//* Handle the edit form data
app.put('/logs/:id', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedLog) => {
        // res.send(updatedLog)
        res.redirect(`/logs/${req.params.id}`)
    })
})

//* Create
app.post('/logs', (req, res) => {

    //* if checked, req.body.shipIsBroken is set to 'on' 
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    // res.send(req.body)
    // console.log(req.body);

    Log.create(req.body, (error, createdLog) => {
        // res.send(createdLog)
        res.redirect(`/logs/${createdLog._id}`)
    })
})

//* Show Route
app.get('/logs/:id', (req, res) => {
    console.log(req.params);
    Log.findById(req.params.id, (error, foundLog) => {
        res.render('Show', {log: foundLog})
    })
})

//! Delete Route
app.delete('/logs/:id', (req, res) => {
    // res.send('deleting...')
    Log.findByIdAndRemove(req.params.id, (error, deletedLog) => {
        res.redirect('/logs')
    })
})

//* ==============================================================================
app.listen(3000, () => {
    console.log(`Listening to port ${PORT}`);
    connectToDB()
})