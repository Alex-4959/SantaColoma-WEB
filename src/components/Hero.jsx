// src/components/Hero.jsx
import heroVideo from '../assets/video/Video-SantaColomaPromocio.mp4';
import heroImage from '../assets/images/portada-SantaColoma.jpg';


export default function Hero() {
  return (
    <section id="inici" className="hero">
      <div className="hero-media">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="hero-content">
        <h1>Discover Santa Coloma de Farners</h1>
        <p>
          Nature, thermal baths, streams, and tradition in a getaway to the capital of La Selva.
        </p>
        <a href="#planifica" className="btn-primary">
          Plan your getaway
        </a>
      </div>
    </section>
  );
}
