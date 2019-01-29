import React from 'react'
import Book from '../Book/Book'

export default function Books({ books }) {
    return (<ul style={{"list-style": "none"}}>{books.map((book, index) => (
        <Book key={index} book={book}></Book>
    ))}</ul>)
}
