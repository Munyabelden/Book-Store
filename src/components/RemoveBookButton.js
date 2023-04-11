import React from 'react'
import PropTypes from 'prop-types'

function Button({ name, handleRemoveBook, book }) {
  return (<button onClick={() => handleRemoveBook(book.item_id)}>{name}</button>);
}

Button.propTypes = {
    name: PropTypes.string,
    handleRemoveBook: PropTypes.func,
    book: PropTypes.object
}

export default Button;
