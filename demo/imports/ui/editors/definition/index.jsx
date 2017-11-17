import React, { Component } from 'react'

export default class Definition extends Component {
	componentDidUpdate() {
		this.props.onChange(this.state)
	}
	
	getVal() {
		return "def val"
	}

	render () {
		return (
			<div>
				Contribute Definition
			</div>
		)
	}
}