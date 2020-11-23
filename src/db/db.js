
const mongoose = require('mongoose')
const db = 'mongodb://localhost:27017/exam-vmo'
mongoose.connect(db, {
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
    console.log("Successfully connected to the database")
}).catch(err => {
    console.log("Could not connect to the database. Exiting now..", err)
    process.exit()
})