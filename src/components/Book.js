import PropTypes from 'prop-types';
import Button from './RemoveBookButton';

const Book = ({ bookList, handleRemoveBook }) => {
  return (
    <ul>
      {bookList.map(book => {
        return (<li key={book.item_id}>{book.title} by {book.author} <Button key={book.item_id} handleRemoveBook={handleRemoveBook} book={book} name="Delete" /></li>)
      })}
    </ul>
  );
}

Book.propTypes = {
    bookList: PropTypes.array,
    handleRemoveBook: PropTypes.func
}

export default Book;
