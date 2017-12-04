import React, { Component } from 'react'

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
    {id: "x", rule: "true"}, //if no restriction, then just put true. Assume first element is x variable used to plot the function
    {id: "sigma", rule:"true"},
    {id: "mu", rule:"true"}
  ]
}


export default class Visualization extends Component {
	constructor(props) {
  		super(props);

  		this.state = {};

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
        var f = math.parse(demo.equation);
        return f.eval(this.state)
      }
  	}

  	componentDidMount() {
  		this.draw()
  	}

    validValue(){
      for (i=0; i<demo.variable.length; i++){
        if (!this.state[demo.variable[i].id]){
          return false;
        }
      }
      return true;
    }

	render() {
    var indents = [];
    for (var i = 0; i < demo.variable.length; i++) {
      var varName = demo.variable[i].id;
      var varValue = this.state[varName];
      indents.push(<label>{varName}: <input className="col-4" type="text" name={varName} value={varValue} onChange={evt=> {this.handleChange(evt);this.draw()}}></input></label>);
    }

		return (
			<div>
				<h5>Visualization</h5>
				<p>Equation: {demo.equation}</p>
        <div>
          {indents}
        </div>
        <label>Output Value:  </label>{this.mathJSEval()}
				<div className="col-4" id="plot"></div>
        
			</div>
		)
  }
}