const Book = ({ bookList }) => {
  return (
    <ul>
      {bookList.map(book => {
        return (<li key={book.id}>{book.title} by {book.author}</li>)
      })};
    </ul>
  );
}

export default Book
