const { expect } = require('chai')

const googleBooksClient = require('../lib/googleBooksClient')

const schema = require('./googleBooksSchema')

const term = 'Mark Twain'

describe('googleBooksClient.search', () => {
  it('is a function', () => {
    expect(googleBooksClient.search).to.be.a('function')
  })
  it('returns object with keys and nested keys equal to those in the schema ', () => {
    return googleBooksClient.search().then(actual => {
      expect(actual).to.be.an('object').that.has.all.deep.keys(schema)
    })
  })
  it('takes an optional search term parameter as a string', () => {    
    return googleBooksClient.search(term).then(actual => {
      expect(actual).to.be.an('object').that.has.all.deep.keys(schema)
    })
  })
})