import React, { Component } from 'react';

import './SearchForm.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <label>Digite o nome do filme</label>
        <input
          type="text"
          name="search"
          onChange={(e) => this.props.onChange(e)}
        />
      </div>
    );
  }
}

export default Search;
