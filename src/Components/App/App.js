import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getMovies } from '../utils/apiCalls'
import { setMovies } from '../actions'

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
        Hola
      </div>
    );
  
  }
}

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies))
})

export default connect(null, mapDispatchToProps)(App)
