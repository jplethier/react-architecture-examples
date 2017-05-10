import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './List.css';

class List extends Component {
  render() {
    return (
      <div className="List">
        <ul>
          {this.props.movies.map((movie, index) => (
            <li key={ index }>
              <Link to={'/' + movie.imdbID}>{movie.Title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
