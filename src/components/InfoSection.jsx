// src/components/InfoSection.jsx
export default function InfoSection() {
  return (
    <section id="info" className="info-section">
      <h2>Practical information</h2>
      <div className="info-grid">
        <div>
          <h3>How to get there</h3>
          <p>
            Santa Coloma de Farners is located in the La Selva region, near Girona. 
            Accessible by road (C-63, AP-7) and by bus services from Girona and other towns.
          </p>
        </div>
        <div>
          <h3>When to visit</h3>
          <p>
            Spring and autumn are ideal for hiking and outdoor activities. In summer, the park and the stream are perfect for relaxing. 
            In autumn, the Ratafia Festival and the town’s main festival stand out.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            Santa Coloma de Farners Tourist Office<br />
            Phone: 972 84 09 77<br />
            Email: <a href="mailto:turisme@scf.cat">info@turismesantacoloma.cat</a> 
          </p>
        </div>
      </div>
    </section>
  );
}
