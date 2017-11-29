import React, { Component } from 'react'

const formulas = [
  "c = \\pm\\sqrt{a^2 + b^2}",
  "z = \\pm\\sqrt{x^2 + y^2}",
  "\\infty"
]

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.formulas = []
    this.tex = window.katex
  }

  componentDidMount() {
    this.formulas.forEach((elt, idx) => {
      this.tex.render(formulas[idx], elt)
    })
  }

  render() {
    return (
      <div>
        Demo
        <div
          onClick={() => this.props.onQueryChange(formulas[0])}
          ref={(ref) => this.formulas.push(ref)}>
        </div>
        <div
        onClick={() => this.props.onQueryChange(formulas[1])}
          ref={(ref) => this.formulas.push(ref)}>
        </div>
        <div
        onClick={() => this.props.onQueryChange(formulas[2])}
          ref={(ref) => this.formulas.push(ref)}>
        </div>
      </div>
    )
  }
}
