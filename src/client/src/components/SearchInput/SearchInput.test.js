import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

import SearchInput from './SearchInput'

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

const shallow = Enzyme.shallow
const { expect } = chai 

describe('<SearchInput />', () => {
    it('renders an input with type search', () => {
        const wrapper = shallow(<SearchInput onSubmit={() => {}}/>)
        const input = wrapper.find('input')
        const type = input.prop('type')
        
        expect(input).to.have.lengthOf(1)
        expect(type).to.equal('search')
    })
    it('requires onSubmit prop', () => {    
        const stub = sinon.stub(console, 'error')
        
        stub.throwsArg(0)
        
        expect(() => shallow(<SearchInput />)).to.throw('Warning: Failed prop type: The prop `onSubmit` is marked as required')
        
        stub.resetHistory()    
    })
    it('takes an onSubmit prop and calls it on submit', () =>{
        const onSubmit = sinon.spy()
        const wrapper = shallow(<SearchInput onSubmit={onSubmit} />);
        const form = wrapper.find('form')

        form.simulate("submit", { preventDefault: () => {}, target: { value: "test"}})
        
        expect(onSubmit).to.have.property('callCount', 1)
    })
    it('sets input initial value to \'\' and updates it on change', () =>{
        const wrapper = shallow(<SearchInput onSubmit={() => {}} />);
        
        expect(wrapper.find('input').prop('value')).to.be.empty

        wrapper.find('input').simulate("change", { target: { value: "test"}})
        
        expect(wrapper.find('input').prop('value')).to.equal('test')
    })
})
