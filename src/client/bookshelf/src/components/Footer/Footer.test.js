import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

const shallow = Enzyme.shallow
const { expect } = chai 

describe('<Footer />', () => {
    it('renders a #copyright', () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.find('#logo')).to.have.lengthOf(1)
    })
    it('renders a #poweredBy', () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.find('#poweredBy')).to.have.lengthOf(1)        
    })
    it('renders a #createdBy', () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.find('#createdBy')).to.have.lengthOf(1)        
    })
    it('renders a footer', () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.find('footer')).to.have.lengthOf(1)        
    })
})