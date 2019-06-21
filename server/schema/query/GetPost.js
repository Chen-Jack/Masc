const { GraphQLList, GraphQLInt } = require('graphql')
const PostType = require('./../types/Post')
const db = require('./../../db')

const GetPostQuery = {
  type: new GraphQLList(PostType),
  args: {
    amount: { type: GraphQLInt }
  },
  resolve (parent, args) {
    console.log('getPostQuery called')
    return new Promise(resolve => {
      db.all(`SELECT * FROM posts`, (err, res) => {
        if (err) {
          console.log('Error getting posts from graphql', err)
        } else {
          console.log('getPostsQuery', res)
          resolve(res)
        }
      })
    })
  }
}

module.exports = GetPostQuery
