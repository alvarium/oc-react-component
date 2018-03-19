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

  const registryBase = '//localhost:3000/'
  const name = 'oc-client'

  it('Render itself', () => {
    render(<OpenComponent registryBase={registryBase} name={name} />, node, () => {
      expect(node.innerHTML).toContain('<oc-component')
      expect(node.innerHTML).toContain('href="//localhost:3000/oc-client"')
    })
  })

  it('should handle params', () => {
    const params = {
      foo: 'bar',
      john: 'doe'
    }

    render(<OpenComponent registryBase={registryBase} name={name} params={params} />, node, () => {
      expect(node.innerHTML).toContain('//localhost:3000/oc-client%3F%5Bfoo%5D=bar&amp;%3F%5Bjohn%5D=doe')
    })
  })
})
