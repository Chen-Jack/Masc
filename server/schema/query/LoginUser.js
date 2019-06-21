const { GraphQLString } = require('graphql')
const UserType = require('./../types/User')
const db = require('./../../db')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('./../../secret')

const LoginQuery = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve (parent, args) {
    const email = args.email
    const password = args.password
    console.log('Login, called with', email, password)
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE email = ? and password = ?', [email, password], (err, res) => {
        if (err) {
          console.log('authenticating user and password', err)
          return reject(new Error('Could not authenticate user and password'))
        } else {
          console.log('receieved res', res)
          if (res && res.id) {
            res.token = jwt.sign(res.id, jwtSecret)
            resolve(res)
          }
        }
      })
    })
  }
}

module.exports = LoginQuery
