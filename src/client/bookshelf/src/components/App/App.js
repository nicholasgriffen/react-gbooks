import React, { Component } from 'react'
import { debounce } from 'debounce'
import Header from '../Header/Header'
import SearchInput from '../SearchInput/SearchInput'
import Books from '../Books/Books'
import Footer from '../Footer/Footer'

import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      books: [],
      endpoint: process.env.REACT_APP_API_ENDPOINT
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

  onChange = async term => {
   const books = await fetch(`${this.state.endpoint}/?search=${encodeURIComponent(term)}`)
   const body = await books.json()

    if (books.status !== 200) {
      return this.setState({
        ...this.state, 
        error: body.message
      })  
    } else {
      return this.setState({
        ...this.state, 
        books: body
      })
    }
  }

  render() {
    return (
      <div id='react-app'>
        <Header />
        <SearchInput onChange={debounce(this.onChange, 500)}/>
        {this.state.books && <Books 
        books={this.state.books.map(book => this.extractBookPropsFromBook(book))}/>}
        <Footer />  
      </div>
    )
  }
}

export default App
