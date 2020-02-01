import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createNewUser } from '../utils/apiCalls'
import { setUser } from '../../actions'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      password: '',
      isLogged: false,
      loginError: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { name, email, password } = this.state

    const user = {
      name,
      email,
      password
    }

    try {
      const { setUser } = this.props

      const newUser = await createNewUser(user)
      await setUser(newUser)
      this.setState({ isLogged: true })
    } catch(error) {
      this.setState({ loginError: error.message })
    }
  }

  render() {
    if(this.state.isLogged) {
      return <Redirect to='/' />
    }

    return (
      <div className='login screen-cover'>
        <form onSubmit={ this.handleSubmit } className='login-form'>

          <input 
            placeholder='User'
            name='name'
            value={ this.state.name }
            onChange={ this.handleChange }
          />

          <input 
            placeholder='email'
            name='email'
            value={ this.state.email }
            onChange={ this.handleChange }
          />

          <input 
            placeholder='password'
            name='password'
            value={ this.state.password }
            onChange={ this.handleChange }
          />

          <button type='submit' className='submit-btn' >Login</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(Login)

