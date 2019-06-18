import React from 'react'
import styles from './style.module.css'
import Hero from './hero.jpeg'
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles'
const { page, title, background, signup, login } = styles
const LoginButton = withStyles(styles)(Button)

class Home extends React.Component {
  navigateToSignup = () => {
    this.props.history.push('signup')
  }

  render() {
    return <div className={page}>
      <h1 className={title}> MASC </h1>
      <img className={background} src={Hero} alt='people standing' />
      <Button onClick={this.navigateToSignup}> Signup </Button>
      <LoginButton > Login </LoginButton>
    </div>
  }
}

export default Home