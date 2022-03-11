const express = require('express')
const {errorHandler} = require("./middleware/errorMiddleware");
const dotenv = require('dotenv').config()
const colors = require('colors')
const {connectDB} = require("./config/db");
const port = process.env.PORT || 4000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Hi I'm on port ${port}`))


//N9v6mdekLdBMKngQ