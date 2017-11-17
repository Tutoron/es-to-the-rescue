import React, { Component } from 'react'

export default class Notation extends Component {
	componentDidUpdate() {
		this.props.onChange(this.state)
	}
	
	getVal() {
		return "notation val"
	}

	render () {
		return (
			<div>
				Contribute Notation
			</div>
		)
	}
}