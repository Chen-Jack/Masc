import React from 'react'
import styles from './style.module.css'
import Button from '@material-ui/core/Button'
import StickyHeader from './StickyHeader'
import actions from './../../store/actions'
import { connect } from 'react-redux'

const { loginUser } = actions
const { page, title, background, signup, login } = styles

class Home extends React.Component {
  constructor (props) {
    super(props)
  }

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
          <Button onClick={this.navigateToSignup}> Signup </Button>
          <Button > Login </Button>
        </div>
      </StickyHeader>


      {/* Once logged in, render dashboard and create post btn */}
      <button type='button' onClick={this.navigateToCreatePost}> Create Post </button>

      {this.props.loggedIn ? <div> Logged in </div> : <div> loggedout </div>}
      <button onClick={() => {
        this.props.login()
      }}> Log in?</button>
      {/* Render all recent posts */}
    </div>
  }
}


const mapStateToProps = (state, ownProps) => {
  console.log('state is now', state)
  return {
    loggedIn: state.handleUserAccount.loggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: () => {
      dispatch(loginUser('foo', 'bar'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)