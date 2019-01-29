import React, { Component } from 'react'
import Header from '../Header/Header'
import SearchInput from '../SearchInput/SearchInput'
import Books from '../Books/Books'

import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      books: [],
      endpoint: process.env.REACT_APP_API_ENDPOINT, 
    }
  }
  
  // running searches with a debounced onChange would be a nice UX 
  // but had difficulty getting that to work in a reasonable way - typically 
  // triggered many requests, and race conditions between render, setState, and 
  // the mapping in the Books component 

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
      <div id='react-app'
      style={{
        display: "flex", 
        "flex-direction": "column",
        "justify-content": "space-between" 
        }}>
        <Header/>
        <SearchInput
         onSubmit={this.onSearchSubmit}/>
        {<Books 
        books={this.state.books}/>}
      </div>
    )
  }
}

export default App
