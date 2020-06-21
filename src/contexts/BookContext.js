import React, { createContext, useState, useReducer } from 'react'
import {v4 as uuid} from 'uuid'
import { bookReducer } from '../reducers/book-reducer'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    //useState Hooks for setting initial values
    /*
    const [books, setBooks] = useState([
    {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    {title: 'the final empire', author: 'brandon sanderson', id: 2},
    ])
    

    const addBook = (title, author) => {
        setBooks([...books, {title: title, author: author, id: uuid() }])
    }
    
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return(
        <BookContext.Provider value = {{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
    */

    //useReducer hook to define initial book State and send a dispatch function rather than passing all relevant functions individually
    const [books, dispatch] = useReducer(bookReducer, [])
    return(
        <BookContext.Provider value = {{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider