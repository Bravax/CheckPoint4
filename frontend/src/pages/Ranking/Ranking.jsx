import React from "react";
import CarPage from "../../components/CarPage/CarPage";
import "./Ranking.scss";

function Ranking() {
  return (
    <main>
      <section className="title">
        <h1>Véhicules d'exception et de légende</h1>
      </section>
      <section className="motor-180">
        <CarPage />
      </section>
    </main>
  );
}

export default Ranking;
