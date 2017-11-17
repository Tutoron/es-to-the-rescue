import React, { Component } from 'react'
import Explaination from './explainations/index'

var empty = {
	type: 'notation',
	payload: null
}

export default class SideBar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				SideBar
				{this.props.list.map((item, index) => (
					<Explaination item={item} key={index} />
				))}
			</div>
		)
	}
}