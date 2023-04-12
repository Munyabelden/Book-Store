import React from 'react'
import PropTypes from 'prop-types'

function Button({ name, handleRemoveBook }) {
  return (<button onClick={() => handleRemoveBook()}>{name}</button>);
}

Button.propTypes = {
    name: PropTypes.string,
    handleRemoveBook: PropTypes.func,
    book: PropTypes.object
}

export default Button;
