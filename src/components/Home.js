import React from "react";
import Header from "./layouts/Header";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const Home = ({ books, changeShelf }) => {
  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <div>
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
        </div>
      </div>
      <div className="open-search">
        <Link className="open-search__link" to="/search">
          
        </Link>
      </div>
    </div>
  );
};

export default Home;
