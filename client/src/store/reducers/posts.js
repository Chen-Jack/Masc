const initPostsState = {
  posts: []
}

const posts = (state = initPostsState, action) => {
  console.log('called', action)
  switch (action.type) {
    case 'UPDATE_POSTS':
      return Object.assign({}, state, { posts: action.posts })
    case 'CREATE_POST':
      const newState = Object.assign({}, state)
      newState.posts.push(action.newPost)
      return newState
    default:
      return state
  }
}

export default posts
