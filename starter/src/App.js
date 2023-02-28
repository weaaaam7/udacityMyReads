import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage"
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getAllBooks = async () => {
      const books = await BooksAPI.getAll();
      setBooks(books);
    };
    getAllBooks();
  }, []);

  const changeShelf = (book, shelf) => {
    BooksAPI.update(book.id, shelf)
    .then(() => {
      book.shelf = shelf
      setBooks(books.filter((b) => b.id !== book.id).concat(book))
  })
}

  return (
    <div className="app">
      <div className="list-books">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                books = {books}
                changeShelf={changeShelf}
              />
            }
          />
          <Route
            path="/search"
            element={
            <SearchPage 
            books={books}
            changeShelf={changeShelf}
            />
          }
            />
        </Routes>
      </div>
    </div>
  );
}

export default App;
