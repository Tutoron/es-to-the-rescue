import React, { Component } from 'react'

export default class Definition extends Component {
	constructor(props) {
		super(props)
		this.notationRef = null
		this.tex = window.katex
	}

	componentDidMount() {
		this.tex.render(this.props.payload.symbolName, this.notationRef)
	}

	render() {
		const demo = this.props.payload

		var symbolName = demo.symbolName
		var definition = demo.definition
		var inText = demo.inText
		var position = demo.position

		return (
			<div>
				<h5>Definition:</h5>
				<div ref={(ref) => this.notationRef = ref}></div>	
				<p>{definition}</p>
				<p>{(inText)? (position):''}</p>

			</div>
		)
	}


}
