import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../../Components/MovieCard/MovieCard'
import { Link } from 'react-router-dom'


const Favorites = ({user, movies, toggleFavorites}) => {
  if (!user.name) {
    return (
      <div className='favorites'>
        <h1>
          Please <Link to='/login'>Login</Link> to save favorites.
        </h1>
      </div>
    )
  }

  if (movies.length > 0 && user.name) {
    const favsList = movies.map(movie => (
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