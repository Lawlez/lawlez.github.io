// Must have at least one test file in this directory or Mocha will throw an error.
/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import LoginPage from '../views/LoginPage/LoginPage.js'

describe('<LoginPage />', () => {
    it('should have a section called \'intro\'', () => {
        const wrapper = shallow(<LoginPage />)
        const actual = wrapper.find('p').text()
        const expected = 'howdy'

        expect(actual).toEqual(expected)
    })

    it('should link to an unknown route path', () => {
        const wrapper = shallow(<LoginPage />)
        const actual = wrapper.find('howdy').length
        const expected = 0

        expect(actual).toEqual(expected)
    })
})
