import React from 'react'
import SignupForm from './SignupForm'

class Signup extends React.Component {
  redirectToMain = () => {
    this.props.history.push('main')
  }

  render() {
    return <div>
      <h1> Create your account </h1>
      <SignupForm onSuccess={this.redirectToMain} onFailure={() => console.log('bad')}/>
    </div>
  }
}

export default Signup