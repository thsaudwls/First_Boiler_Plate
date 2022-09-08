const express = require('express')
const app = express()
const port = 1212

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rnyeongjin:thsaudwls1@boiler-plate.ijr6isl.mongodb.net/?retryWrites=true&w=majority', {})
    .then(() => console.log('Mongo DB connected'))
    .catch(err => console.log('error'))

app.get('/', (req, res) => res.send('Hello'))

app.listen(port, () => console.log(`app listening on port ${port}`))


