import React from "react";
import CarPage from "../../components/CarPage/CarPage";
import "../../App.scss";
import "./Ranking.scss";

function Ranking() {
  return (
    <main className="home">
      <header className="title">
        <h1>Véhicules d'exception et de légende</h1>
      </header>
      <section className="motor-180">
        <CarPage />
      </section>
    </main>
  );
}

export default Ranking;
