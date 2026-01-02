// src/components/Attractions.jsx
import { attractions } from '../data/attractions';

export default function Attractions() {
  return (
    <section id="attractions" className="attractions">
      <h2>Must-see places</h2>
      <div className="attractions-grid">
        {attractions.map((place) => (
          <article key={place.id} className="attraction-card">
            <img src={place.image} alt={place.name} />
            <div className="attraction-content">
              <h3>{place.name}</h3>
              <span className="badge">{place.category}</span>
              <p>{place.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
