import React from 'react'
import { connect } from 'react-redux'

class CreatePost extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }
  }

  createPost = () => {
    const query = `
      mutation {
        createPost(username:"${this.props.username}" , title:"${this.state.title}", body:"${this.state.body}" ) {
          postId,
          title,
          body
        }
      }
    `
    console.log('qiery', query)
    fetch('http://localhost:3010/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res.json()
        .then(body => {
          console.log('Created', body)
          // Redirect to home after creation
          this.props.history.push('/')
        })
    })
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

const mapStateToProps = state => {
  return {
    username: state.user.username
  }
}


export default connect(mapStateToProps)(CreatePost)
