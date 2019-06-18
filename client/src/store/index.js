import redux from 'redux'

const initState = {
  loggedIn: false,
  username: ''
}

const handleUserAccount = (state, action) => {
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

const rootReducer = redux.combineReducers({
  handleUserAccount
})
const store = redux.createStore(rootReducer, initState)

export default store
