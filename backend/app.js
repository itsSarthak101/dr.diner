const express = require('express')
const app = express()

// const bodyParser = require('body-parser')
// const morgan = require('morgan')
// const cookieParser = require('cookie-parser')
// const session = require('express-session')
// const cors = require('cors')

const mongoose = require('mongoose')
const MongoDB = async() => {
    await mongoose.connect('mongodb+srv://sarthak1202:sarthak1202@cluster0.sze4a6r.mongodb.net/?retryWrites=true&w=majority')
    .then(console.log('Connection Successful!'))
    .catch(err => console.log(err))
}
MongoDB();



module.exports = app;