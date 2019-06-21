const graphql = require('graphql')
const { GraphQLObjectType, GraphQLSchema } = graphql

const PostQuery = require('./query/Post')
const UserQuery = require('./query/User')
const GetPostQuery = require('./query/GetPost')
const GetUsersQuery = require('./query/GetUsers')
const AutheticateQuery = require('./query/Authenticate')

const createPost = require('./mutations/createPost')
const createUser = require('./mutations/createUser')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    posts: PostQuery,
    users: UserQuery,
    getPosts: GetPostQuery,
    getUsers: GetUsersQuery,
    authenticate: AutheticateQuery
  }
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    createUser,
    createPost
  }
})

module.exports = new GraphQLSchema({
  name: 'Schema',
  query: RootQuery,
  mutation: RootMutation
})
