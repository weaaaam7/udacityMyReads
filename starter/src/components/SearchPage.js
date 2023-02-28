import * as BooksAPI from "../BooksAPI"
import { Link } from "react-router-dom";
import { useState } from "react"; 
import Book from './Book'

const SearchPage = (books,changeShelf) => {

    const [query, setQuery] = useState("");
    const [resultBooks, setResultBooks] = useState([]);

    const updateQuery = (e) => {
      let query=e.target.value
        if (query !== "") {
            BooksAPI.search(query, 100).then((res) => {
              if (res.error !== 'empty query') {
                setResultBooks(res);
                console.log(res);
            }
            setQuery(query.trim()); 
            });

        } else {
            console.log(":(")
            setQuery("");
            setResultBooks([]);
        }
    };

    let empty = []
    
    const showingBooks = query === "" 
    ? empty
    : resultBooks

    console.log(showingBooks)
    
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to={'/'}> Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(e) => updateQuery(e)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {showingBooks.map((book) => (
                <li key={book.id}>
                    <Book book={book} books={books} changeShelf={changeShelf}/>
                 </li>
                ))}  
            </ol>
          </div>
        </div>
    )

}

export default SearchPage;

