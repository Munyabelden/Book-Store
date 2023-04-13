import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/booksSlice';
import './styles/Form.css';
import Input from './Input';
import Button from './AddBookButton';

function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fiction');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'author':
        setAuthor(value);
        break;
      case 'category':
        setCategory(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(createBook({ title, author, category }));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <h2>ADD NEW BOOK</h2>
        <div>
          <Input type="text" name="title" placeholder="Book title" value={title} handleChange={handleChange} />
          <Input type="text" name="author" placeholder="Add author" value={author} handleChange={handleChange} />
          <select name="category" value={category} onChange={handleChange}>
            <option value="Fantasy">Fantasy</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Mystery">Mystery</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Comptemporary">Contemporary</option>
            <option value="Comics">Comics</option>
          </select>
          <Button type="submit" name="Add Book"/>
        </div>
      </form>
  );
}

export default Form;