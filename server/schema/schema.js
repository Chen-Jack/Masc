const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

const mockPosts = [
  {
    postId: '1',
    title: 'foo',
    body: 'bar',
    author: 'author1'
  },
  {
    postId: '2',
    title: 'fo23o',
    body: 'ba12r',
    author: 'author2213'
  },
  {
    postId: '24',
    title: 'fosdfo',
    body: 'barfds',
    author: 'author15235'
  }
]

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    postId: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    author: { type: GraphQLString }
  })
})

const PostQuery = {
  type: PostType,
  args: {
    postId: { type: GraphQLString }
  },
  resolve (parent, args) {
    // args.postId
    // code tog et data from db / other source
    return mockPosts.find(post => post.postId === args.postId)
  }
}

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    posts: PostQuery
  }
})

module.exports = new GraphQLSchema({
  name: 'Schema',
  query: RootQuery
})
