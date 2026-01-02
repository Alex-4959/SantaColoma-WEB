// src/components/Gallery.jsx
import parcImage from '../assets/images/parc-SantSalvador.jpg';
import pobleImage from '../assets/images/portada-SantaColoma.jpg';
import museuImage from '../assets/images/museu-trias.jpg';
import esglesiaImage from '../assets/images/esglesia-SantaColoma.jpg';

export default function Gallery() {
  const items = [
    {
      src: parcImage,
      alt: 'Sant Salvador Park and riverside area',
      caption: 'Edited image of Sant Salvador Park, highlighting the trees and the riverside area.',
    },
    {
      src: pobleImage,
      alt: 'View of Santa Coloma de Farners and its surroundings',
      caption: 'Panoramic view of Santa Coloma de Farners, with the church tower and the surrounding green hills.',
    },
    {
      src: museuImage,
      alt: 'Trias Biscuit Museum exhibition room',
      caption: 'Exhibition area of the Trias Biscuit Museum, showcasing the history and traditional production of the local biscuit brand.',
    },
    {
      src: esglesiaImage,
      alt: 'Historic centre and main church square',
      caption: 'Streets and main square of the historic centre of Santa Coloma, with the church as a landmark.',
    },
  ];

  return (
    <section id="galeria" className="gallery">
      <h2>Image gallery</h2>
      <div className="gallery-grid">
        {items.map((item) => (
          <figure key={item.alt} className="gallery-item">
            <img src={item.src} alt={item.alt} />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
