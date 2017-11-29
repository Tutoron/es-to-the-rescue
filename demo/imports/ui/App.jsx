import React, { Component } from 'react'
import SideBar from './SideBar'
import Menu from './menu/index'
import Display from './displays/index'
import { Meteor } from 'meteor/meteor'
import Async from './async/index'
import './styles/main.min.css'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			status: "view",
			list: [],
			type: "none"
		}
		this.handleQueryChange = this.handleQueryChange.bind(this)
		this.handleTypeChange = this.handleTypeChange.bind(this)
	}

	componentDidMount() {
		console.log("page loaded")
	}

	handleQueryChange(query) {
		console.log(query)
		var thisObj = this
		this.setState({status: "loading"})
		Async.queryDummy(query)
		.then(function (list) {
			console.log(list);
			thisObj.setState({
				status: "view",
				list: list
			})
		})
	}

	handleTypeChange(type) {
		this.setState({type: type})
	}

	render() {
		return (
			<div className="row main-page">
				<div className="col-8">
					<Menu onTypeChange={this.handleTypeChange}/>
					<Display type={this.state.type} onQueryChange={this.handleQueryChange}/>
				</div>
				<div className="col-4">
					{this.state.status === "loading" ? (
						<div>
							loading ...
						</div>
					) : (
						<SideBar list={this.state.list}/>
					)}
				</div>
			</div>
		)
	}
}
