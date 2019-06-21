import React from 'react'
import { form, cta, error, field } from './SignupForm.module.css'
import { connect } from 'react-redux'
import actions from './../../store/actions'
const { createUser } = actions
console.log('create user', createUser)

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
    this.props.create(this.state.email, this.state.password)
  }

  render() {
    return <div className={form}>
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
    create: (email, password) => {
      dispatch(createUser(email, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignupForm)