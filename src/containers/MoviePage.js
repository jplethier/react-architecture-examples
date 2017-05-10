import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './MoviePage.css';
import { getMovie } from '../actions/show';

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    getMovie(this.props.match.params.movieId).then((movie) => {
      this.setState({
        isLoading: false,
        movie: movie,
      })
    })
  }

  render() {
    const { isLoading, movie } = this.state;

    return (
      <div>
        <Link to="/">Voltar</Link>
        {isLoading ?
          <div>
            Carregando
          </div> :
          <div>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} />
            <p>{movie.Genre}</p>
            <p>{movie.Plot}</p>
          </div>}
      </div>
    );
  }
}

export default MoviePage;
