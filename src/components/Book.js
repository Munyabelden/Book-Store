import PropTypes from 'prop-types';

const Book = ({ bookList }) => {
  return (
    <ul>
      {bookList.map(book => {
        return (<li key={book.id}>{book.title} by {book.author}</li>)
      })};
    </ul>
  );
}

Book.proptype = {
    bookList: PropTypes.array,
}

export default Book
