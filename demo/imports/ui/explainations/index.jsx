import React, { Component } from 'react'
import Definition from './definition/index'
import Visualization from './visualization/index'
import Partition from './partition/index'

export default class Explainations extends Component {
	render() {
		var type = this.props.item.type
		var payload = this.props.item.payload
		var content = null
		switch(type) {
			case 'definition':
				content = (<Definition payload={payload} />)
				break
			case 'visualization':
				content = (<Visualization payload={payload} />)
				break
			case 'partition':
				content = (<Partition payload={payload} />)
				break
			default:
				content = (<div className="warning-page">Unknown type</div>)
				break
		}
		return (
			<div className="card explaination-card">
				{content}
			</div>
		)
	}
}
