import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const Book = ({book, books,changeShelf}) => {

  const update = (shelf) => {
    BooksAPI.update(book, shelf);
    changeShelf(book, shelf);
}
  return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks?.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={book?.shelf || (books.find((resBook) => resBook.id === book.id))?.shelf || 'none'} onChange={(e) => update(e.target.value)}>
              <option value="disabled" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Book;