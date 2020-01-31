import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { getMovies } from '../../Components/utils/apiCalls'
import { setMovies } from '../../actions'
import Main from '../../Components/Main/Main'
import Nav from '../../Components/Nav/Nav'

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
        <Route path='/' render={ () => <Nav /> } />
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
