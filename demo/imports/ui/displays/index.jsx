import React, { Component } from 'react'
import Demo from './demo/index'
import Pdf from './pdf/index'

export default class Display extends Component {
  render() {
    switch (this.props.type) {
      case "demo":
        return (<Demo onQueryChange={this.props.onQueryChange}/>)
      case "pdf":
        return (<Pdf onQueryChange={this.props.onQueryChange}/>)
      default:
        return (<div>Unknown type</div>)
    }
  }
}
