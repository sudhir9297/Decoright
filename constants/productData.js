export const ProductList = {
  chairs: {
    vitra_eames: {
      id: 1,
      name: 'Vitra Eames',
      desc: 'A modern take on tradition',
      thumbnail: require('../assets/texture/productThumbnail/vitra_eames.png'),
      variation: [
        {
          id: '001',
          name: 'One',
          thumbnail: require('../assets/texture/fabric1.jpg'),
          varDesc: 'One Variation',
          price: 2000,
          varData: {
            legs: {
              color: '#ffffff',
              map: require('../assets/texture/wood1.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },
            metals: {
              color: '#090909',
              metalness: 0.595455,
              roughness: 0.331818,
            },
            seat: {
              color: '#ffffff',
              map: require('../assets/texture/fabric1.jpg'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '002',
          name: 'Two',
          thumbnail: require('../assets/texture/fabric7.jpg'),
          varDesc: 'Two Variation',
          price: 4000,
          varData: {
            legs: {
              color: '#ffffff',
              map: require('../assets/texture/wood2.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },
            metals: {
              color: '#090909',
              metalness: 0.595455,
              roughness: 0.331818,
            },
            seat: {
              color: '#ffffff',
              map: require('../assets/texture/fabric7.jpg'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '003',
          name: 'Three',
          thumbnail: require('../assets/texture/fabric18.jpg'),
          varDesc: 'Three Variation',
          price: 3000,
          varData: {
            legs: {
              color: '#fffeef',
              map: require('../assets/texture/fabric3.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },
            metals: {
              color: '#090909',
              metalness: 0.595455,
              roughness: 0.331818,
            },
            seat: {
              color: '#ffffff',
              map: require('../assets/texture/fabric3.jpg'),
              metalness: 0.00001,
              roughness: 0.4,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
      ],
    },
  },
  sofa: {},
  table: {},
}
