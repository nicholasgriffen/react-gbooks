import React from 'react'
import PropTypes from 'prop-types'  

export default function Book({ selfLink, title, authors, publisher, publishedDate, thumbnail }) {
    return (<li>
                <h1 className="title">{title}</h1>
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