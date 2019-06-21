import React from 'react'
import styles from './style.module.css'
import Button from '@material-ui/core/Button'
import StickyHeader from './StickyHeader'
import PostCard from './PostCard'
import actions from './../../store/actions'
import { connect } from 'react-redux'
import NoPosts from './NoPosts'

const { loginUser, logoutUser } = actions
const { page, title, background, signup, login, gallery } = styles

function mapToCards (posts) {
  return posts.map(({title, body, author}) => {
    return <PostCard title={title} body={body} author={author}/>
  })
}

class Home extends React.Component {
  componentDidMount () {
    
  }

  navigateToSignup = () => {
    this.props.history.push('signup')
  }

  navigateToCreatePost = () => {
    this.props.history.push('create-post')
  }

  render() {
    return <div className={page}>
      <StickyHeader>
        <div>
          <h1 className={title}> MASC </h1>
        </div>
        {/* If not logged in, render two buttons */}
        <div>
          {this.props.loggedIn && <div> Hello {this.props.username} </div>}
          <Button onClick={this.navigateToSignup}> Signup </Button>
          {this.props.loggedIn ? <Button onClick={this.props.logout}> Logout </Button> : <Button> Login </Button> }
        </div>
      </StickyHeader>


      {/* Once logged in, render dashboard and create post btn */}
      {this.props.loggedIn && <button type='button' onClick={this.navigateToCreatePost}> Create Post </button>}

      {/* Render all recent posts */}
      <div className={gallery}>
        {this.props.posts.length ? mapToCards(this.props.posts) : <NoPosts />}
      </div>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state is now', state)
  return {
    loggedIn: state.user.loggedIn,
    posts: state.posts.posts,
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)