import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { getMovies, getUpcomingMovies} from '../../Components/utils/apiCalls'
import { setMovies, setUpcomingMovies } from '../../actions'
import Main from '../../Components/Main/Main'
import Nav from '../../Components/Nav/Nav'
import Login from '../../Components/Login/Login'
import MovieList from '../../Components/MovieList/MovieList';

class App extends Component {

  async componentDidMount() {
    const { setMovies, setUpcomingMovies } = this.props
    try {
      const data = await getMovies()
      setMovies(data)
    } catch(error) {
      console.log(error.message)
    }

    try {
      const data = await getUpcomingMovies()
      setUpcomingMovies(data)
    } catch(error) {
      console.log(error.message)
    }

  }

  render() {
    const { movies, upcomingMovies } = this.props
    return (
      <div className="App">
        <Route exact path='/login' render={ () => <Login /> } />
        <Route path='/' render={ () => <Nav /> } />
        <Route exact path='/' render={ () => <Main /> } />
        <Route exact path='box-office' render={ () => <MovieList movies={movies}/> } />
        <Route exact path='upcoming' render={ () => <MovieList movies={upcomingMovies}/> } />
      </div>
    );
  
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  upcomingMovies: state.upcomingMovies
})

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies)),
  setUpcomingMovies: (upcomingMovies) => dispatch(setUpcomingMovies(upcomingMovies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
