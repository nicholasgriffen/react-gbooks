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

const props = {
    selfLink: 'PropTypes.string.isRequired',
    title: 'PropTypes.string.isRequired',
    authors: ['PropTypes.arrayOf(PropTypes.string).isRequired'],
    publisher: 'PropTypes.string.isRequired',
    publishedDate: 'PropTypes.string.isRequired',
    thumbnail: 'PropTypes.string.isRequired'
}

describe('<Book />', () => {
    let stub 
    beforeAll(() => {
        stub = sinon.stub(console, 'error')
        stub.throwsArg(0)
    })
    afterEach(() => {
        stub.resetHistory()
    })

    it('requires selfLink prop', () => {    
        expect(() => shallow(<Book />)).to.throw('Warning: Failed prop type: The prop `selfLink` is marked as required')
    })
    it('requires title prop', () => {    
        expect(() => shallow(<Book 
            selfLink={props.selfLink}/>)).to.throw('Warning: Failed prop type: The prop `title` is marked as required')
    })
    it('requires authors prop', () => {    
        expect(() => shallow(<Book 
            selfLink={props.selfLink} 
            title={props.title}/>)).to.throw('Warning: Failed prop type: The prop `authors` is marked as required')
    })
    it('requires publisher prop', () => {    
        expect(() => shallow(<Book 
            selfLink={props.selfLink} 
            title={props.title} 
            authors={props.authors}/>)).to.throw('Warning: Failed prop type: The prop `publisher` is marked as required')
    })
    it('requires publishedDate prop', () => {    
        expect(() => shallow(<Book 
            selfLink={props.selfLink} 
            title={props.title} 
            authors={props.authors} 
            publisher={props.publisher}/>)).to.throw('Warning: Failed prop type: The prop `publishedDate` is marked as required')
    })
    it('requires thumbnail prop', () => {    
        expect(() => shallow(<Book 
            selfLink={props.selfLink} 
            title={props.title} 
            authors={props.authors} 
            publisher={props.publisher}
            publishedDate={props.publishedDate}/>)).to.throw('Warning: Failed prop type: The prop `thumbnail` is marked as required')
    })

    it('renders each prop with a class matching the prop', () => {
        const wrapper = shallow(<Book 
            selfLink={props.selfLink} 
            title={props.title} 
            authors={props.authors} 
            publisher={props.publisher}
            publishedDate={props.publishedDate}
            thumbnail={props.thumbnail}/>)
            
            expect(wrapper.find('.selfLink')).to.have.lengthOf(1) 
            expect(wrapper.find('.title')).to.have.lengthOf(1)    
            expect(wrapper.find('.authors')).to.have.lengthOf(1)    
            expect(wrapper.find('.publisher')).to.have.lengthOf(1)    
            expect(wrapper.find('.publishedDate')).to.have.lengthOf(1)    
            expect(wrapper.find('.thumbnail')).to.have.lengthOf(1)
    })
       
})