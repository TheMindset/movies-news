import React from 'react'
import { connect } from 'react-redux'
import MovieList from '../MovieList/MovieList'


const Main = ({movies}) => {

  return (
    <main>
      <h1>Box office</h1>
      <MovieList className='box-office' movies={movies}/>
      {/* <h1>Upcoming Movies</h1> */}
      {/* <MovieList className='umpcoming-movies' movies={movies}/> */}
    </main>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies
})


export default connect(mapStateToProps)(Main)