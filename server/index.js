const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 3001
const sql = require('./db.js')

// Middleware
app.use(cors())
app.use(bodyParser.json())

// app.use(express.static('./client/dist'))

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('write', (req, res) => {
  sql.query('')
  res.status(200)
})

app.get('read', (req, res) => {
  sql.run('SELECT * FROM posts', () => {
    res.status(200)
  })
})

app.post('/signup', (req, res) => {
  console.log(req.body)
  const formIsValid = true
  if (formIsValid) {
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