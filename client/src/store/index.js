import { combineReducers, createStore } from 'redux'

const user = (state = {
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
  user
})
const store = createStore(rootReducer)

export default store
