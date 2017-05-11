import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom'

import './MoviesList.css';

class List extends Component {
  render() {
    return (
      <Row>
        {this.props.movies.map((movie, index) => (
          <Col key={index} m={6} s={12}>
            <Card
              header={<CardTitle image={movie.Poster}>{movie.Title}</CardTitle>}
            >
              <Link to={'/' + movie.imdbID}>More details</Link>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default List;
