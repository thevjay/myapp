const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const connectToDB = require('./database/db')
const router = require('./routes/Auth')
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 4000

// middleware
// CORS Configuration
app.use(cors())

// coonnect to db
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use('/',router)
connectToDB()

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


module.exports = app;

module.exports = (req, res) => {
    res.status(200).send("Server is running!");
};
