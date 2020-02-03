import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { getMovies, getUpcomingMovies, getUserFavorites, deleteFavorite, postFavorite} from '../../Components/utils/apiCalls'
import { setMovies, setUpcomingMovies, setFavorites } from '../../actions'
import Main from '../Main/Main'
import Nav from '../../Components/Nav/Nav'
import Login from '../Login/Login'
import MovieList from '../../Components/MovieList/MovieList'
import MoviePage from '../../Components/MoviePage/MoviePage'
import Favorites from '../../Components/Favorites/Favorites'

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


  toggleFavorites = (event, movie) => {
    event.preventDefault()
    const { user, favorites } = this.props
    const userID = user.id
    if (favorites.map((fav) => fav.title).includes(movie.title)) {
      this.removeFavorite(userID, movie.movie_id)
    } else {
      this.addFavorite(userID, movie)
    }
  }


  removeFavorite = async (userID, movieId) => {
    const { setFavorites } = this.props
    try {
      await deleteFavorite(userID, movieId)
      const updateFavorites = await getUserFavorites(userID)
      setFavorites(updateFavorites)
    } catch (error) {
      console.log(error.message)
    }
  }

  addFavorite = async (userID, movie) => {
    const { setFavorites } = this.props
    try {
      await postFavorite(userID, movie)
      const currentFavorites = await getUserFavorites(userID)
      console.log(currentFavorites)
      setFavorites(currentFavorites)
    } catch(error) {
      console.log(error.message)
    }
  }

  render() {
    const { movies, upcomingMovies, favorites } = this.props

    return (
      <div className="App">
        <Route exact path='/login' render={ () => <Login /> } />
        <Route path='/' render={ () => <Nav /> } />
        <Route exact path='/' render={ () => <Main  toggleFavorites={this.toggleFavorites} /> } />
        <Route exact path='/favorites' render={ () => <Favorites movies={favorites} toggleFavorites={this.toggleFavorites} /> } />
        <Route exact path='/movie/:movie_id' render={ ({ match }) => {
          const allMovies = [...movies, ...upcomingMovies, ...favorites]
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
  user: state.user,
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies)),
  setUpcomingMovies: (upcomingMovies) => dispatch(setUpcomingMovies(upcomingMovies)),
  setFavorites: (favorites) => dispatch(setFavorites(favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
