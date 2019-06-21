function createPost (newPost, cb) {
  cb && cb()
  return {
    type: 'CREATE_POST',
    newPost
  }
}

export {
  createPost
}
