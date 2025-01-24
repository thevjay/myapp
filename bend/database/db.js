const mongoose = require('mongoose')


const connectToDB = () => {
    mongoose.connect(process.env.MONGODB_CONNECT)
    .then(result => {
        console.log('Database Connected Successfully')
    })
    .catch(err => console.error(err)) 
}


module.exports = connectToDB