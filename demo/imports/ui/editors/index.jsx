import React, { Component } from 'react'
import Definition from './definition/index'
import Visualization from './visualization/index'
import Notation from './notation/index'

export default class Editors extends Component {
	constructor(props) {
		super(props)
		this.editorRef = null
	}

	getVal() {
		var res = null
		if (this.editorRef) {
			res = this.editorRef.getVal()
		}
		return res
	}

	render() {
		var type = this.props.item.type
		var payload = this.props.item.payload
		switch(type) {
			case 'definition':
				return <Definition payload={payload} ref={(ref) => this.editorRef = ref} />
			case 'visualization':
				return <Visualization payload={payload} ref={(ref) => this.editorRef = ref} />
			case 'notation':
				return <Notation payload={payload} ref={(ref) => this.editorRef = ref} />
			default:
				return <div>Unknown type</div>
		}
	}
}