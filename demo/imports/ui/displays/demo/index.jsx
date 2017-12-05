import React, { Component } from 'react'

const formulas = [
"\\nabla_{{\\bf W}}", //0
"J = ",
" \\mathbb{E}", //2
"[ R({\\bf u})\\nabla_{{\\bf W}}\\text{log}~\\pi_{{\\bf W}}({\\bf u}|{\\bf x})]" ,

"\\pi_{\\bf W} ({\\bf u}|{\\bf x}) = \\prod_{k=1}^{K} {\\bf s}_k^{{\\bf u}_k}(1-{\\bf s}_k)^{1-{\\bf u}_k}", //4
"{\\bf s}  = ",
"f_{pn}", //6
"({\\bf x}; {\\bf W})",
"{\\bf s}^k \\in [0, 1]",
"f_{pn}",
"J = ", //10
"\\mathbb{E}_{{\\bf u}\\thicksim {\\bf \\pi}_{\\bf W}}", //11
"[ R({\\bf u})]",  //12

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
      console.log(this.tex.renderToString(formulas[idx]))
    })
  }

  render() {
    return (
      <div className="demo-page">
        <h3>Demo:</h3>

        <h4>Training the policy</h4>
        <p>
          <b>Expected gradient</b>.
          To maximize Eqn.4,  we utilize policy gradient[46], one of the seminal policy search methods[9], to compute the gradients of J. In contrast to typical reinforcement learning methods where policies are sampled from a multinomial distribution[46],  our policies are generated from a K-dimensional Bernoulli distribution. The gradients can be derived similarly as:
        </p>

        <div>
          <span
            className="highlight-notation"
            onClick={() => this.props.onQueryChange(formulas[0])}
            ref={(ref) => this.formulas.push(ref)}>
          </span>

          <span
            ref={(ref) => this.formulas.push(ref)}>
          </span>

          <span
            className="highlight-notation"
            onClick={() => this.props.onQueryChange(formulas[2])}
            ref={(ref) => this.formulas.push(ref)}>
          </span>

          <span
              ref={(ref) => this.formulas.push(ref)}>
          </span>
        </div>

        <p>
          <b>Curriculum learning</b>.
          Policy gradient methods are typically extremely sensitive to their initialization. Indeed, we found that starting from a randomly initialized policy and optimizing for both accuracy and block usage is not effective, due the extremely large dimension of the search space, which scales exponentially with the total number of blocks (there are 2 K possible on/off configurations of the blocks). Note that in contrast with applications such as image captioning where ground-truth action sequences (captions) can be used to train an initial policy [39], here no such “expert examples” are available, other than the standard single execution path that executes all blocks.
        </p>

        <h4>Policy Network for Dynamic Inference Paths</h4>


        <p>
          Formally, given an image <b>x</b> and a pretrained ResNet with K residual blocks, we define a policy of block-dropping behavior as a K-dimensional Bernoulli distribution:
        </p>

        <div
          className="highlight-notation"
          onClick={() => this.props.onQueryChange(formulas[4])}
          ref={(ref) => this.formulas.push(ref)}>

        </div>

        <div>
          <span
            ref={(ref) => this.formulas.push(ref)}>
          </span>

          <span
            className="highlight-notation"
            onClick={() => this.props.onQueryChange(formulas[6])}
            ref={(ref) => this.formulas.push(ref)}>
          </span>

          <span
            ref={(ref) => this.formulas.push(ref)}>
          </span>
        </div>

        <p>
            We choose the architecture such that the cost of running it is negligible compared to ResNet, i.e, so that policy execution overhead remains low. The k-th entry of the vector, <span ref={(ref) => this.formulas.push(ref)}/>, represents the likelihood of its corresponding residual block in the original ResNet being dropped. Here, <span ref={(ref) => this.formulas.push(ref)}/>  denotes the policy network parameterized by weights W and s is the output of the network after the function.
        </p>

        <p>
           Finally, to learn the optimal parameters of the policy network, we maximize the following expected reward:
        </p>

        <div>
          <span
            className="highlight-notation" style = {{marginRight: 0.5 + 'em'}}
            onClick={() => this.props.onQueryChange(formulas[10])}
            ref={(ref) => this.formulas.push(ref)}>
          </span>

          <span
            className="highlight-notation"
            onClick={() => this.props.onQueryChange(formulas[11])}
            ref={(ref) => this.formulas.push(ref)}>
          </span>

          <span
            className="highlight-notation"
            onClick={() => this.props.onQueryChange(formulas[12])}
            ref={(ref) => this.formulas.push(ref)}>
          </span>
        </div>

        <p>
          In summary, our model works as follows: f is used to decide which blocks of the ResNet to keep conditioned on the input image, a prediction is generated by running a forward pass with the ResNet using only these blocks, and a reward is observed based on correctness and efficiency.
        </p>

      </div>
    )
  }
}
