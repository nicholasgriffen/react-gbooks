import React from 'react'

export default function Header() {
    return (
        <header
        style={{display: "flex", "justifyContent": "space-around"}}>
            <img id="logo" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/96/book-icon.png" alt="Book PNG"/>
            <h2 id="headerTitle">Search Google Books</h2>
        </header>
    )
}
