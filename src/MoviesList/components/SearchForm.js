import React, { Component } from 'react';
import { Row, Input, Icon } from 'react-materialize';

import './SearchForm.css';

class Search extends Component {
  render() {
    return (
      <Row>
        <Input
          type="text"
          label="Search for movie title"
          onChange={(e) => this.props.onChange(e)}
        >
          <Icon>search</Icon>
        </Input>
      </Row>
    );
  }
}

export default Search;
