import React, { Component } from 'react'
import Demo from './demo/index'
import Pdf from './pdf/index'

export default class Display extends Component {
  render() {
    var content = null
    switch (this.props.type) {
      case "demo":
        content = (<Demo onQueryChange={this.props.onQueryChange}/>)
        break
      case "pdf":
        content = (<Pdf onQueryChange={this.props.onQueryChange}/>)
        break
      default:
        content = (<div>Unknown type</div>)
        break
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}
