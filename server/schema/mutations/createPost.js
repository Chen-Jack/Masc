const { GraphQLString } = require('graphql')
const PostType = require('./../types/Post')
const uuid = require('uuid/v4')
const db = require('./../../db')

const createPost = {
  type: PostType,
  args: {
    username: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString }
  },
  resolve (parent, args) {
    console.log('creating post', args.title, args.body)
    const newPost = {
      postId: uuid(),
      author: args.username,
      title: args.title,
      body: args.body
    }
    return new Promise(resolve => {
      db.run(`INSERT INTO posts VALUES (?, ?, ?, ?)`, [newPost.postId, newPost.title, newPost.body, newPost.author], err => {
        if (err) {
          console.log('Error creating post', err)
        } else {
          resolve(newPost)
        }
      })
    })
  }
}

module.exports = createPost
