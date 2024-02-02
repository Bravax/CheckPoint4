import data from "../data.json";

function CarPage() {
  const cars = data.map((car) => ({
    value: car.id,
    label: `${car.brand} ${car.model} (${car.year})`,
    images: car.images || [],
    text: car.text || "Description non disponible",
  }));

  return (
    <section className="fields-of-view">
      {cars.map((car) => (
        <article className="article" key={car.value}>
          <p>{car.label}</p>
          <p>{car.text}</p>
          {car.images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Car ${car.label} ${index + 1}`}
            />
          ))}
        </article>
      ))}
      ;
    </section>
  );
}

export default CarPage;
