import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

import Search from "./components/Search";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false, //loading page
    search: "", //search therm in input
    searchBooks: [], //books user search for it
    loading: false, //loading for home books
    loadSearch: false,
    //
    booksFromSearch: [],
    booksWithNoShelf: [],
    // Play
    book1Id: "",
  };

  componentDidMount() {
    BooksAPI.getAll().then((res) => {
      this.setState({
        books: res,
        loading: true,
      });
    });
  }

  handleSearch = async (event) => {
    await this.setState({
      search: event.target.value,
    });
    console.log(this.state.search);
    this.state.search.length > 0 && this.handleBooksSearch(this.state.search);
  };

  handleBooksSearch = async (search) => {
    BooksAPI.search(search).then((res) => {
      if (res && !res.error) {
        this.setState({
          booksFromSearch: res.map((booksSearch) => {
            this.state.books.forEach((book) => {
              if (booksSearch.id === book.id) booksSearch.shelf = book.shelf;
            });
            return booksSearch;
          }), //map
        });

        let filterAdust = this.state.booksFromSearch.filter(
          (book) => book.shelf !== "currentlyReading"
        );
        filterAdust = filterAdust.filter((book) => book.shelf !== "wantToRead");
        filterAdust = filterAdust.filter((book) => book.shelf !== "read");
        this.setState({ booksWithNoShelf: filterAdust });

        this.setState({
          searchBooks: this.state.booksFromSearch,
          loadSearch: true,
        });
      } else {
        this.setState({
          searchBooks: `no books like ${search}`,
          loadSearch: false,
        });
      }
    });
  };

  changeShelf = async (book, shelf, search) => {
    if (shelf === "none") {
      await BooksAPI.update(book, shelf);
      await BooksAPI.getAll().then((res) => {
        this.setState({ books: res });
      });
      let newBooks = this.state.books.filter(
        (thisBook) => thisBook.id !== book.id
      );
      this.setState({
        books: newBooks,
      });
      if (this.state.search.length > 0) {
        this.handleBooksSearch(this.state.search);
      }
    } else {
      await BooksAPI.update(book, shelf);
      BooksAPI.getAll().then((res) => {
        this.setState({ books: res });
      }); //end then
      if (this.state.search.length > 0) {
        console.log("search");
        this.handleBooksSearch(this.state.search);
      }
    } //end else
  }; //end change

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            {/* Search Router  */}
            <Route exact path="/Search" >
              <Search
                handleSearch={this.handleSearch}
                search={this.state.search}
                booksWithNoShelf={this.state.booksWithNoShelf}
                changeShelf={this.changeShelf}
                loadSearch={this.state.loadSearch}
                books={this.state.books}
              />
            </Route>
            {/* Home Router */}
            <Route path="/" >
              <Home books={this.state.books} changeShelf={this.changeShelf} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
