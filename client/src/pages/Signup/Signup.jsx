import React from 'react'
import SignupForm from './SignupForm'
import Hero from './hero.jpeg'
import { page, background } from './Signup.module.css'

class Signup extends React.Component {
  redirectToMain = () => {
    this.props.history.push('main')
  }

  render() {
    return <div className={page}>

      <img className={background} src={Hero} alt='people standing' />
      <h1> Create your account </h1>
      <SignupForm onSuccess={this.redirectToMain} onFailure={() => console.log('bad')}/>
    </div>
  }
}

export default Signup