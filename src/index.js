import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MoviesListPage from './MoviesList/ListPage';
import MoviePage from './MovieShowPage/MoviePage';

import './index.css';

ReactDOM.render(
  (<Router>
    <div>
      <Route exact path="/" component={MoviesListPage} />
      <Route path="/:movieId" component={MoviePage}/>
    </div>
  </Router>),
  document.getElementById('root')
);
