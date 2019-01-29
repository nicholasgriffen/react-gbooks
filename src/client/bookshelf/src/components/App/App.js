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
      books: [],
      endpoint: process.env.REACT_APP_API_ENDPOINT, 
    }
  }

  onSearchSubmit = term => {
    return fetch(`${this.state.endpoint}/?search=${encodeURIComponent(term)}`).then(res => {
     return res.json()
   }).then(json => {
     const books = json.items
    return  this.setState({
      ...this.state, 
      books 
    })
   })
  }

  render() {
    return (
      <div id='react-app'>
        <Header />
        <SearchInput onSubmit={this.onSearchSubmit}/>
        {<Books 
        books={this.state.books}/>}
        <Footer />  
      </div>
    )
  }
}

export default App
