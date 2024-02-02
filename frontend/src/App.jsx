import React from "react";
import { Link } from "react-router-dom";
import Cadillac from "./assets/cadillacD.png";
import roofTop from "./assets/roofTop.svg";
import "./App.scss";

function App() {
  const handleFirstClick = () => {};
  // const handleSecondClick = () => {};

  return (
    <main>
      <section className="title">
        <h1>Véhicules d'exception et de légende</h1>
      </section>
      <section className="motor-180">
        <img src={Cadillac} alt="vue de face d'une cadillac" />
        <Link to="/ranking" onClick={handleFirstClick}>
          <img src={roofTop} alt="Coffre de toit" className="roof-top" />
          <b className="text-rf">Un classement</b>
        </Link>
        <Link to="/history">
          <h5
            className="numberplate"
            // onClick={handleSecondClick}
          >
            Une histoire
          </h5>
        </Link>
      </section>
    </main>
  );
}

export default App;
