import React from 'react'
import PropTypes from 'prop-types'  

export default function Book({ selfLink, title, authors, publisher, publishedDate, thumbnail }) {
    return (<li>
                <a class="selfLink" href={selfLink}>More info on Google Books</a>
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