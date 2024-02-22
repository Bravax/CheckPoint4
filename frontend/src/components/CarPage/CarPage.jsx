import React, { useEffect, useState } from "react";

function CarPage() {
  const [cars, setCars] = useState([]);
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3310/api/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données", error)
      );
  }, []);

  const currentCar = cars[currentCarIndex];

  return (
    <section className="fields-of-view">
      {currentCar && (
        <article className="car-details">
          <h2>
            {currentCar.brand} {currentCar.model} ({currentCar.year})
          </h2>
          <p className="info-car">{currentCar.text}</p>
        </article>
      )}

      <article className="car-pictures">
        {currentCar && currentCar.pictures && (
          <img src={currentCar.pictures} alt={`Car ${currentCar.id}`} />
        )}
        <section className="navigation-buttons">
          <button
            type="button"
            className="previus"
            onClick={() =>
              setCurrentCarIndex((prevIndex) => Math.max(prevIndex - 1, 0))
            }
          >
            Précédent
          </button>
          <button
            type="button"
            className="following"
            onClick={() =>
              setCurrentCarIndex((prevIndex) =>
                Math.min(prevIndex + 1, cars.length - 1)
              )
            }
          >
            Suivant
          </button>
        </section>
      </article>
    </section>
  );
}

export default CarPage;
