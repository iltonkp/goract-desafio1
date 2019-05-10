import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './header/Header';

import './style.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="content">
        <Header>RocketBook</Header>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
