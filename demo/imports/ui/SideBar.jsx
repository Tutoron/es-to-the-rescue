import React, { Component } from 'react'
import Item from './Item'

var empty = {
	type: 'notation',
	payload: null
}

// TODO there should be a drop down for adding new field
export default class SideBar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				SideBar
				{this.props.list.map((item, index) => (
					<Item item={item} key={index} default='view' />
				))}
			</div>
		)
	}
}