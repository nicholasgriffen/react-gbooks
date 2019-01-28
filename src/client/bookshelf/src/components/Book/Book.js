import React from 'react'
import PropTypes from 'prop-types'  

export default function Book({ book }) {
    return (<li>{book}</li>)
}

Book.propTypes = {
    selfLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    publisher: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
}