import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src/OpenComponent'

class Demo extends Component {
  render() {
    return <div>
      <h1>oc-react-component Demo</h1>
      <Example/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
