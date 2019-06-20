const initPostsState = {
  posts: []
}

const posts = (state = initPostsState, action) => {
  console.log('called', action)
  switch (action.type) {
    case 'UPDATE_POSTS':
      return Object.assign({}, state, { posts: action.posts })
    default:
      return state
  }
}

export default posts
