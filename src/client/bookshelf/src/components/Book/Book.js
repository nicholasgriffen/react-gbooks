import React from 'react'
import PropTypes from 'prop-types'  

export default function Book({ selfLink, title, authors, publisher, publishedDate, thumbnail }) {
    return (<li>
                <h1 className="title">{title}</h1>
                <h2 className="authors">By: {authors.map((author, index) => <span key={index}>author</span>)}</h2>
                <img className="thumbnail" src={thumbnail} alt={`Cover thumbnail for ${title}`}></img>
                <p className="publisher">Published by {publisher} on <span className="publishedDate"> {publishedDate}</span></p>
                <a className="selfLink" href={selfLink}>More info on Google Books</a>
            </li>)
}

Book.propTypes = {
    selfLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    publisher: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
}