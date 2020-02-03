import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createNewUser, loginUser, getUserFavorites } from '../../Components/utils/apiCalls'
import { setUser, setFavorites } from '../../actions'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      password: '',
      isLogged: false,
      error: '',
      loginError: false
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await this.createUser()
  }

  createUser = async () => {
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

  logIn = async () => {
    const { email, password } = this.state
    const user = { email, password }
    const { setUser } = this.props

    try {
      const currentUser = await loginUser(user)
      const userFavorites = await getUserFavorites(currentUser.id)
      await setUser(currentUser)
      await setFavorites(userFavorites)
      this.setState({ isLogged: true })
    } catch (error){
      this.setState({ error: error.message, loginError: true})
    }
  }

  render() {
    const { 
      isLogged, 
      error, 
      loginError, 
      name, 
      email, 
      password 
    } = this.state

    let errClass = loginError ? 'error' : ''

    if(isLogged) {
      return <Redirect to='/' />
    }

    return (
      <div className='login screen-cover'>
        <form onSubmit={ this.handleSubmit } className='login-form'>

          <input 
            placeholder='User'
            name='name'
            maxLength='15'
            required
            value={name}
            onChange={ this.handleChange }
          />

          <input 
            placeholder='email'
            className={errClass}
            name='email'
            required
            value={email}
            onChange={ this.handleChange }
          />

          <input 
            placeholder='password'
            className={errClass}
            name='password'
            maxLength='12'
            required
            value={password}
            onChange={ this.handleChange }
          />
          <button type='submit' id='create-new-user'className='submit-btn' >Create New Account</button>
          <button type='button' id='login' className='submit-btn' onClick={this.logIn}>Login</button>
          {error && <h3 className='error-login'>{error}</h3>}
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  setFavorites: (favorites) => dispatch(setFavorites(favorites))
})

export default connect(null, mapDispatchToProps)(Login)

