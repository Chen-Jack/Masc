const { GraphQLString } = require('graphql')
const UserType = require('./../types/User')
const uuid = require('uuid/v4')

const createUser = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve (parent, args) {
    const newUser = {
      id: uuid(),
      username: args.username
    }
    // mockAuthors.push(newUser)
    return newUser
  }
}

module.exports = createUser
