import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './RemoveBookButton';
import './styles/Book.css';
import progress from './assets/progress-bar.png';

function Book(props) {
  const { author, title, category, bookId, } = props;

  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(bookId));
  };

  return (
    <section className="display">
      <div className="book">
        <span>{category}</span>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="buttons">
          <button type="button">Comments</button>
          <Button type="button" handleRemoveBook={handleRemoveBook} name="Remove" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="chapter">
        <div className="progress">
          <img src={progress} alt="progress" />
          <p>0% <br></br><span>Complete</span></p>
        </div>
        <div className="current"> 
          <p>Current Chapter</p>
          <h3>Chapter 17</h3>
          <button>Update Progress</button>
        </div>
      </div>
    </section>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default Book;