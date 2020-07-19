import React from 'react'
import { shallow } from 'enzyme'

import Header from './index'
import { findByTestAttr } from '../../../Utils/index'

const setUp = (props={}) => {
  const component = shallow(<Header {...props} />)
  return component
}

describe('Header Component', () => {

  let component
  beforeEach( () => {
    component = setUp()
  })

  it('It should render without errors', () => {
    const wrapper = findByTestAttr(component, 'header-component')
    expect(wrapper.length).toBe(1)
  })

  it('It should render a logo', () => {
    const logo = findByTestAttr(component, 'logo-img')
    expect(logo.length).toBe(1)
  })

})