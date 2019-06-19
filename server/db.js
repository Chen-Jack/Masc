const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./database.db', err => {
  if (err) {
    console.log('Failed to start DB')
  } else {
    console.log('Database successfully connected')
  }
})

module.export = db
