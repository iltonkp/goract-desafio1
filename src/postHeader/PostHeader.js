import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="header-post">
    <img src={props.avatar} width="40" height="40" />
    <div className="author">
      <p>{props.name}</p>
      <span>{props.hour}</span>
    </div>
  </div>
);

PostHeader.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
};

export default PostHeader;
