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