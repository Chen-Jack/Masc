import React from 'react'
import { connect } from 'react-redux'
import actions from './../../store/actions'
const { createPost } = actions

class CreatePost extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }
  }

  createPost = () => {
    this.props.createPost('author', this.state.title, this.state.body)
    this.props.history.push('/')
    // const query = `
    //   mutation {
    //     createPost(title:"${this.state.title}", body:"${this.state.body}" ) {
    //       postId,
    //       title,
    //       body
    //     }
    //   }
    // `
    // console.log('qiery', query)
    // fetch('http://localhost:3010/graphql', {
    //   method: 'POST',
    //   body: JSON.stringify({query}),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => {
    //   res.json()
    //     .then(body => {
    //       console.log('Created', body)
    //       // Redirect to home after creation
    //       this.props.history.push('/')
    //     })
    // })
  }

  handleFormChange = (field) => {
    return (evt) => {
      this.setState({
        [field]: evt.target.value
      }, () => {
        console.log('state is now', this.state)
      })
    }
  }

  render () {
    return <div>
      <input placeholder='title' onChange={this.handleFormChange('title')}/>
      <textarea placeholder='Im thinking...' onChange={this.handleFormChange('body')} />
      <button onClick={this.createPost}> Submit </button>
    </div>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (author, title, body) => {
      dispatch(createPost({ author, title, body }))
    }
  }
}


export default connect(null, mapDispatchToProps)(CreatePost)
