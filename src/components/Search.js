import React from "react";
import ShelfWithNoShelf from "./ShlefWithNoShelf";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
const Search = ({
  handleSearch,
  search,
  booksWithNoShelf,
  changeShelf,
  loadSearch,
  books,
}) => {
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={handleSearch}
              value={search}
            />
          </div>
        </div>
        <div className="search-books-results">
          {/*  */}
          {loadSearch ? ( // if user search something
            <div className="list-books">
              <div className="list-books-content">
                <div>
                  <ShelfWithNoShelf
                    books={booksWithNoShelf}
                    changeShelf={changeShelf}
                    search={search}
                  />
                  {/* other Books */}
                  <Shelf
                    section="currentlyReading"
                    books={books}
                    changeShelf={changeShelf}
                    header={"Currently Reading"}
                  />
                  <Shelf
                    section="wantToRead"
                    books={books}
                    changeShelf={changeShelf}
                    header={"Want To Read"}
                  />
                  <Shelf
                    section="read"
                    books={books}
                    changeShelf={changeShelf}
                    header={"Read"}
                  />
                  {/* end other Books */}
                </div>
              </div>
            </div>
          ) : (
            <div className={"no-books"}>No Books like: {search}</div>
          )}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Search;
