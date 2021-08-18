import React from "react";
import ClassBook from "./ClassBook";

const Shelf = ({ section, books, changeShelf }) => {
  const booksCategory = books.filter((book) => book.shelf === section);

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {booksCategory.map((book) => (
          <ClassBook
            book={book}
            books={books}
            key={book.id}
            changeShelf={changeShelf}
          />
        ))}
      </ol>
    </div>
  );
};

export default Shelf;
