import PropTypes from 'prop-types';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling'
    },
    {
      id: 2,
      title: 'The Originals',
      author: 'Caroline Kaplin'
    },
    {
      id: 3,
      title: 'The Firm',
      author: 'Harvey Specter'
    },
    {
      id: 4,
      title: 'Game of Thrones',
      author: 'Damon Salvator'
    },
  ];

  return (
    <div className="Books">
      <h2>Books</h2>
      <ul>
        {books.map(book => {
          return (<li key={book.id}>{book.title} by {book.author}</li>)
        })}
      </ul>
      <form>
        <Input type="text" name="Book Title" id="text" key="Book Title" />
        <Input type="text" name="Book Author" id="text" key="Book Author" />
        <button type="submit">Add Book</button>
      </form>
    </div> 
  );
}

const Input = ({ name, text}) => {
  return(<input type={text} name={name} id= {text} placeholder={name} key={name}/>);
}

Input.prototype = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Books;
