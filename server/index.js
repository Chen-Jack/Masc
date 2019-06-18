const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 3001


// Middleware
app.use(cors())
app.use(bodyParser.json())


// app.use(express.static('./client/dist'))

app.get('/', (req, res) => {
  res.send('Home')
  // res.sendFile('./client/dist/index.html')
})

app.post('/signup', (req, res) => {
  console.log(req.body)
  if (true) {
    res.status(200)
  } else {
    const err = 'There was an error'
    res.status(400).send(err)
  }
})

app.get('*', (req, res) => {
  res.send('404 ')
  // res.sendFile('./client/dist/index.html')
})


const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))