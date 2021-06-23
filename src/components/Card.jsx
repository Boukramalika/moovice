import React, { Component } from 'react'

class Card extends Component {

  constructor (props) {
    super(props)
    this.state = {
//s'il ya un film favoré, on va le chercher 
//puis on le parse 
 // puis on cherche le id du film 
 //si iln ya pas donc fals et il n'est pas favory
      favorite: localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites')).includes(props.movie.id)
        : false,
    }
  }

  getImage (movie) {
    return movie.backdrop_path ?
      'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path :
      'http://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png'
  }

  addToFavorites = (id) => {
//mettre le state a jour  dnc favorite il passe a true
    this.setState({ favorite: true })
//puis on recupere ce qu'on a dans le localstorage
    const favorites = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : []
//puis on push le id film
    favorites.push(id)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
// methode qui va suprimer les favoré on fonction d'un id 

  removeToFavorite = (id) => {
    this.setState({ favorite: false })
    const favorites = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : []
      // pour remouve il faut chercher l'index 
    const index = favorites.indexOf(id)
    //si on a trouver qlq chose 
    if (index !== -1) {
      favorites.splice(index, 1)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  handleClick = (event, id) => {
    event.stopPropagation()
    //tester si le film actuel est dans les favoris
    //si il est dans les favoris je remouve
    //si non je l'ajoute
    this.state.favorite ? this.removeToFavorite(id) : this.addToFavorites(id)
  }

  render () {
    return (
      <div className="card">
        <img
          src={this.getImage(this.props.movie)}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.movie.title}</h5>
          <p className="text-secondary">{this.props.movie.release_date}</p>
          <p className="card-text">
            <button
              className="btn btn-primary mb-3"
              onClick={(e) => this.handleClick(e, this.props.movie.id)}
            >
              
              {this.state.favorite ? 'Retirer des favoris' : 'Ajouter au favoris'}
            </button>
            <br/>
            {this.props.movie.overview}
          </p>
        </div>
      </div>
    )
  }
}

export default Card