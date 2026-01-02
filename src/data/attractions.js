// src/data/attractions.js
import parcImage from '../assets/images/parc-SantSalvador.jpg';
import castellImage from '../assets/images/castell-farners.jpg';
import magmaImage from '../assets/images/magma-centre-ludic.jpg';
import centreImage from '../assets/images/centre-historic.jpg';

export const attractions = [
  {
    id: 'parc-sant-salvador',
    name: 'Sant Salvador Park',
    category: 'Nature',
    image: parcImage,
    description:
      'Large green area next to the stream, with the shade of plane trees, peaceful paths, and rest areas that invite you to walk and disconnect. The park is a much-loved meeting place for local residents and an ideal spot to enjoy nature with the family, with play areas, open spaces, and the starting point for several routes around the area.',
  },
  {
    id: 'castell-farners',
    name: 'Castle and Hermitage of Farners',
    category: 'Landscape',
    image: castellImage,
    description:
      'Medieval fortress located on a hill surrounded by forest, accessible via a popular walking route among locals and visitors. The castle and the hermitage offer a privileged viewpoint over Santa Coloma and the La Selva region, ideal for enjoying the landscape and the tranquillity of its natural surroundings.',
  },
  {
    id: 'magma-centre-termal',
    name: 'Magma Thermal Leisure Centre',
    category: 'Well-being',
    image: magmaImage,
    description:
      'A modern thermal space with water circuits, jacuzzis, bubble beds, and relaxation areas. An ideal place to unwind and enjoy the mineral-medicinal waters of Santa Coloma de Farners.',
  },

  {
    id: 'centre-historic',
    name: 'Historic centre',
    category: 'Culture',
    image: centreImage,
    description:
      'A walk through the old town with cobbled streets, traditional houses, and lively squares full of local life. The historic centre preserves the essence of the town, with local shops, heritage buildings, and quiet corners where you can enjoy the atmosphere of Santa Coloma.',
  },
];
