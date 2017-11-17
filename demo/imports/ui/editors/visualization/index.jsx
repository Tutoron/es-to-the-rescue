import React, { Component } from 'react'

export default class Visualization extends Component {
	componentDidUpdate() {
		this.props.onChange(this.state)
	}

	getVal() {
		return "vis val"
	}

	render () {
		return (
			<div>
				Contribute Visualization
			</div>
		)
	}
}