function createPost (username, title, body) {
  return dispatch => {
    const query = `
      mutation {
        createPost(username:"${username}" , title:"${title}", body:"${body}" ) {
          postId,
          title,
          body
        }
      }
    `
    console.log('query', query)
    fetch('http://localhost:3010/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res.json()
        .then(body => {
          console.log('Created', body)
          // Redirect to home after creation
          this.props.history.push('/')
        })
    })
  }
}

function getPosts () {
  return dispatch => {
    const query = `
      query {
        getPosts {
          postId,
          title,
          body,
          author
        }
      }
    `
    fetch('http://localhost:3010/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res.json()
        .then(body => {
          console.log('Getting psots', body)
          if (body.data && body.data.getPosts) {
            dispatch({
              type: 'UPDATE_POSTS',
              posts: body.data.getPosts
            })
          }
          // Redirect to home after creation
        })
    })
  }
}

export {
  createPost,
  getPosts
}
