import React, { Component } from "react";
import '../styles/Header.css';
import Cover from './Cover';


class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <Cover url="http://images.affiches-et-posters.com//albums/3/3990/affiche-film-l-odyssee-l-espace-2001-1807.jpg"></Cover>
      </div>
    );
  }
}

export default Main;
