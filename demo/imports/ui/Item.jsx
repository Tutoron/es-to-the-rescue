import React, { Component } from 'react'
import Explaination from './explainations/index'
import Editor from './editors/index'

export default class Item extends Component {
	constructor(props) {
		super(props)
		this.state = {
			status: props.default
		}
		this.editorRef = null
		this.onEdit = this.onEdit.bind(this)
		this.onCancel = this.onCancel.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onEdit() {
		this.setState({status: 'edit'})
	}

	onCancel() {
		this.setState({status: 'view'})
	}

	onSubmit() {
		var val = this.editorRef.getVal()
		// TODO: send the changes to server, then set it back to view
		this.setState({status: 'view'})
	}

	render() {
		switch(this.state.status) {
			case 'view':
				return (
					<div>
						<button onClick={this.onEdit}>
							Edit
						</button>
						<Explaination item={this.props.item} />
					</div>
				)
			case 'edit':
				return (
					<div>
						<button onClick={this.onCancel}>
							Cancel
						</button>
						<button onClick={this.onSubmit}>
							Submit
						</button>
						<Editor ref={(ref) => this.editorRef = ref} item={this.props.item} />
					</div>
				)
			default:
				return <div>Unknown type</div>
		}
	}
}