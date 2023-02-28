import Book from './Book'

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

export default Shelf;