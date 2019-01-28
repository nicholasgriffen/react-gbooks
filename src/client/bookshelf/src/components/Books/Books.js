import React from 'react'
import Book from '../Book/Book'

export default function Books({ books }) {
    return (books.map((book, index) => (
        <Book key={index} book={book}></Book>
    )))
}
