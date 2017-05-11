import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Col, Row, Icon } from 'react-materialize';

import './MoviePage.css';
import { getMovie } from '../actions';

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
        <Row>
          <Button>
            <Link to="/">Voltar</Link>
          </Button>
        </Row>
        {isLoading ?
          <Row>
            Carregando
          </Row> :
          <div>
            <Row>
              <h1>{movie.Title}</h1>
            </Row>
            <Row>
              <Col s={12} m={6} l={6}>
                <img src={movie.Poster} />
              </Col>
              <Col s={12} m={6} l={6}>
                <p>{movie.Genre}</p>
                <p>{movie.Plot}</p>
                <a href={movie.Website} target="_blank">Go to site</a>
              </Col>
            </Row>
          </div>}
      </div>
    );
  }
}

export default MoviePage;
