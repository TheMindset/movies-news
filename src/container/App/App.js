import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { getMovies, getUpcomingMovies, getUserFavorites} from '../../Components/utils/apiCalls'
import { setMovies, setUpcomingMovies, setFavorites } from '../../actions'
import Main from '../../Components/Main/Main'
import Nav from '../../Components/Nav/Nav'
import Login from '../Login/Login'
import MovieList from '../../Components/MovieList/MovieList';
import MoviePage from '../../Components/MoviePage/MoviePage'

class App extends Component {

  async componentDidMount() {
    const { setMovies, setUpcomingMovies, setFavorites, user } = this.props
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

    if(user.name) {
      try {
        const userFavs = await getUserFavorites(user.id)
        setFavorites(userFavs)
      } catch(error) {
        console.log(error)
      }
    }
  }


  toggleFavorites = (movie) => {
    const { favorites } = this.props
    if (favorites.map(fav => fav.title).include(movie.title)) {
      this.removeFavorite()
    } else
    this.addFavorite()
  }

  render() {
    const { movies, upcomingMovies, favorites } = this.props
    return (
      <div className="App">
        <Route exact path='/login' render={ () => <Login /> } />
        <Route path='/' render={ () => <Nav /> } />
        <Route exact path='/' render={ () => <Main /> } />
        <Route exact path='/favorites' render={ () => <MovieList movies={favorites} /> } />
        <Route exact path='/movie/:movie_id' render={ ({ match }) => {
          const allMovies = [...movies, ...upcomingMovies]
          const currentMovies = allMovies.find(movie => movie.movie_id === parseInt(match.params.movie_id))
          return <MoviePage {...currentMovies}/>
        } } />
        <Route exact path='box-office' render={ () => <MovieList movies={movies}/> } />
        <Route exact path='upcoming' render={ () => <MovieList movies={upcomingMovies}/> } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  upcomingMovies: state.upcomingMovies,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies)),
  setUpcomingMovies: (upcomingMovies) => dispatch(setUpcomingMovies(upcomingMovies)),
  setFavorites: (favorites) => dispatch(setFavorites(favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
