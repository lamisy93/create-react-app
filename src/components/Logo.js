import React, { Component } from "react";

class Logo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <img alt="" src={this.props.src} />;
  }
}

export default Logo;
