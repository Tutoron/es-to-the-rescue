import React, { Component } from 'react'
import SideBar from './SideBar'
import { Meteor } from 'meteor/meteor'

const dummy = [
{
	type: 'definition',
	payload: null
}, 
{
	type: 'visualization',
	payload: null
}, 
{
	type: 'partition',
	payload: null
}]

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: []
		}
	}

	componentDidMount() {
		this.setState({list: dummy})
	}

	render() {
		return (
			<div>
				Demo PDF
				<SideBar list={this.state.list}/>
			</div>
		)
	}
}