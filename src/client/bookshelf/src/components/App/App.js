import React, { Component } from 'react'

import Header from '../Header/Header'
import SearchInput from '../SearchInput/SearchInput'
import Books from '../Books/Books'
import Footer from '../Footer/Footer'

import './App.css'

class App extends Component {

  extractBookPropsFromBook() {

  }

  render() {
    return (
      <div id='react-app'>
        <Header />
        <SearchInput />
        <Books />
        <Footer />  
      </div>
    )
  }
}

export default App
