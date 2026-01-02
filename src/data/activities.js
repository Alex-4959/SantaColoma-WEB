// src/data/activities.js

import parcImage from '../assets/images/parc-SantSalvador2.jpg';
import castellImage from '../assets/images/castell-farners2.jpg';
import magmaImage from '../assets/images/magma-centre-ludic2.jpg';
import triasImage from '../assets/images/museu-trias.jpg';
import rocarImage from '../assets/images/ruta-rocar.jpg';
import centreImage from '../assets/images/centre-historic2.jpg';

export const activities = [
  {
    id: 'sant-salvador',
    name: 'Walk through Sant Salvador Park and the stream',
    type: 'Nature',
    durationHours: 2,
    difficulty: 'Easy',
    suitableFor: ['Families', 'Couples', 'Leisure walkers'],
    area: 'Urban natural surroundings',
    image: parcImage,
    description:
      'Route among plane trees, with a children’s play area and access to the stream.',
  },
  {
    id: 'castell-farners',
    name: 'Hike to Farners Castle and Hermitage',
    type: 'Excursion',
    durationHours: 3,
    difficulty: 'Moderate',
    suitableFor: ['Hikers', 'Nature lovers', 'Photographers'],
    area: 'Natural forest area',
    image: castellImage,
    description:
      'Walking route up to the castle and hermitage, with panoramic views of Santa Coloma.',
  },
  {
    id: 'termes-orion',
    name: 'Thermal circuit at Termes Orion / Magma',
    type: 'Well-being',
    durationHours: 3,
    difficulty: 'Very easy',
    suitableFor: ['Adults', 'Couples', 'Relaxation seekers'],
    area: 'Spa and wellness facilities',
    image: magmaImage,
    description:
      'Thermal waters and spa in a peaceful environment, ideal for disconnecting.',
  },
  {
    id: 'museu-trias',
    name: 'Visit to the Trias Biscuit Museum',
    type: 'Gastronomy',
    durationHours: 1.5,
    difficulty: 'Easy',
    suitableFor: ['Families', 'Cultural visitors', 'Food lovers'],
    area: 'Town centre',
    image: triasImage,
    description:
      'Discover the history of Trias biscuits and enjoy a small tasting.',
  },
  {
    id: 'ruta-rocar',
    name: 'Rocar Route',
    type: 'Hiking',
    durationHours: 2.5,
    difficulty: 'Moderate',
    suitableFor: ['Hikers', 'Active visitors', 'Nature lovers'],
    area: 'Natural rocky landscape',
    image: rocarImage,
    description:
      'Circular itinerary through rocky formations and springs, starting from the Sant Salvador area.',
  },
  {
    id: 'centre-historic',
    name: 'Walk through the historic centre and church',
    type: 'Culture',
    durationHours: 1.5,
    difficulty: 'Easy',
    suitableFor: ['Families', 'Cultural travellers', 'Leisure visitors'],
    area: 'Historic town centre',
    image: centreImage,
    description:
      'Arcaded streets, main square and parish church with its characteristic bell tower.',
  },
];
