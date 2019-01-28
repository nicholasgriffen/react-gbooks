import React from 'react'
import ReactDOM from 'react-dom'
import chai from 'chai'

import App from './App'

const { expect } = chai 

const bookProps = {
  selfLink: 'PropTypes.string.isRequired',
  title: 'PropTypes.string.isRequired',
  authors: ['PropTypes.arrayOf(PropTypes.string).isRequired'],
  publisher: 'PropTypes.string.isRequired',
  publishedDate: 'PropTypes.string.isRequired',
  thumbnail: 'PropTypes.string.isRequired'
}

const testBook = {
  items: [
  {
      selfLink: "",  
      volumeInfo: {  
          title: "", 
          authors: [ 
              ""  
          ],
          publisher: "",
          publishedDate: '',
          imageLinks: { 
              smallThumbnail: "",
              thumbnail: "" 
          }
      }
  }
]
}

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  describe('App#exctractPropsFromBooks', () => {
    it('is a function', () => {
      expect(new App().extractBookPropsFromBooks).to.be.a('function')
    })
    it('returns an object with keys matching the expected props to Book', () => {
      const expected = new App().extractBookPropsFromBooks(testBook)

      expect(expected).to.be.an('object').that.has.all.deep.keys(bookProps)
    }) 
  })
})