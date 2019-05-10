import React from "react";

import "./style.scss";

const Header = props => (
  <header>
    <span>{props.children}</span>
  </header>
);

export default Header;
