import React, { Component } from 'react'
import Card from './Card'

class Popular extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
    }
  }

  async componentDidMount() {
    const API_KEY = '669acbd46afbcc888543678ef2eb54d0'
    const result = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
    const response = await result.json()
    const movies = response.results
    this.setState({ movies })
  }

  render() {
    return (
      <div >
        <h1> Popular</h1>
        <div className="row">
          {this.state.movies.map((movie, index) => (
            <div className="col-4 d-flex align-items-stretch p-2">
              <Card key={index} movie={movie} />
            </div>
          ),
          )}
        </div>
      </div>
    )
  }
}

export default Popular