const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLBoolean } = graphql

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

const mockPosts = [
  {
    postId: '1',
    title: 'foo',
    body: 'bar',
    author: mockAuthors[0]
  },
  {
    postId: '2',
    title: 'fo23o',
    body: 'ba12r',
    author: mockAuthors[0]
  },
  {
    postId: '24',
    title: 'fosdfo',
    body: 'barfds',
    author: mockAuthors[1]
  }
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    username: { type: GraphQLString }
  })
})

const UserQuery = {
  type: UserType,
  args: {
    id: { type: GraphQLString }
  },
  resolve (parent, args) {
    return mockAuthors.find(user => user.id === args.id)
  }
}

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    postId: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    author: { type: UserType }
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
  name: 'RootQuery',
  fields: {
    posts: PostQuery,
    users: UserQuery
  }
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
        username: { type: GraphQLString }
      },
      resolve (parent, args) {
        const newUser = {
          id: args.id,
          username: args.username
        }
        mockAuthors.push(newUser)
        return newUser
      }
    },
    createPost: {
      type: PostType,
      args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString }
      },
      resolve (parent, args) {
        console.log('recieved', args.title, args.body)
        const randomId = parseInt(Math.random() * 100000, 10).toString()
        console.log('id', randomId)
        const newPost = {
          postId: randomId,
          title: args.title,
          body: args.body
        }
        mockPosts.push(newPost)
        return newPost
      }
    }
  }
})

module.exports = new GraphQLSchema({
  name: 'Schema',
  query: RootQuery,
  mutation: RootMutation
})
