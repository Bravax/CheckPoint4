import React from "react";
import CarPage from "../../components/CarPage/CarPage";
import "./Ranking.scss";

function Ranking() {
  return (
    <main>
      <h1 className="title">Véhicules d'exception et de légende</h1>
      <section className="motor-180">
        <CarPage />
      </section>
    </main>
  );
}

export default Ranking;
