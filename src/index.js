import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "./header/Header";

import "./style.scss";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
