import cm from 'cookieman'
function loginUser (email, password) {
  return (dispatch) => {
    const query = `
      mutation {
        createUser(email:"${email}", password:"${password}") {
          token,
          id,
          username
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
        .then(({ data: { createUser } }) => {
          const token = createUser.token
          cm.set('user', token)
          dispatch({
            type: 'LOGIN',
            id: createUser.id,
            username: createUser.username
          })
        })
    }).catch(err => {
      console.log(err)
    })
  }
}

function authenticate (token) {
  console.log('calling authentication thunk')
  return (dispatch) => {
    const query = `
      query {
        authenticate(token:"${token}") {
          token,
          id,
          username
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
        .then(({ data }) => {
          const { id, username } = data.authenticate
          dispatch({
            type: 'LOGIN',
            id,
            username
          })
        })
    }).catch(err => {
      console.log(err)
    })
  }
}

function logoutUser () {
  cm.clearAll('user')
  return {
    type: 'LOGOUT'
  }
}

export {
  loginUser,
  logoutUser,
  authenticate
}
