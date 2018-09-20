import React, { Component } from "react";
import '../styles/Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <span>{this.props.children}</span>;
  }
}

export default Item;