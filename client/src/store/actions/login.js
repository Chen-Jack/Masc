import cm from 'cookieman'

function createUser (email, password) {
  console.log('[Action] creating user')
  const query = `
    mutation {
      createUser(email:"${email}", password:"${password}") {
        token,
        id,
        username
      }
    }
  `
  return (dispatch) => {
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

function loginUser (email, password) {
  console.log('[Action] Logging in user')
  const query = `
    query {
      loginUser(email:"${email}", password:"${password}") {
        token,
        id,
        username
      }
    }
  `
  return (dispatch) => {
    fetch('http://localhost:3010/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res.json()
        .then(result => {
          if (result.data.loginUser) {
            console.log('login action result', result)
            const token = result.data.loginUser.token
            cm.set('user', token)
            dispatch({
              type: 'LOGIN',
              id: createUser.id,
              username: createUser.username
            })
          }
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
        .then(result => {
          console.log('authenticate result', result)
          if (!result.data.authenticate || (result.errors && result.errors.length)) {
            return dispatch(logoutUser())
          } else {
            const { id, username } = result.data.authenticate
            dispatch({
              type: 'LOGIN',
              id,
              username
            })
          }
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
  createUser,
  loginUser,
  logoutUser,
  authenticate
}
