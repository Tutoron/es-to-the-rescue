import React, { Component } from 'react'

const demo = {
	symbolName: '\Pi',
	definition: 'some definition',
	inText: true,
	position: []
}

export default class Definition extends Component {

	render() {
		var symbolName = demo.symbolName
		var definition = demo.definition
		var inText = demo.inText
		var position = demo.position			
		return (
			<div>
				<h5>Definition:</h5> 
				<p>{symbolName} </p>
				<p>{definition}</p> 
				<p>{(inText)? (position):''}</p>

			</div>
		)
	}


}

