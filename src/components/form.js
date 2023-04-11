import React, { useState } from 'react';
import Input from "./Input";
import Button from './AddBookButton';

const Form = ({ handleAddBook, bookList }) => {
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookTitle, setBookTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBook( bookList.length , bookAuthor, bookTitle, e);
  }

  const handleTitleChange = (e) => {
    setBookTitle(e.target.value);
  }

  const handleAuthorChange = (e) => {
    setBookAuthor(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" name="Book Title" id="text" handleChange={ handleTitleChange } key="Book title" />
      <Input type="text" name="Book Author" id="text" handleChange={ handleAuthorChange } key="Book Author" />
      <Button type="submit" name="Add Book" />
    </form>
  );
}

export default Form;
