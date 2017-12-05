import React, { Component } from 'react'

{/*
const demo1 = {
	symbolName: '\Pi',
	equation: 'log(x)',
  variable: [
    {id: "x", rule: "x>0"}
  ]
}

const demo = {
  symbolName: '\normal',
  equation: '1/(sqrt(2*sigma))*e^(-(x-mu)^2/sigma)',
  variable: [
    {id: "x", rule: {min: "-30.0", max: "30.0", exclude: []}}, //Assume first element is x variable used to plot the function
    {id: "sigma", rule: {min: "0.0", max: "5.0", exclude: ["0"]}},
    {id: "mu", rule: {min: "-100.0", max: "100.0", exclude: ["0"]}}
  ]
}
*/}

const demo = {};

export default class Visualization extends Component {
	constructor(props) {
  		super(props);

  		this.state = {};

      demo = this.props.payload

      for (i=0;i<demo.variable.length;i++){
        this.state[demo.variable[i].id] = '1' //initial value of all variable is 1
      }
	};

	handleChange(event) {
    var updateState = {};
    updateState[event.target.name] = event.target.value;
		this.setState(updateState);

		/*if (event.target.value){
			this.setState({inputValue: event.target.value});
		}else {
			this.setState({inputValue: '0'});
		}*/
  }

  	draw() {
      if (this.validValue()){
        var functionScope = {};
        for (i=1;i<demo.variable.length;i++){
          functionScope[demo.variable[i].id] = this.state[demo.variable[i].id]
        }

        try {
          functionPlot({

            target: '#plot',
            data: [{
              fn: demo.equation,
              scope: functionScope,
              sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
              graphType: 'polyline'
            }],
            grid: true
          });
        }
        catch (err) {
          console.log(err);
          alert(err);
        }
      }
      
  	}

  	mathJSEval(){
      if (this.validValue()){
        this.draw()
        var f = math.parse(demo.equation);
        return f.eval(this.state)
      }
  	}

  	componentDidMount() {
  		this.draw()
  	}

    validValue(){
      for (i=0; i<demo.variable.length; i++){
        var excludeArray = demo.variable[i].rule.exclude;
        for (j=0; j<excludeArray; j++){
          if (excludeArray[j].value==this.state[demo.variable[i].id].value){
            console.log("catch one!")
            return false;
          }
        }
      }
      return true;
    }

	render() {
    var indents = [];

    for (var i = 0; i < demo.variable.length; i++) {
      var varName = demo.variable[i].id;
      var varValue = this.state[varName];
      indents.push(<p><label>{varName}: <input type="range" name={varName} value={varValue} min={demo.variable[i].rule.min} max={demo.variable[i].rule.max} step="0.01" onChange={evt=> this.handleChange(evt)}></input>{varValue}</label></p>);
    }

		return (
			<div>
				<h5>Visualization</h5>
				<p>Equation: {demo.equation}</p>
        <div>
          {indents}
        </div>
        <label>Output Value:  </label>{this.mathJSEval()}
				<div id="plot"></div>
			</div>
		)
  }
}