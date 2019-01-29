import React from 'react'
import PropTypes from 'prop-types'  

export default function Book({book}) {
    // default props or params likely better solution here
    // but had difficulty getting past TypeErrors with those solutions
    
    const title = (book.volumeInfo.title && book.volumeInfo.title !== 'Undefined') ? book.volumeInfo.title : 'Unknown'
    const authors = book.volumeInfo.authors ? book.volumeInfo.authors : ['Unknown']
    const thumbnail = book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : '#'
    const publisher = book.volumeInfo.publisher ? book.volumeInfo.publisher : 'Unpublished or Unknown'
    const publishedDate = book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : 'Unpublished'
    const selfLink = book.selfLink ? book.selfLink : '#'

    return (<li>
                <h1 className="title">{title}</h1>
                <h2 className="authors">By: {authors.map((author, index) => <span key={index}>{author}</span>)}</h2>
                <img className="thumbnail" src={thumbnail} alt={`Cover thumbnail for ${title}`}></img>
                <p className="publisher">Published by {publisher} on <span className="publishedDate"> {publishedDate}</span></p>
                <a className="selfLink" href={selfLink}>More info on Google Books</a>
            </li>)
}

    Book.propTypes = {
        book: PropTypes.shape({
            selfLink: PropTypes.string.isRequired,
            volumeInfo: PropTypes.shape({
                title: PropTypes.string.isRequired,
                authors: PropTypes.arrayOf(PropTypes.string).isRequired,
                publisher: PropTypes.string.isRequired,
                publishedDate: PropTypes.string.isRequired,
                imageLinks: PropTypes.shape({
                    thumbnail: PropTypes.string.isRequired
                })
            })
        })
    }