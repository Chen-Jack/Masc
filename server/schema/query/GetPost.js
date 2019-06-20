const { GraphQLList, GraphQLInt } = require('graphql')
const PostType = require('./../types/Post')

const mockPosts = [
  {
    postId: '1',
    title: 'foo',
    body: 'bar',
    author: {
      id: 'ok',
      username: 'anonymous bob'
    }
  },
  {
    postId: '2',
    title: 'fo23o',
    body: 'ba12r',
    author: {
      id: 'o23k',
      username: 'anonymous H'
    }
  },
  {
    postId: '24',
    title: 'fosdfo',
    body: 'barfds',
    author: {
      id: '233k',
      username: 'anonymous all'
    }
  }
]

const GetPostQuery = {
  type: new GraphQLList(PostType),
  args: {
    amount: { type: GraphQLInt }
  },
  resolve (parent, args) {
    return mockPosts.slice(0, args.amount)
  }
}

module.exports = GetPostQuery
