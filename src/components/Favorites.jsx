import React, { Component } from 'react'
import Card from './Card'

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      favIDs: this.getStorage(),
    }

  }
  getStorage = () => {
    return localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : []
  }
  getMovie = async id => {
    const API_KEY = '669acbd46afbcc888543678ef2eb54d0'
    const movie = await fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(r => r.json())
    this.setState({ movies: [...this.state.movies, movie] })
  }
  componentDidMount() {
    this.state.favIDs.map(id => this.getMovie(id))
  }


  render() {
    return (
      <div>
        <h1> Favorites</h1>
        <div className="row">
          {
            this.state.movies.map(movie => {
              return <div key={movie.id} className="col-4 d-flex align-items-stretch p-2">
                <Card movie={movie} />
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default Favorites