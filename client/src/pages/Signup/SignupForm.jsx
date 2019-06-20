import React from 'react'
import { form, cta, error } from './SignupForm.module.css'
import { connect } from 'react-redux'
import actions from './../../store/actions'
const { loginUser } = actions

class SignupForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      password_confirm: ''
    }
  }

  handleChange = (field) => {
    return (evt) => {
      this.setState({
        [field]: evt.target.value
      })
    }
  }

  sendForm = () => {
    this.props.login(this.state.email, this.state.password)
    // const successCb = this.props.onSuccess
    // const failureCb = this.props.onFailure
  
    // fetch('http://localhost:3001/signup', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => {
    //   if (res.ok) {
    //     successCb && successCb()
    //   } else {
    //     successCb && failureCb()
    //   }
    // }).catch(err => {
    //   console.log(err);
    // })
  }

  render() {
    return <div className={form}>
        <div className={error}> There was an error </div>
        <input type='text' onChange={this.handleChange('email')} />
        <input type='password' onChange={this.handleChange('password')} />
        <input type='password' onChange={this.handleChange('password_confirm')} />
        <button type='button' onClick={this.sendForm} className={cta}> Submit </button>
      </div>
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (email, password) => {
      dispatch(loginUser(email, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignupForm)