import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

import Book from './Book'

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())


const shallow = Enzyme.shallow
const { expect } = chai

const book = {
    volumeInfo: {
        infoLink: 'PropTypes.string.isRequired',
        title: 'PropTypes.string.isRequired',
        authors: ['PropTypes.arrayOf(PropTypes.string).isRequired'],
        publisher: 'PropTypes.string.isRequired',
        publishedDate: 'PropTypes.string.isRequired',
        imageLinks: {
            thumbnail: 'PropTypes.string.isRequired'
        }
    }
}

describe('<Book />', () => {
    let stub 
    beforeAll(() => {
        stub = sinon.stub(console, 'error')
        stub.throwsArg(0)
    })
    afterAll(() => {
        stub.resetHistory()
    })

    it('renders each prop with a class matching the prop', () => {
        const wrapper = shallow(<Book 
            book={book}/>)
            
            expect(wrapper.find('.infoLink')).to.have.lengthOf(1) 
            expect(wrapper.find('.title')).to.have.lengthOf(1)    
            expect(wrapper.find('.authors')).to.have.lengthOf(1)    
            expect(wrapper.find('.publisher')).to.have.lengthOf(1)    
            expect(wrapper.find('.publishedDate')).to.have.lengthOf(1)    
            expect(wrapper.find('.thumbnail')).to.have.lengthOf(1)
    })
       
})