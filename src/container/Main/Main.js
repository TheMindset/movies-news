import React from 'react'
import { connect } from 'react-redux'
import MovieList from '../../Components/MovieList/MovieList'


const Main = ({movies, upcomingMovies, toggleFavorites}) => {

  return (
    <main>
      <h1 className='heading-box-office'>Box office</h1>
      <MovieList className='box-office' movies={movies} toggleFavorites={toggleFavorites} />
      <h1 className='heading-upcoming'>Upcoming Movies</h1>
      <MovieList className='upcoming-movies' movies={upcomingMovies} toggleFavorites={toggleFavorites} />
    </main>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  upcomingMovies: state.upcomingMovies
})


export default connect(mapStateToProps)(Main)