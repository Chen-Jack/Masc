const { GraphQLString } = require('graphql')
const PostType = require('./../types/Post')
const uuid = require('uuid/v4')
const db = require('./../../db')

const createPost = {
  type: PostType,
  args: {
    title: { type: GraphQLString },
    body: { type: GraphQLString }
  },
  resolve (parent, args) {
    console.log('recieved', args.title, args.body)
    const newPost = {
      postId: uuid(),
      title: args.title,
      body: args.body
    }
    // mockPosts.push(newPost)
    return new Promise(resolve => {
      db.run(`INSERT INTO posts`)
    })
  }
}

module.exports = createPost
