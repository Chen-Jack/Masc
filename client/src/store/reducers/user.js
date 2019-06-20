const initUserState = {
  loggedIn: false,
  username: ''
}

const user = (state = initUserState, action) => {
  console.log('called', action)
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, { loggedIn: true })
    case 'LOGOUT':
      return Object.assign({}, state, { loggedIn: false })
    case 'RENAME':
      return Object.assign({}, state, { username: action.newName })
    default:
      return state
  }
}

export default user
