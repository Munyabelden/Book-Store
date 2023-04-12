import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './RemoveBookButton';

function Book(props) {
  const {
    author, title, category, bookId,
  } = props;

  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="display">
      <div>
        <p>Category: {category}</p>
        <p>Title: {title}</p>
        <p>Author: {author}</p>
      </div>
      <div>
        <Button type="button" handleRemoveBook={handleRemoveBook} name="Delete" />
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default Book;