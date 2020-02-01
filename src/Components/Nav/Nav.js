import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <h1 className='header-logo'>Movie News</h1>
      <div className='header-nav'>
        <NavLink exact to='/' className='nav-link' activeClassName='selectedLink'>
          Home
        </NavLink>
        <NavLink exact to='/top-movies' className='nav-link' activeClassName='selectedLink'>
          Top Movies
        </NavLink>
        <NavLink exact to='/coming-soon' className='nav-link' activeClassName='selectedLink'>
          Coming Soon
        </NavLink>
        <NavLink exact to='/favorites' className='nav-link' activeClassName='selectedLink'>
          Favorites
        </NavLink>
        <NavLink exact to='/login' className='nav-link' activeClassName='selectedLink'>
          User Login
        </NavLink>
      </div>
    </header>
  )
}

export default Nav