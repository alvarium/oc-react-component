import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import OpenComponent, {OcClient} from 'src/'

describe('OpenComponent', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('Render itself', () => {
    const registryBase = '//localhost:3000/'
    const name = 'oc-client'
    render(<OpenComponent registryBase={registryBase} name={name} />, node, () => {
      expect(node.innerHTML).toContain('<oc-component')
      expect(node.innerHTML).toContain('href="//localhost:3000/oc-client"')
    })
  })
})

describe('OcClient', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('Render itself', () => {
    const registryBase = '//localhost:3000/'
    render(<OcClient registryBase={registryBase} />, node, () => {
      expect(node.innerHTML).toContain('<script')
      expect(node.innerHTML).toContain('src="//localhost:3000/oc-client"')
    })
  })
})
