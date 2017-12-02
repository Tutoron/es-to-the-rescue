import React, { Component } from 'react'

const formulas1 = [
  "\\nabla_{{\\bf W}} J =  \\mathbb{E}[ R({\\bf u})\\nabla_{{\\bf W}}\\text{log}~\\pi_{{\\bf W}}({\\bf u}|{\\bf x})]"
]

const formulas = [
  "\\nabla_{{\\bf W}} J =  \\mathbb{E}[ R({\\bf u})\\nabla_{{\\bf W}}\\text{log}~\\pi_{{\\bf W}}({\\bf u}|{\\bf x})]",
  " = \\mathbb{E}[ R({\\bf u})\\nabla_{{\\bf W}} \\text{log}\\prod_{k=1}^{K} {\\bf s}_k^{{\\bf u}_k}(1-{\\bf s}_k)^{1-{\\bf u}_k}]",
  "=  \\mathbb{E}[ R({\\bf u})\\nabla_{{\\bf W}} \\sum_{k=1}^{K} \\text{log} [{\\bf s}_k{{\\bf u}_k} + (1-{\\bf s}_k)({1-{\\bf u}_k})]]"
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
      <div className="demo-page">
        <h3>Demo:</h3>

        <p>
          <b>Expected gradient</b>.
          To maximize Eqn.4,  we utilize policy gradient[46], one of the seminal policy search methods[9], to compute the gradients of J. In contrast to typical reinforcement learning methods where policies are sampled from a multinomial distribution[46],  our policies are generated from a K-dimensional Bernoulli distribution. The gradients can be derived similarly as:
        </p>

        <div
          onClick={() => this.props.onQueryChange(formulas[0])}
          ref={(ref) => this.formulas.push(ref)}>
        </div>

        <p>
          <b>Expected gradient</b>.
          To maximize Eqn.4,  we utilize policy gradient[46], one of the seminal policy search methods[9], to compute the gradients of J. In contrast to typical reinforcement learning methods where policies are sampled from a multinomial distribution[46],  our policies are generated from a K-dimensional Bernoulli distribution. The gradients can be derived similarly as:
        </p>

        <div
          onClick={() => this.props.onQueryChange(formulas[1])}
          ref={(ref) => this.formulas.push(ref)}>
        </div>

        <p>
          <b>Expected gradient</b>.
          To maximize Eqn.4,  we utilize policy gradient[46], one of the seminal policy search methods[9], to compute the gradients of J. In contrast to typical reinforcement learning methods where policies are sampled from a multinomial distribution[46],  our policies are generated from a K-dimensional Bernoulli distribution. The gradients can be derived similarly as:
        </p>

        <div
          onClick={() => this.props.onQueryChange(formulas[2])}
          ref={(ref) => this.formulas.push(ref)}>
        </div>

        <p>
          <b>Expected gradient</b>.
          To maximize Eqn.4,  we utilize policy gradient[46], one of the seminal policy search methods[9], to compute the gradients of J. In contrast to typical reinforcement learning methods where policies are sampled from a multinomial distribution[46],  our policies are generated from a K-dimensional Bernoulli distribution. The gradients can be derived similarly as:
        </p>

        <p>
          <b>Expected gradient</b>.
          To maximize Eqn.4,  we utilize policy gradient[46], one of the seminal policy search methods[9], to compute the gradients of J. In contrast to typical reinforcement learning methods where policies are sampled from a multinomial distribution[46],  our policies are generated from a K-dimensional Bernoulli distribution. The gradients can be derived similarly as:
        </p>

        <p>
          <b>Expected gradient</b>.
          To maximize Eqn.4,  we utilize policy gradient[46], one of the seminal policy search methods[9], to compute the gradients of J. In contrast to typical reinforcement learning methods where policies are sampled from a multinomial distribution[46],  our policies are generated from a K-dimensional Bernoulli distribution. The gradients can be derived similarly as:
        </p>

        <p>
          <b>Expected gradient</b>.
          To maximize Eqn.4,  we utilize policy gradient[46], one of the seminal policy search methods[9], to compute the gradients of J. In contrast to typical reinforcement learning methods where policies are sampled from a multinomial distribution[46],  our policies are generated from a K-dimensional Bernoulli distribution. The gradients can be derived similarly as:
        </p>

        <p>
          <b>Expected gradient</b>.
          To maximize Eqn.4,  we utilize policy gradient[46], one of the seminal policy search methods[9], to compute the gradients of J. In contrast to typical reinforcement learning methods where policies are sampled from a multinomial distribution[46],  our policies are generated from a K-dimensional Bernoulli distribution. The gradients can be derived similarly as:
        </p>

      </div>
    )
  }
}
