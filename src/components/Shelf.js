import React from 'react'
import ClassBook from './ClassBook'
import * as BooksAPI from '../BooksAPI'



const Shelf = ({section, books}) => {

    const handleChanger =  (book,event)=>{
        
        // BooksAPI.update(book, event.target.value)
    }

    const booksCategory = books.filter((book) => book.shelf === section)
    
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {booksCategory.map((book)=>(
                    <ClassBook book={book} key={book.id} handleChanger={handleChanger}/>
                ))}
            </ol>
        </div>
    )
}

export default Shelf
