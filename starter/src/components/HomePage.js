import { Link } from "react-router-dom";
import Shelf from './Shelf'

const HomePage = ({books,changeShelf}) => {

    const shelves = [
        {
        id: 1,
        shelfValue: "currentlyReading",
        shelfLabel: "Currently Reading",
        },
        {
        id: 2,
        shelfValue: "wantToRead",
        shelfLabel: "Want to Read",
        },
        {
        id: 3,
        shelfValue: "read",
        shelfLabel: "Read",
        }
    ];

    return (
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {shelves.map((shelf) => (
                <Shelf key={shelf.id} shelfLabel={shelf.shelfLabel} shelfValue={shelf.shelfValue} books={books} changeShelf={changeShelf}/>
                ))}
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );

};

export default HomePage;

