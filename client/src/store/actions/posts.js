function createPost (username, title, body) {
  return (dispatch) => {
    const query = `
      mutation {
        createPost(username:"${username}" , title:"${title}", body:"${body}" ) {
          postId,
          title,
          body
        }
      }
    `
    console.log('qiery', query)
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

export {
  createPost
}
