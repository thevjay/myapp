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

const { createServer } = require('@vercel/node');

module.exports = createServer((req, res) => {
  if (req.url === '/api/hello' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello, world!' }));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

module.exports = (req, res) => {
    res.status(200).send("Server is running!");
};
