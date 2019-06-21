const { GraphQLString } = require('graphql')
const uuid = require('uuid/v4')
const randomstring = require('randomstring')
const db = require('./../../db')
const UserType = require('./../types/User')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('./../../secret')

const createUser = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve (parent, args) {
    const id = uuid()
    const email = args.email
    const username = randomstring.generate(8)
    const password = args.password

    return new Promise((resolve, reject) => {
      console.log('Called')
      db.run(`INSERT INTO users VALUES (?, ?, ?, ?)`, [id, email, username, password], (err) => {
        if (err) {
          console.log('ERROR createUser mutation', err)
          return reject(err)
        } else {
          console.log('CREATED')
          return resolve({
            token: jwt.sign(id, jwtSecret),
            id,
            username
          })
        }
      })
    })
  }
}

module.exports = createUser
