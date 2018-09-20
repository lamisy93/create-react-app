import React, { Component } from "react";
import "../styles/Button.css"

class Button extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <button>{this.props.children}</button>;
  }
}

export default Button;