const { GraphQLObjectType, GraphQLString } = require('graphql')

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    token: { type: GraphQLString },
    id: { type: GraphQLString },
    username: { type: GraphQLString }
  })
})

module.exports = UserType
