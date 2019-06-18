import React from 'react'

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
    const successCb = this.props.onSuccess
    const failureCb = this.props.onFailure
    successCb && successCb()
  }

  render() {
    return <div>
        <input type='text' onChange={this.handleChange('email')} />
        <input type='password' onChange={this.handleChange('password')} />
        <input type='password' onChange={this.handleChange('password_confirm')} />
        <button onClick={this.sendForm}> Submit </button>
      </div>
    }
}

export default SignupForm