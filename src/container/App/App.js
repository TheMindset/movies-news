import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { getMovies } from '../../Components/utils/apiCalls'
import { setMovies } from '../../actions'
import Main from '../../Components/Main/Main'
import Nav from '../../Components/Nav/Nav'
import Login from '../../Components/Login/Login'
import MovieList from '../../Components/MovieList/MovieList';

class App extends Component {

  async componentDidMount() {
    const { setMovies } = this.props
    try {
      const data = await getMovies()
      setMovies(data)
    } catch(error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/login' render={ () => <Login /> } />
        <Route path='/' render={ () => <Nav /> } />
        <Route exact path='/' render={ () => <Main /> } />
        <Route exact path='box-office' render={ () => <MovieList /> } />
        <Route exact path='upcoming' render={ () => <MovieList /> } />

      </div>
    );
  
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
