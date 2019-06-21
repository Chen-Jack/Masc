const { GraphQLString } = require('graphql')
const UserType = require('./../types/User')
const db = require('./../../db')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('./../../secret')

const AuthenticateQuery = {
  type: UserType,
  args: {
    token: { type: GraphQLString }
  },
  resolve (parent, args) {
    console.log('authenticating', args.token)
    console.log('secret', jwtSecret)
    const id = jwt.verify(args.token, jwtSecret)
    console.log('id', id)
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE id = ?', [id], (err, res) => {
        if (err) {
          console.log('authenticating token', err)
          return reject(new Error('Could not authenticate token'))
        } else {
          resolve(res)
        }
      })
    })
  }
}

module.exports = AuthenticateQuery
