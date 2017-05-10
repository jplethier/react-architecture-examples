import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './containers/App';

import './index.css';

ReactDOM.render(
  (<Router>
    <div>
      <App/>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={App}/>
      <Route path="/topics" component={App}/>
    </div>
  </Router>),
  document.getElementById('root')
);
