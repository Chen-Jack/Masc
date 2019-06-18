import React from 'react'
import styles from './style.module.css'
import Button from '@material-ui/core/Button';
import StickyHeader from './StickyHeader'
import {withStyles} from '@material-ui/core/styles'
const { page, title, background, signup, login } = styles
const LoginButton = withStyles(styles)(Button)

class Home extends React.Component {
  navigateToSignup = () => {
    this.props.history.push('signup')
  }

  render() {
    return <div className={page}>
      <StickyHeader>
        {/* If not logged in, render two buttons */}
        <Button onClick={this.navigateToSignup}> Signup </Button>
        <LoginButton > Login </LoginButton>
      </StickyHeader>
      <h1 className={title}> MASC </h1>


      {/* Once logged in, render dashboard and create post btn */}
    </div>
  }
}

export default Home