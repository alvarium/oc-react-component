import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import OpenComponent from 'src/'

describe('OpenComponent', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('Render itself', () => {
    render(<OpenComponent/>, node, () => {
      expect(node.innerHTML).toContain('')
    })
  })
})
