import React from "react";
import Book from "./Book";

const ShelfWithNoShelf = ({ books, changeShelf, search }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">None</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book
              book={book}
              key={book.id}
              changeShelf={changeShelf}
              search={search}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ShelfWithNoShelf;
