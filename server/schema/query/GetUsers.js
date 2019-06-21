const { GraphQLString, GraphQLList } = require('graphql')
const UserType = require('./../types/User')

const mockAuthors = [
  {
    id: 'ok',
    username: 'anonymous bob'
  },
  {
    id: '2',
    username: 'anonymous john'
  }
]

const UserQuery = {
  type: new GraphQLList(UserType),
  args: {
    id: { type: GraphQLString }
  },
  resolve (parent, args) {
    return mockAuthors
  }
}

module.exports = UserQuery
