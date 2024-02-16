import React from "react";
import { Link } from "react-router-dom";
import Cadillac from "./assets/cadillacD.png";
import roofTop from "./assets/roofTop.svg";
import "./App.scss";

function App() {
  return (
    <main>
      <section className="title">
        <h1>Véhicules d'exception et de légende</h1>
      </section>
      <section className="motor-180">
        <img src={Cadillac} alt="vue de face d'une cadillac" />
        <Link to="/ranking">
          <img src={roofTop} alt="Coffre de toit" className="roof-top" />
          <strong className="text-rf">Un classement</strong>
        </Link>

        <Link to="/history">
          <span className="numberplate">Une histoire</span>
        </Link>
      </section>
    </main>
  );
}

export default App;
