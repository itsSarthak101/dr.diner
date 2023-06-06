const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./app')
mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/users', require('./routes/createUser'))
app.use('/users', require('./routes/DisplayData'))


app.listen(port, () => {
  console.log(`Dr.Diner listening on port ${port}`)
})