import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import { Link } from 'react-router-dom'


const Favorites = ({user, movie, toggleFavorites}) => {
  if (!user.name) {
    return (
      <div className='favorites'>
        <h1>
          Please <Link to='/login'>Login</Link> to save favorites.
        </h1>
      </div>
    )
  }

  if (movie.length > 0 && user.name) {
    const favsList = movie.map(movie => (
      <MovieCard movie={movie} toggleFavorites={toggleFavorites} />
    ))

    return (
      <div className='favorites'>
        {favsList}
      </div>
    )
  }

  return (
    <div className='favorites'>
      <h1 className='favorite-message'>
        Please select a some favorites from 
        <Link to='/'>Home page</Link>
      </h1>
    </div>
  )
  
}


const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(Favorites)