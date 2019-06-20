const { GraphQLString } = require('graphql')
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
  type: UserType,
  args: {
    id: { type: GraphQLString }
  },
  resolve (parent, args) {
    return mockAuthors.find(user => user.id === args.id)
  }
}

export default UserQuery
