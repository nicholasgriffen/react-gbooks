import React from 'react'
import { shallow } from 'enzyme'

import Header from './'

describe('<Header />', () => {
    it('renders a #logo', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('#logo')).to.have.lengthOf(1)
    })
    it('renders a #headerTitle', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('#headerTitle')).to.have.lengthOf(1)        
    })
    it('renders a header', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('header')).to.have.lengthOf(1)        
    })
})