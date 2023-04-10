import Form from './form';
import Book from './Book';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      id: 2,
      title: 'The Originals',
      author: 'Caroline Kaplin',
    },
    {
      id: 3,
      title: 'The Firm',
      author: 'Harvey Specter',
    },
    {
      id: 4,
      title: 'Game of Thrones',
      author: 'Damon Salvator',
    },
  ];

  return (
    <div className="Books">
      <h2>Books</h2>
      <Book bookList={books} />
      <Form />
    </div>
  );
};

export default Books;
