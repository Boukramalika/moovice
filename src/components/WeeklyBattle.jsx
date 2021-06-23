import React, { Component } from 'react'
import Card from './Card'
import { DateTime } from 'luxon'

class WeeklyBattle extends Component {

  constructor () {
    super()
    this.state = {
      movies: [],
      currentBattle: 2,
    }
  }

  async componentDidMount () {
    const API_KEY = '669acbd46afbcc888543678ef2eb54d0'
    const TODAY = DateTime.now().toISODate()
    const LAST_WEEK = DateTime.now().minus({ weeks: 1 }).toISODate()
    const result = await fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}`)
    const response = await result.json()
    const movies = response.results
    this.setState({ movies })
  }

  handleClick = () => {
    this.setState({ currentBattle: this.state.currentBattle + 2 })
    if (this.state.currentBattle === 20) {
      alert('Vous avez parcouru tous les films !')
    }
  }

  render () {
    return (
      <div>
        <h1>
          Weekly Battle
        </h1>
        <div className="row">
          {this.state.movies.slice(0, this.state.currentBattle).map((movie, index) => (
              <div
                key={index}
                className="col-4 d-flex align-items-stretch p-2"
                onClick={this.handleClick}
              >
                <Card movie={movie}/>
              </div>
            ),
          )}
        </div>
      </div>
    )
  }
}

export default WeeklyBattle