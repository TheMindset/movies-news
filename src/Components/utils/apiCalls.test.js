import * as API from './apiCalls'

describe('getMovies', () => {
  let mockResponse

  beforeEach(()=>{ 
    mockResponse = {results: [
      {
        poster_path: "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
        title : "1917",
        release_date : "2019-12-10",
        vote_average : 8.1,
        overview : "At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers—Blake's own brother among them.",
        movie_id : 530915
      }
    ]}

    window.fetch = jest.fn().mockImplementation(()=>{
      return Promise.resolve({
        ok:true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should call fetch with correct URL', () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`

    API.getMovies()

    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should return an array of movies', () => {
    expect(API.getMovies()).resolves.toEqual(mockResponse)
  })

})