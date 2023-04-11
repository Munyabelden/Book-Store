import { useSelector, useDispatch } from 'react-redux';
import Form from './form';
import Book from './Book';
import { addBook, removeBook } from '../redux/books/booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
      dispatch(removeBook({id: bookId}));
  }  

  const handleAddBook = (item_id, author, title, e) => {
    e.preventDefault();
    dispatch(addBook({ item_id, author, title }));
  }
  
  return (
    <div className="Books">
      <h2>Books</h2>
      <Book bookList={books} handleRemoveBook={ handleRemoveBook } />
      <Form bookList={books} handleAddBook={ handleAddBook } />
    </div>
  );
};

export default Books;
