import React, { useContext } from 'react'
import { BookContext } from '../../contexts/BookContext'
import BookDetails from './book-details.component'

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length ? (
        <div className='book-list'>
            <ul>
                {books.map(book => {
                    return(
                        <BookDetails book = {book} key = {book.id} />
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">Finished reading all books. Consider going out for a walk &#127939;...</div>
    )
}

export default BookList