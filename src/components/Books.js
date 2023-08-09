import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/books/booksSlice';
import Book from './Book';
import  Form  from './form.js';

const Books = () => {
  const { books } = useSelector((state) => state); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    console.log(books);
  }, [dispatch]);

  const renderBooks = () => {
    if (Object.keys(books).length > 0) {
      return Object.keys(books).map((id) => {
        const [firstBook] = books[id];
        const { author, title, category } = firstBook;
        return (
          <div key={id}>
            <Book author={author} title={title} category={category} bookId={id} />
          </div>
        );
      });
    }
    return null;
  };

  return (
    <div>
      {renderBooks()}
      <Form />
    </div>
  );
};

export default Books;
