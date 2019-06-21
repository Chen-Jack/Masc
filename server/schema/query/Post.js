const { GraphQLString } = require('graphql')
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

module.exports = PostQuery
