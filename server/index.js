const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 3010
const db = require('./db')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('./secret')
// Middleware
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))
// app.use(bodyParserls.json())

// app.use(express.static('./client/dist'))

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('write', (req, res) => {
  db.run('INSERT INTO posts (postId, title, body, author')
  res.status(200)
})

app.get('/graphql', (req, res) => {

})

app.get('read', (req, res) => {
  db.get('SELECT * FROM posts', (err, row) => {
    if (err) {
      res.status(400).send(err)
    }
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
