
const mongoose = require('mongoose')
const User = require('../models/User')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
})
