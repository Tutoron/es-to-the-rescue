import React, { Component } from 'react'

const demo = {
	symbolName: '\Pi',
	equation: 'sin(x)+cos(x/2)'
}


export default class Visualization extends Component {
	constructor(props) {
  		super(props);

  		this.state = {
    		inputValue: '1'
  		};
	};

	handleChange(event) {
		this.setState({inputValue: event.target.value});
		/*if (event.target.value){
			this.setState({inputValue: event.target.value});
		}else {
			this.setState({inputValue: '0'});
		}*/
  	}

  	draw() {
    	try {
      	functionPlot({
        	target: '#plot'+demo.symbolName,
        	data: [{
          	fn: demo.equation,
          	sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
          	graphType: 'polyline'
        	}]
      	});
    	}
    	catch (err) {
      	console.log(err);
      	alert(err);
    	}
  	}

  	mathJSEval(){
		var f = math.parse(demo.equation);
		return f.eval({x: this.state.inputValue})
  	}

	render() {
		window.onload = this.draw
		var name = "plot"+demo.symbolName
		return (
			<div>
				Visualization
				<input type="text" name="variable" value={this.state.inputValue} onChange={evt=>this.handleChange(evt)}></input>
				{this.state.inputValue ? this.mathJSEval() : null}

				<div id={name}></div>
				
			</div>
		)
	}
}