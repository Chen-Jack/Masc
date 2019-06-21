const { GraphQLObjectType, GraphQLString } = require('graphql')
const UserType = require('./User')

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    postId: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    author: { type: GraphQLString }
  })
})

module.exports = PostType
