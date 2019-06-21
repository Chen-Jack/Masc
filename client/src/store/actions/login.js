function loginUser (email, password) {
  return (dispatch) => {
    const query = `
      mutation {
        createUser(email:"${email}", password:"${password}") {
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
          console.log('THUNK', result)
          dispatch({
            type: 'LOGIN',
            email,
            password
          })
        })
    }).catch(err => {
      console.log(err)
    })
  }
}

function logoutUser () {
  return {
    type: 'LOGOUT'
  }
}

export {
  loginUser,
  logoutUser
}
