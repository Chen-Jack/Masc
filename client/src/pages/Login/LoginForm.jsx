import React from 'react'
import { form, cta, error, field } from './login-form.module.css'
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
  }

  render() {
    return <div className={form}>
        <div className={error}> There was an error </div>
        <div className={field}>
          <label> Email </label><input type='text' onChange={this.handleChange('email')} />
        </div>
        <div className={field}>
          <label> Password </label><input type='password' onChange={this.handleChange('password')} />
        </div>
        <div className={field}>
          <label> Confirm Password </label><input type='password' onChange={this.handleChange('password_confirm')} />
        </div>
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