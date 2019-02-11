import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

const shallow = Enzyme.shallow
const { expect } = chai 

describe('<Header />', () => {
    it('renders an img#logo', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('img#logo')).to.have.lengthOf(1)
    })
    it('renders a h2#headerTitle', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('h2#headerTitle')).to.have.lengthOf(1)        
    })
    it('renders a header', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('header')).to.have.lengthOf(1)        
    })
})