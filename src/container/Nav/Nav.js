import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import avatar from '../../images/avatar.svg'

const Nav = ({ user }) => {
  return (
    <header>
      <Link to='/'>
        <h1 className='header-logo'>Movie News</h1>
      </Link>
      <div className='header-nav'>
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
      </div>
      <div className='header-user-menu'>
        <div className='inner'>
          <h3 className='header-user-name'>
            { user.name ? (<>{user.name} <a href='/login'>LogOut</a> </>) : (<a href='/login'>Login</a> ) }
          </h3>
          <img className='user-avatar' alt='User avatar' src={avatar} />
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default  connect(mapStateToProps)(Nav)