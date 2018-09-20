import React, { Component, Fragment } from "react";
import "./App.css";
import Button from "./components/Button";
import Description from "./components/Description";
import Header from "./components/Header";
import Item from "./components/Item";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <Header />
          <Title>2001 : L'Odyssé de l'espace</Title>
        </div>
        <div className="cover">
          <Main />
        </div>
        <div className="item">
          <Item>
            <span className="it">Date de reprise </span>
            <span className="label">7 mars 2001</span>
          </Item>
        </div>
        <div className="button">
          <Button>Bande-annonce</Button>
          <Button>Séances (2)</Button>
          <Button>Ce film en VOD</Button>
        </div>
        <div className="texte">
          <Subtitle>SYNOPSIS ET DETAILS</Subtitle>
          <Description>
            A l'aube de l'Humanité, dans le désert africain, une tribu de
            primates subit les assauts répétés d'une bande rivale, qui lui
            dispute un point d'eau. La découverte d'un monolithe noir inspire au
            chef des singes assiégés un geste inédit et décisif. Brandissant un
            os, il passe à l'attaque et massacre ses adversaires. Le premier
            instrument est né. En 2001, quatre millions d'années plus tard, un
            vaisseau spatial évolue en orbite lunaire au rythme langoureux du
            "Beau Danube Bleu". A son bord, le Dr. Heywood Floyd enquête
            secrètement sur la découverte d'un monolithe noir qui émet
            d'étranges signaux vers Jupiter. Dix-huit mois plus tard, les
            astronautes David Bowman et Frank Poole font route vers Jupiter à
            bord du Discovery. Les deux hommes vaquent sereinement à leurs
            tâches quotidiennes sous le contrôle de HAL 9000, un ordinateur
            exceptionnel doué d'intelligence et de parole. Cependant, HAL, sans
            doute plus humain que ses maîtres, commence à donner des signes
            d'inquiétude : à quoi rime cette mission et que risque-t-on de
            découvrir sur Jupiter ?
          </Description>
        </div>
      </Fragment>
    );
  }
}

export default App;
