/*
  !!!IN PROGRESS!!!
  !!!IN PROGRESS!!!
  !!!IN PROGRESS!!!
  !!!IN PROGRESS!!!
  !!!IN PROGRESS!!!
*/

import React from 'react'
import { mount } from 'enzyme'

import Root from '../../Root'
import CredentialsScreen from '../Credentials/CredentialsScreen'

describe('<CredentialsScreen /> Test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <Root>
        <CredentialsScreen />
      </Root>
    )
  })

  // it('shows one form', () => {
  //   expect(wrapper.find('form')).toHaveLength(1)
  // })

  // it('shows two inputs', () => {
  //   expect(wrapper.find('input')).toHaveLength(2)
  // })

  // it('shows one form button', () => {
  //   expect(wrapper.find('button')).toHaveLength(1)
  // })

  // it('button should have proper text', () => {
  //   expect(wrapper.find('button').text()).toEqual('Submit')
  // })
})
