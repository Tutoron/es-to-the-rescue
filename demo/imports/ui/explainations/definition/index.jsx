import React, { Component } from 'react'

{/*
const demo = {
	symbolName: '\Pi',
	definition: 'some definition',
	inText: true,
	position: []
}
*/}

//const def_formulas = []

export default class Definition extends Component {

	render() {
		const demo = this.props.payload

		var symbolName = demo.symbolName
		var definition = demo.definition
		var inText = demo.inText
		var position = demo.position

		//var element = '∇'

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

