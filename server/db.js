const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./database.db', err => {
  if (err) {
    console.log('Failed to start DB')
  } else {
    console.log('Database successfully connected')
  }
})

// Check table presences
validateUserTable()
validatePostTable()

module.exports = db

function validatePostTable () {
  db.run(`CREATE TABLE IF NOT EXISTS posts(
    postId TEXT PRIMARY KEY,
    title TEXT,
    body TEXT,
    author TEXT,
    FOREIGN KEY(author) REFERENCES users(id)
  )`, err => {
    if (err) {
      return console.log('Failure to create/validate Post table')
    }
    console.log('Successfully validated Post table')
  })
}

function validateUserTable () {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT,
    username TEXT,
    password TEXT
  )`, err => {
    if (err) {
      return console.log('Failure to create/validate User table')
    }
    console.log('Successfully validated User table')
  })
}
