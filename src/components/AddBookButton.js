import React from 'react';
import PropTypes from 'prop-types'

function Button({ name, type }) {
  return (
    <button type={type}>{name}</button>
  );
}

Button.proptype = {
  name: PropTypes.string,
  type: PropTypes.string
}

export default Button;
