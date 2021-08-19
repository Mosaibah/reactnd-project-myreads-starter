import React from "react";
import Book from "./Book";

const Shelf = ({ section, books, changeShelf, header }) => {
  const booksCategory = books.filter((book) => book.shelf === section);

  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{header}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {booksCategory.map((book) => (
          <Book
            book={book}
            books={books}
            key={book.id}
            changeShelf={changeShelf}
          />
        ))}
      </ol>
    </div>
    </div>
  );
};

export default Shelf;
