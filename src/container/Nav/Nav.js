import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Nav = ({ user, logOut }) => {
  return (
    <header className='header-bg'>
      <h1 className='header-title'>Movie News</h1>
      <div className='header-nav'>
        { 
          user.name ? <span className='user-name'> Welcome {user.name} </span> : '' 
        }

        <NavLink exact to='/' className='nav-link' activeClassName='selectedLink'>
          Home
        </NavLink>
        <NavLink exact to='/box-offices' className='nav-link' activeClassName='selectedLink'>
          Box Offices
        </NavLink>
        <NavLink exact to='/coming-soon' className='nav-link' activeClassName='selectedLink'>
          Coming Soon
        </NavLink>
        <NavLink exact to='/favorites' className='nav-link' activeClassName='selectedLink'>
          Favorites
        </NavLink>
        { 
          user.name ? 
          <button className='nav-link' id='logout-btn' onClick={logOut}>LogOut</button> : 
          <NavLink className='nav-link' to='/login'>User Login</NavLink>
        }
      </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default  connect(mapStateToProps)(Nav)