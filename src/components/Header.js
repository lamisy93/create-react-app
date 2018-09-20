import React, { Component } from "react";
import '../styles/Header.css';
import Logo from '../components/Logo';


class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <header>
        <Logo src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Allocin%C3%A9_Logo.svg/800px-Allocin%C3%A9_Logo.svg.png"></Logo>    
      </header>
    );
  }
}

export default Header;
