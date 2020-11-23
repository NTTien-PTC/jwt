const express = require('express')
const userRouter = require('./router//user')
const port = 4000
require('./db/db')

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server running on port ' + port)
})