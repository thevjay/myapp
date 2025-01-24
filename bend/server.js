const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const connectToDB = require('./database/db')
const router = require('./routes/Auth')
const cookieParser = require('cookie-parser')

const port = process.env.PORT

// middleware

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

// coonnect to db
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use('/',router)
connectToDB()

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = (req, res) => {
    res.status(200).send("Server is running!");
};
