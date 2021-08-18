import React, { Component } from "react";

export default class ClassBook extends Component {
  state = {
    loading: true,
    options: ["currentlyReading", "wantToRead", "read", "none"],
  };

  handleValue() {
    const option = this.state.options.filter(
      (option) => option === this.props.book.shelf
    );
    return option[0];
  }

  updateShelf = (event) =>
    this.props.changeShelf(this.props.book, event.target.value);

  render() {
    let currentShelf = "none";

    // if book is in current list, set current shelf to book.shelf
    for (let item of this.props.books) {
      if (item.id === this.props.book.id) {
        currentShelf = item.shelf;
        break;
      }
    }

    return (
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${
                    this.props.book.imageLinks.smallThumbnail
                  })`,
                }}
              />
              <div className="book-shelf-changer">
                <select onChange={this.updateShelf} value={this.handleValue()}>
                  <option value="move" disabled>
                    Move to...
                  </option>

                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
          </div>
        </li>
      </div>
    );
  }
}
