import React from 'react'
import PropTypes from 'prop-types'  

export default function Book({book}) {
    // default props or params likely better solution here
    // but had difficulty getting past TypeErrors with those solutions
    if (!book.volumeInfo) return (<li>No results found...</li>)
    
    const title = (book.volumeInfo.title !== 'Undefined') && assignIfNull(book.volumeInfo.title, 'Unknown')
    const authors = assignIfNull(book.volumeInfo.authors, ['Unknown'])
    const thumbnail = book.volumeInfo.imageLinks && assignIfNull(book.volumeInfo.imageLinks.thumbnail, '#')
    const publisher = assignIfNull(book.volumeInfo.publisher, 'Unpublished or Unknown')
    const publishedDate = assignIfNull(book.volumeInfo.publishedDate, 'Unpublished')
    const infoLink = assignIfNull(book.volumeInfo.infoLink, '#')

    function assignIfNull(key, value) {
        return key ? key : value
    }
    
    return (<li>
                <h1 className="title">{title}</h1>
                <h2 className="authors">By: {authors.map((author, index) => {
                    let delimiter
                    if (authors.length > 1 && index < authors.length - 1) {
                        delimiter = ', '
                    } else {
                        delimiter = ''
                    }
                    return <span key={index}>{author + delimiter}</span>
                })}</h2>
                <img className="thumbnail" src={thumbnail} alt={`Cover thumbnail for ${title}`}></img>
                <p className="publisher">Published by {publisher} on <span className="publishedDate"> {publishedDate}</span></p>
                <a className="infoLink" href={infoLink}>More info on Google Books</a>
            </li>)
}

    Book.propTypes = {
        book: PropTypes.shape({
            volumeInfo: PropTypes.shape({
                infoLink: PropTypes.string.isRequired,
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
