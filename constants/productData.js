export const ProductList = {
  chairs: {
    vitra_eames: {
      id: 1,
      glbLink: require('../assets/models/vitra_eames_chair.glb'),
      name: 'Vitra Eames',
      desc: 'Stylish and Comfortable icon of modern design, made with high-quality materials.',
      thumbnail: require('../assets/texture/productThumbnail/vitra_eames.png'),
      variation: [
        {
          id: '1001',
          thumbnail: require('../assets/texture/fabric1.jpg'),
          varDesc:
            'A symphony of hues, the colorful chair dances in a kaleidoscope of dreams. Each vibrant shade whispers tales of joy and creativity, inviting you to sit and bask in its rainbow embrace',
          price: 7999,
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
          id: '1002',
          thumbnail: require('../assets/texture/fabric7.jpg'),
          varDesc:
            'Draped in the whisper of elegance, the linen fabric chair speaks the language of nature and serenity. Its soft, earthy texture cradles you in a gentle embrace, weaving tales of timeless beauty and tranquil afternoons.',
          price: 5499,
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
          id: '1003',
          thumbnail: require('../assets/texture/fabric3.jpg'),
          varDesc:
            'Wrapped in the rich embrace of luxury, the leather chair exudes timeless sophistication and strength. Its supple surface tells stories of grandeur and durability, inviting you to sink into its warm, inviting hold.',
          price: 6399,
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
    swing_chair: {
      id: 2,
      glbLink: require('../assets/models/swing_chair.glb'),
      name: 'Swing Chair',
      desc: 'Suspended between earth and sky,A cradle of dreams in the soft embrace of days gentle haze.',
      thumbnail: require('../assets/texture/productThumbnail/swing_chair.png'),
      variation: [
        {
          id: '2001',
          thumbnail: require('../assets/texture/fabric18.jpg'),
          varDesc:
            'Gently swaying in a dance with the breeze, the swing chair cradles dreams in its embrace. Draped with a green pillow adorned with playful sheep, it invites whispers of pastoral tranquility and childhood wonder.',
          price: 9599,
          varData: {
            wood: {
              color: '#ffffff',
              map: require('../assets/texture/wood3.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },
            metal: {
              color: '#090909',
              metalness: 0.595455,
              roughness: 0.331818,
            },
            cushion: {
              color: '#ffffff',
              map: require('../assets/texture/fabric18.jpg'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '2002',
          thumbnail: require('../assets/texture/fabric22.png'),
          varDesc:
            'Resting like a sunbeam, the yellow pillow adorned with a playful pineapple brightens any space with a burst of tropical joy. Its vibrant hue and cheerful design whisper of sun-soaked days and carefree moments. ',
          price: 8299,
          varData: {
            wood: {
              color: '#ffffff',
              map: require('../assets/texture/wood1.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },
            metal_MODERN: {
              color: '#FFDBA1',
              metalness: 0.895455,
              roughness: 0.231818,
            },
            cushion: {
              color: '#ffffff',
              map: require('../assets/texture/fabric22.png'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '2003',
          thumbnail: require('../assets/texture/fabric19.jpg'),
          varDesc:
            'Rich and inviting, the red pillow adorned with a graceful wine motif tells tales of warmth and celebration. Its deep hue evokes the essence of a fine vintage, promising moments of relaxation and indulgence.',
          price: 7899,
          varData: {
            wood: {
              color: '#fffeef',
              map: require('../assets/texture/wood5.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },
            metal_ring: {
              color: '#E2E0E0',
              metalness: 0.895455,
              roughness: 0.131818,
            },
            cushion: {
              color: '#ffffff',
              map: require('../assets/texture/fabric19.jpg'),
              metalness: 0.00001,
              roughness: 0.4,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '2004',
          thumbnail: require('../assets/texture/fabric13.jpg'),
          varDesc:
            'Nestled in verdant tranquility, the green pillow adorned with a stitch print weaves a tale of artisanal charm and natural beauty. Each delicate thread traces a path of handmade artistry, inviting gentle fingertips to explore its textured embrace.',
          price: 8349,
          varData: {
            wood: {
              color: '#fffeef',
              map: require('../assets/texture/wood3.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },
            metal_ring: {
              color: '#090909',
              metalness: 0.895455,
              roughness: 0.131818,
            },
            cushion: {
              color: '#ffffff',
              map: require('../assets/texture/fabric13.jpg'),
              metalness: 0.00001,
              roughness: 0.4,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
      ],
    },
    hanging_chair: {
      id: 3,
      glbLink: require('../assets/models/hanging_chair.glb'),
      name: 'Hanging Chair',
      desc: 'In a garden where whispers of breeze abide,There stands a chair, a haven, by natures side.',
      thumbnail: require('../assets/texture/productThumbnail/hanging_chair.png'),
      variation: [
        {
          id: '3001',
          thumbnail: require('../assets/texture/fabric20.jpg'),
          varDesc:
            'Suspended in tranquility, our hanging chair envelops you in comfort, a peaceful retreat where serenity meets style.',
          price: 6399,
          varData: {
            wood: {
              color: '#ffffff',
              map: require('../assets/texture/wood5.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },
            metal: {
              color: '#292929',
              metalness: 0.0001,
              roughness: 0.129,
            },
            chain: {
              color: '#ffffff',
              metalness: 1.0,
              roughness: 0.0001,
            },
            cushion: {
              color: '#ffffff',
              map: require('../assets/texture/fabric20.jpg'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '3002',
          thumbnail: require('../assets/texture/fabric22.png'),
          varDesc:
            'Amidst the gentle sway, a hanging chair adorned with a yellow cushion invites serenity, blending comfort with sunshines embrace.',
          price: 8799,
          varData: {
            wood: {
              color: '#ffffff',
              map: require('../assets/texture/wood1.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },
            metal: {
              color: '#FFDBA1',
              metalness: 1.0,
              roughness: 0.0001,
            },
            chain: {
              color: '#090909',
              metalness: 0.595455,
              roughness: 0.331818,
            },
            cushion: {
              color: '#ffffff',
              map: require('../assets/texture/fabric22.png'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '3003',
          thumbnail: require('../assets/texture/fabric19.jpg'),
          varDesc:
            'Amidst the gentle sway, a hanging chair with a red cushion, adorned with sketches of wine, invites you to unwind, blending elegance with the allure of leisure.',
          price: 8799,
          varData: {
            wood: {
              color: '#fffeef',
              map: require('../assets/texture/wood3.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },
            metal: {
              color: '#E2E0E0',
              metalness: 1.0,
              roughness: 0.1,
            },
            chain: {
              color: '#090909',
              metalness: 0.595455,
              roughness: 0.331818,
            },
            cushion: {
              color: '#ffffff',
              map: require('../assets/texture/fabric19.jpg'),
              metalness: 0.00001,
              roughness: 0.4,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '3004',
          thumbnail: require('../assets/texture/fabric13.jpg'),
          varDesc:
            'Beneath the swaying boughs, a hanging chair with a green cushion, stitched with care, beckons tranquility, where craftsmanship meets natures gentle embrace.',
          price: 8299,
          varData: {
            wood: {
              color: '#fffeef',
              map: require('../assets/texture/wood2.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },
            metal: {
              color: '#090909',
              metalness: 1.0,
              roughness: 0.0001,
            },
            chain: {
              color: '#D5DBE3',
              metalness: 1.0,
              roughness: 0.0001,
            },
            cushion: {
              color: '#ffffff',
              map: require('../assets/texture/fabric13.jpg'),
              metalness: 0.00001,
              roughness: 0.4,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
      ],
    },
    ring_chair: {
      id: 4,
      glbLink: require('../assets/models/ring_chair.glb'),
      name: 'Ring Chair',
      desc: 'A ring chair, where elegance arcs in serene circles, inviting moments of peaceful reflection.',
      thumbnail: require('../assets/texture/productThumbnail/ring_chair.png'),
      variation: [
        {
          id: '4001',
          thumbnail: require('../assets/texture/fabric10.jpg'),
          varDesc:
            'A circular chair, draped in bold red fabric with flowing lines, embodies a seamless blend of vibrant allure and graceful design.',
          price: 4999,
          varData: {
            legs: {
              color: '#AEAEAE',
              metalness: 1.0,
              roughness: 0.6,
            },
            seat: {
              color: '#ffffff',
              map: require('../assets/texture/fabric10.jpg'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '4002',
          thumbnail: require('../assets/texture/fabric22.png'),
          varDesc:
            'A circular chair adorned in sunny yellow fabric, embellished with playful pineapple drawings, radiates whimsical charm and joyful sophistication.',
          price: 6899,
          varData: {
            legs: {
              color: '#ffffff',
              map: require('../assets/texture/wood2.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },

            seat: {
              color: '#ffffff',
              map: require('../assets/texture/fabric22.png'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '4003',
          thumbnail: require('../assets/texture/fabric19.jpg'),
          varDesc:
            'In the embrace of crimson hues, a circular chair adorned,With wine drawn delicately, its tales of vineyards formed.',
          price: 8799,
          varData: {
            legs: {
              color: '#fffeef',
              map: require('../assets/texture/wood3.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },

            seat: {
              color: '#ffffff',
              map: require('../assets/texture/fabric19.jpg'),
              metalness: 0.00001,
              roughness: 0.4,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '4004',
          thumbnail: require('../assets/texture/fabric13.jpg'),
          varDesc:
            'A circular chair, cloaked in verdant green,Stitched patterns whisper tales unseen.',
          price: 5899,
          varData: {
            legs: {
              color: '#fffeef',
              map: require('../assets/texture/wood2.jpg'),
              metalness: 0.00001,
              roughness: 0.672727,
              repeatX: 1,
              repeatY: 1,
            },

            seat: {
              color: '#ffffff',
              map: require('../assets/texture/fabric13.jpg'),
              metalness: 0.00001,
              roughness: 0.4,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
      ],
    },
    modern_chair: {
      id: 5,
      glbLink: require('../assets/models/modern_chair.glb'),
      name: 'Modern Chair',
      desc: 'Sleek modernity in every curve and line, a chair designed to redefine your space and time.',
      thumbnail: require('../assets/texture/productThumbnail/modern_chair.png'),
      variation: [
        {
          id: '5001',
          thumbnail: require('../assets/texture/fabric22.png'),
          varDesc:
            'A modern chair in yellow fabric, sunlight woven into sleek design sublime.',
          price: 3499,
          varData: {
            Plastic: {
              color: '#191919',
              metalness: 1.0,
              roughness: 0.6,
            },
            Fabric: {
              color: '#ffffff',
              map: require('../assets/texture/fabric22.png'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 8,
              repeatY: 8,
            },
            Wood: {
              color: '#ffffff',
              map: require('../assets/texture/wood1.jpg'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '5002',
          thumbnail: require('../assets/texture/fabric8.jpg'),
          varDesc:
            'A modern chair in linen fabric, where softness meets minimalist allure divine.',
          price: 4399,
          varData: {
            Plastic: {
              color: '#191919',
              metalness: 1.0,
              roughness: 0.6,
            },
            Fabric: {
              color: '#ffffff',
              map: require('../assets/texture/fabric8.jpg'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 8,
              repeatY: 8,
            },
            Wood: {
              color: '#ffffff',
              map: require('../assets/texture/wood2.jpg'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '5003',
          thumbnail: require('../assets/texture/fabric14.jpg'),
          varDesc:
            'A modern chair in checkered fabric, where pattern and style harmonize in timeless flair.',
          price: 4899,
          varData: {
            Plastic: {
              color: '#643500',
              metalness: 0.001,
              roughness: 0.6,
            },
            Fabric: {
              color: '#ffffff',
              map: require('../assets/texture/fabric14.jpg'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 8,
              repeatY: 8,
            },
            Wood: {
              color: '#ffffff',
              map: require('../assets/texture/wood3.jpg'),
              metalness: 0.00001,
              roughness: 0.825,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
      ],
    },
  },
  sofa: {
    single_seater: {
      id: 6,
      name: 'Single Seater ',
      glbLink: require('../assets/models/single_seater.glb'),
      desc: 'A single seater sofa, a sanctuary of solitude where comfort and elegance intertwine.',
      thumbnail: require('../assets/texture/productThumbnail/single_seater.png'),
      variation: [
        {
          id: '6001',
          thumbnail: require('../assets/texture/fabric15.jpg'),
          varDesc:
            'A single seater sofa, wrapped in verdant green, whispers of tranquility in its graceful design.',
          price: 12599,
          varData: {
            seat_cushion: {
              color: '#ffffff',
              map: require('../assets/texture/fabric15.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
            sofa: {
              color: '#ffffff',
              map: require('../assets/texture/fabric1.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '6002',
          thumbnail: require('../assets/texture/fabric10.jpg'),
          varDesc:
            'A single seater sofa, adorned in bold red lines, speaks of passion and sophistication in its elegant design.',
          price: 11899,
          varData: {
            seat_cushion: {
              color: '#ffffff',
              map: require('../assets/texture/fabric10.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
            sofa: {
              color: '#ffffff',
              map: require('../assets/texture/fabric5.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '6003',
          thumbnail: require('../assets/texture/fabric14.jpg'),
          varDesc:
            'A single seater sofa, dressed in checkered fabric, blends timeless charm with modern grace, where every patterned square tells a story of comfort and style.',
          price: 15999,
          varData: {
            seat_cushion: {
              color: '#ffffff',
              map: require('../assets/texture/fabric14.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
            sofa: {
              color: '#ffffff',
              map: require('../assets/texture/fabric13.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '6004',
          thumbnail: require('../assets/texture/fabric22.png'),
          varDesc:
            'A single seater sofa, adorned in yellow with pineapples drawn, radiates whimsy and joy, a sunny spot of playful delight in any room.',
          price: 13499,
          varData: {
            seat_cushion: {
              color: '#ffffff',
              map: require('../assets/texture/fabric22.png'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
            sofa: {
              color: '#ffffff',
              map: require('../assets/texture/fabric20.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
      ],
    },
    three_seater: {
      id: 7,
      name: 'Three Seater ',
      glbLink: require('../assets/models/three_seater.glb'),
      desc: 'A two-seater sofa, where comfort blooms in spacious embrace, inviting shared moments beneath a canopy of grace.',
      thumbnail: require('../assets/texture/productThumbnail/three_seater.png'),
      variation: [
        {
          id: '7001',
          thumbnail: require('../assets/texture/fabric5.jpg'),
          varDesc:
            'A two-seater sofa, draped in tranquil grey, whispers of comfort in its understated elegance, a haven for intimate moments in muted hue.',
          price: 14899,
          varData: {
            legs: {
              color: '#ffffff',
              map: require('../assets/texture/wood1.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
            sofa_inner: {
              color: '#ffffff',
              map: require('../assets/texture/fabric5.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
            sofa_outer: {
              color: '#ffffff',
              map: require('../assets/texture/fabric8.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 8,
              repeatY: 8,
            },
          },
        },
        {
          id: '7002',
          thumbnail: require('../assets/texture/fabric14.jpg'),
          varDesc:
            'A two-seater sofa, checkered fabric woven with timeless grace, inviting comfort in every embrace.',
          price: 18299,
          varData: {
            legs: {
              color: '#ffffff',
              map: require('../assets/texture/wood1.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
            sofa_inner: {
              color: '#ffffff',
              map: require('../assets/texture/fabric14.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 10,
              repeatY: 10,
            },
            sofa_outer: {
              color: '#ffffff',
              map: require('../assets/texture/fabric4.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 8,
              repeatY: 8,
            },
          },
        },
        {
          id: '7003',
          name: 'Oak',
          thumbnail: require('../assets/texture/fabric22.png'),
          varDesc:
            'A two-seater sofa, draped in sunny yellow fabric, invites warmth and cheer into any space.',
          price: 22499,
          varData: {
            legs: {
              color: '#ffffff',
              map: require('../assets/texture/wood5.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
            sofa_inner: {
              color: '#ffffff',
              map: require('../assets/texture/fabric22.png'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 10,
              repeatY: 10,
            },
            sofa_outer: {
              color: '#ffffff',
              map: require('../assets/texture/fabric7.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 10,
              repeatY: 10,
            },
          },
        },
        {
          id: '7004',
          thumbnail: require('../assets/texture/fabric10.jpg'),
          varDesc:
            'A two-seater sofa, adorned in bold red with sleek lines, embodies passion and sophistication in every curve.',
          price: 19399,
          varData: {
            legs: {
              color: '#ffffff',
              map: require('../assets/texture/wood3.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 1,
              repeatY: 1,
            },
            sofa_inner: {
              color: '#ffffff',
              map: require('../assets/texture/fabric10.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 8,
              repeatY: 8,
            },
            sofa_outer: {
              color: '#ffffff',
              map: require('../assets/texture/fabric9.jpg'),
              metalness: 0.132,
              roughness: 0.722727,
              repeatX: 8,
              repeatY: 8,
            },
          },
        },
      ],
    },
  },
  table: {
    round_table: {
      id: 8,
      name: 'Round Table',
      glbLink: require('../assets/models/round_table.glb'),
      desc: 'A wooden round table, where craftsmanship circles in timeless unity.',
      thumbnail: require('../assets/texture/productThumbnail/round_table.png'),
      variation: [
        {
          id: '8001',
          thumbnail: require('../assets/texture/wood1.jpg'),
          varDesc:
            'A dark wood round table, where elegance and earthiness meld in harmonious unity.',
          price: 7999,
          varData: {
            round_table: {
              color: '#ffffff',
              map: require('../assets/texture/wood1.jpg'),
              metalness: 0.055,
              roughness: 0.354545,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '8002',
          thumbnail: require('../assets/texture/wood5.jpg'),
          varDesc:
            'In the heart of gatherings, a round table stands bold,Dark wood whispers tales of ages untold.',
          price: 6899,
          varData: {
            round_table: {
              color: '#ffffff',
              map: require('../assets/texture/wood5.jpg'),
              metalness: 0.0001,
              roughness: 0.1,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
        {
          id: '8003',
          thumbnail: require('../assets/texture/wood3.jpg'),
          varDesc:
            'In the circle of warmth, a table of yellow wood gleams,Sunlight captured in grain, weaving dreams.',
          price: 5699,
          varData: {
            round_table: {
              color: '#ffffff',
              map: require('../assets/texture/wood3.jpg'),
              metalness: 0.055,
              roughness: 0.354545,
              repeatX: 1,
              repeatY: 1,
            },
          },
        },
      ],
    },
  },
}
