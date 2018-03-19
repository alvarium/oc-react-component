import React, {Component} from 'react'
import PropTypes from 'prop-types'

class OpenComponent extends Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.src = this.props.registryBase + 'oc-client/client.js'
    script.async = true

    document.body.appendChild(script)
  }

  render() {
    const href = this.props.registryBase + this.props.name
    return <oc-component href={href} />
  }
}

OpenComponent.propTypes = {
  name: PropTypes.string.isRequired,
  registryBase: PropTypes.string.isRequired,
}

export default OpenComponent
