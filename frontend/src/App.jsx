import React from "react";
import { Link } from "react-router-dom";
import Cadillac from "./assets/cadillacD.png";
import roofTop from "./assets/roofTop.svg";
import "./App.scss";

function App() {
  return (
    <main className="home">
      <header className="title">
        <h1>Véhicules d'exception et de légende</h1>
      </header>
      <section className="motor-180">
        <p className="object">
          Ce site est dédié à la fin de ma formation théorique de développeur
          web, web mobile. Il symbolise le commencement d'une nouvelle aventure,
          présentant une sélection minutieuse de voitures anciennes, reflétant{" "}
          <strong>mes choix</strong> personnels, ainsi que{" "}
          <strong>l'histoire </strong>captivante d'une restauration de voiture
          inspirée du travail d'un restaurateur de voitures anciennes.
          <br />
          Cette expérience fascinante débute simultanément avec le début de ma
          nouvelle carrière.
          <br /> Il est à noter que ce site continuera de progresser et de se
          développer au fil du temps.
        </p>
        <img src={Cadillac} alt="vue de face d'une cadillac" />
        <Link to="/ranking">
          <img src={roofTop} alt="Coffre de toit" className="roof-top" />
          <strong className="text-rf">Mes choix</strong>
        </Link>

        <Link to="/history">
          <span className="numberplate">Une histoire</span>
        </Link>
      </section>
    </main>
  );
}

export default App;
