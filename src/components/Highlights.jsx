// src/components/Highlights.jsx
export default function Highlights() {
  return (
    <section id="perque" className="highlights">
      <h2>Why visit Santa Coloma?</h2>
      <div className="highlights-grid">
        <article className="highlight-card">
          <h3>Nature</h3>
          <p>
             Forests, streams and quiet walking paths surrounded by the landscapes of Les Guilleries. 
             From the shade of Sant Salvador Park to routes such as the Rocar Route, Santa Coloma offers 
             a natural environment that invites you to disconnect and enjoy outdoor activities all year round.
          </p>
        </article>
        <article className="highlight-card">
          <h3>Well-being</h3>
          <p>
             Spas and thermal centers where you can relax in mineral-medicinal waters, an essential
              part of the town’s identity. From traditional spa culture to modern wellness spaces,
              Santa Coloma is an ideal destination to slow down, take care of yourself and enjoy
              moments of calm.
          </p>
        </article>
        <article className="highlight-card">
          <h3>Tradition</h3>
          <p>
           Trias biscuits, ratafia and a calendar of popular festivals with a strong local character. 
            The town preserves its cultural heritage through gastronomy, crafts and community events 
            that bring together neighbours and visitors to share authentic experiences.
          </p>
        </article>
      </div>
    </section>
  );
}
