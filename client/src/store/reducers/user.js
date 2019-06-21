const initUserState = {
  loggedIn: false,
  id: '',
  username: ''
}

const user = (state = initUserState, action) => {
  console.log('called', action)
  switch (action.type) {
    case 'LOGIN':
      console.log('called', action)
      return Object.assign({}, state, { loggedIn: true, id: action.id, username: action.username })
    case 'LOGOUT':
      return initUserState
    case 'RENAME':
      return Object.assign({}, state, { username: action.newName })
    default:
      return state
  }
}

export default user
