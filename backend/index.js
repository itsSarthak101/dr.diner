const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./app')
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/users', require('./routes/createUser'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})