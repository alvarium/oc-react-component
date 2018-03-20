import React, {Component} from 'react'
import PropTypes from 'prop-types'

const serializeParams = function(obj, prefix) {
  const str = []
  let p
  for(p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
      str.push((v !== null && typeof v === "object") ?  serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join('&');
}

class OpenComponent extends Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = this.props.registryBase + 'oc-client/client.js'
    script.async = true

    document.body.appendChild(script)
  }

  render() {
    const paramsUrl = serializeParams(this.props.params)
    let href = this.props.registryBase + this.props.name

    if (paramsUrl) {
      href = href + '?' + paramsUrl
    }

    return <oc-component href={href} />
  }
}

OpenComponent.propTypes = {
  name: PropTypes.string.isRequired,
  registryBase: PropTypes.string.isRequired,
  params: PropTypes.object,
}

export default OpenComponent
