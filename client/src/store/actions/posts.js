function createPost (newPost) {
  return {
    type: 'CREATE_POST',
    newPost
  }
}

export {
  createPost
}
