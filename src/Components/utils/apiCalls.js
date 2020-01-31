export const getMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`
  
  const response = await fetch(url)
  const data = await response.json()
  return data.results
}

