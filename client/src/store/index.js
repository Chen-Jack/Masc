import { combineReducers, createStore } from 'redux'

const handleUserAccount = (state = {
  loggedIn: false,
  username: ''
}, action) => {
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

const rootReducer = combineReducers({
  handleUserAccount
})
const store = createStore(rootReducer, { handleUserAccount })

export default store
