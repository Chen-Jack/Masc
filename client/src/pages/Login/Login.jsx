import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import actions from './../../store/actions'
import cm from 'cookieman'
const { loginUser } = actions

class Login extends React.Component {
  componentDidMount () {
    const token = cm.val('user')
    if (token) { this.props.history.push('/') }
  }
  redirectToMain = () => {
    this.props.history.push('/')
  }

  render() {
    if (this.props.loggedIn) {
      this.redirectToMain()
    }
    return <div>
      <h1> Login your account </h1>
      <LoginForm/>
    </div>
  }
}


const mapStateToProps = (state, ownProps) => {
  console.log('state is now', state)
  return {
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(Login)