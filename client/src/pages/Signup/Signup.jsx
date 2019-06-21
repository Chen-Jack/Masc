import React from 'react'
import SignupForm from './SignupForm'
import Hero from './hero.jpeg'
import { page, background } from './Signup.module.css'
import { connect } from 'react-redux'
import actions from './../../store/actions'
import cm from 'cookieman'
const { loginUser } = actions

class Signup extends React.Component {
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
    return <div className={page}>
      <img className={background} src={Hero} alt='people standing' />
      <h1> Create your account </h1>
      <SignupForm onFailure={() => console.log('bad')}/>
    </div>
  }
}


const mapStateToProps = (state, ownProps) => {
  console.log('state is now', state)
  return {
    loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: () => {
      dispatch(loginUser('foo', 'bar'))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup)