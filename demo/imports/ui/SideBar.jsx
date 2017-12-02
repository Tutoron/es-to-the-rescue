import React, { Component } from 'react'
import Explaination from './explainations/index'

export default class SideBar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="explaination-sidebar">
				{this.props.list.map((item, index) => (
					<Explaination item={item} key={index} />
				))}
			</div>
		)
	}
}
