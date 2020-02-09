import React from 'react'
import { shallow } from 'enzyme'
import { MovieCard, mapStateToProps } from './MovieCard'

describe('MovieCard', () => {
  let wrapper, mockMovie, mockFavorites
  const mockToggleFavorites = jest.fn()

  beforeEach(() => {
    mockMovie = {
      poster_path: "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
      title : "1917",
      release_date : "2019-12-10",
      vote_average : 8.1,
      overview : "At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers—Blake's own brother among them.",
      movie_id : 530915
    } 
  
    mockFavorites = [
      {
        poster_path: "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
        title : "1917",
        release_date : "2019-12-10",
        vote_average : 8.1,
        overview : "At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers—Blake's own brother among them.",
        movie_id : 530915
      }
    ]

    wrapper = shallow(
      <MovieCard 
        movie = {mockMovie}
        favorites = {mockFavorites}
        toggleFavorites = {mockToggleFavorites}
      />
    )
  })

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should call toggleFavorites when the star is clicked', () => {
    const event = { preventDefault: jest.fn() }

    wrapper.find('.card-favorite-image').simulate('click', event)
    expect(mockToggleFavorites).toHaveBeenCalledWith(event, mockMovie)
  })
  
})
