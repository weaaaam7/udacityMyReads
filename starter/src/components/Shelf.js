import Book from './Book'
import PropTypes from "prop-types";

const Shelf = ({shelfLabel, shelfValue, books,changeShelf}) => {

    const shelfbooks = books.filter((book) => book.shelf === shelfValue);

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfLabel}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {shelfbooks.map((book) => (
                    <li key={book.id}>
                        <Book
                        key={book.id}
                        book={book}
                        books={books}
                        changeShelf={changeShelf}
                        />
                </li>
                ))}
                </ol>
            </div>
        </div>
    )

}

Shelf.propTypes = {
    shelfLabel: PropTypes.string.isRequired,
    shelfValue: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };

export default Shelf;