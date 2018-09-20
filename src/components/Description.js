import React, { Component } from "react";

class Description extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <p>{this.props.children}</p>;
  }
}

export default Description;