import React, { Component } from "react";

class Subtitle extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <h3>{this.props.children}</h3>;
  }
}

export default Subtitle;