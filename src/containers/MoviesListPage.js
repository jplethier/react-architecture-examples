import React, { Component } from 'react';

import './Movies.css';
import Search from '../components/Search';
import List from '../components/List';

class MoviesListPage extends Component {
  render() {
    return (
      <div>
        <Search />
        <List />
      </div>
    );
  }
}

export default MoviesListPage;
