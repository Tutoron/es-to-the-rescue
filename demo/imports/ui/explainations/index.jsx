import React, { Component } from 'react'
import Definition from './definition/index'
import Visualization from './visualization/index'

export default class Explainations extends Component {
	render() {
		var type = this.props.item.type
		var payload = this.props.item.payload
		switch(type) {
			case 'definition':
				return <Definition payload={payload} />
			case 'visualization':
				return <Visualization payload={payload} />
			default:
				return <div>Unknown type</div>
		}
	}
}