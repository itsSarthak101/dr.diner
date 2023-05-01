const express = require('express')
const app = express()

// const bodyParser = require('body-parser')
// const morgan = require('morgan')
// const cookieParser = require('cookie-parser')
// const session = require('express-session')
// const cors = require('cors')

const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://DrDiner:DrDiner123@cluster0.jpb8inp.mongodb.net/DrDiner?retryWrites=true&w=majority'
const MongoDB = async() => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(console.log('Connection Successful!'))
    .catch(err => console.log(err))
}


module.exports = MongoDB;