import React from 'react'
import Book from './Book'

const Shelf = ({section, books, getBook}) => {
    const booksCategory = books.filter((book) => book.shelf === section)
    console.log(books)
    return (
        
            <div className="bookshelf-books">
                <ol className="books-grid">
                {booksCategory.map((book) => (
                    <Book book={book} />
                ))}

                </ol>
            </div>
      
    )
}

export default Shelf
