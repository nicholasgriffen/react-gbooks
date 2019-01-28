import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

import Books from './Books'

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

const shallow = Enzyme.shallow
const { expect } = chai 

describe('<Books />', () => {
    it('takes books prop and renders ul with number of children equal to books.length', () => {
        const books = ['1', {id: 2}, 3]        
        const wrapper = shallow(<Books books={books} />)

        expect(wrapper.find('ul').children()).to.have.lengthOf(books.length)
    })
})