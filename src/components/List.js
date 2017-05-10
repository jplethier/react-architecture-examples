import React, { Component } from 'react';

import './List.css';

class List extends Component {
  render() {
    return (
      <div className="List">
        <ul>
          {this.props.movies.map((movie, index) => (
            <li key={ index }>{movie.Title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
