import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import user from './reducers/user'
import posts from './reducers/posts'

const rootReducer = combineReducers({
  user,
  posts
})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
