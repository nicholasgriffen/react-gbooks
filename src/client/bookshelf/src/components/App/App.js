import React, { Component } from 'react'

import Header from '../Header/Header'
import SearchInput from '../SearchInput/SearchInput'
import Books from '../Books/Books'
import Footer from '../Footer/Footer'

import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  extractBookPropsFromBook(book) {
    const bookProps = {}

    bookProps.selfLink = book.selfLink
    bookProps.title = book.volumeInfo.title 
    bookProps.authors = book.volumeInfo.authors
    bookProps.publisher = book.volumeInfo.publisher
    bookProps.publishedDate = book.volumeInfo.publishedDate
    bookProps.thumbnail = book.volumeInfo.imageLinks.thumbnail 
    
    return bookProps
  }

  render() {
    return (
      <div id='react-app'>
        <Header />
        <SearchInput />
        (this.state.books && <Books 
        books={this.state.books.map(book => this.extractBookPropsFromBook(book))}/>)
        <Footer />  
      </div>
    )
  }
}

export default App
