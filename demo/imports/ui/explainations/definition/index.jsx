import React, { Component } from 'react'

const demo = {
	symbolName: '\Pi',
	definition: 'some definition',
	inText: true,
	position: 'highlight_id'
}

export default class Definition extends Component {

	render() {
		var symbolName = demo.symbolName
		var definition = demo.definition
		var inText = demo.inText
		var position = demo.position			
		return (
			<div>
				Definition: {symbolName} {definition} {(inText)? (position):''}

			</div>
		)
	}


}

