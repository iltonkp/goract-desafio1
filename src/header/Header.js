import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = props => (
  <header>
    <span>{props.children}</span>
  </header>
);

Header.defaultProps = {
  children: 'Título do Header',
};

Header.propType = {
  children: PropTypes.string,
};

export default Header;
