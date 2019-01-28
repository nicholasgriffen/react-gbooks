import React, { Component } from 'react'

import Header from '../Header/Header'
import SearchInput from '../SearchInput/SearchInput'
import './App.css'

class App extends Component {
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
