import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div className="menu-component">
        <button
          type="button"
          className="btn btn-light btn-sm dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Mode
        </button>
        <div className="dropdown-menu">
          <a
            className="dropdown-item"
            onClick={() => this.props.onTypeChange("demo")}>
            Demo
          </a>
          <a
            className="dropdown-item"
            onClick={() => this.props.onTypeChange("pdf")}>
            PDF
          </a>
        </div>
      </div>
    )
  }
}
