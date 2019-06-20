function loginUser (email, password) {
  return {
    type: 'LOGIN',
    email,
    password
  }
}

function logoutUser () {
  return {
    type: 'LOGOUT'
  }
}

export default {
  loginUser,
  logoutUser
}
