import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { getMovies } from '../utils/apiCalls'
import { setMovies } from '../actions'
import Main from '../Main/Main'

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
        <Route exact path='/' render={ () => <Main /> } />
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
