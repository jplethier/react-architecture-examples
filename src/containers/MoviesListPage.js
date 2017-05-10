import React, { Component } from 'react';
import _ from 'lodash';

import './Movies.css';
import { search } from '../actions/search';
import Search from '../components/Search';
import List from '../components/List';

class MoviesListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };

    _.bindAll(this, 'onChange');
  }

  onChange(e) {
    search(e.target.value).then((movies) => {
      this.setState({
        movies: movies
      })
    })
  }

  render() {
    return (
      <div>
        <Search onChange={this.onChange}/>
        <List movies={this.state.movies} />
      </div>
    );
  }
}

export default MoviesListPage;
