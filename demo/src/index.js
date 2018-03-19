import React, {Component} from 'react'
import {render} from 'react-dom'

import OpenComponent from '../../src/OpenComponent'

class Demo extends Component {
  render() {
    return <div>
      <h1>oc-react-component Demo</h1>
      <OpenComponent
        registryBase='https://opencomponents.herokuapp.com/'
        name='landing-page'
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
