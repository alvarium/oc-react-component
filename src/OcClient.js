import React, {Component} from 'react'
import PropTypes from 'prop-types'

class OcClient extends Component {
  render() {
    const source = this.props.registryBase + 'oc-client'
    return <script src={source}></script>
  }
}

OcClient.propTypes = {
  registryBase: PropTypes.string.isRequired
}

export default OcClient
