/*
  Kaindl featured finishes — the 9 surfaces selected for the Kanaan catalogue.

  Texture images are NOT in the repo yet. KaindlSwatch falls back to a clean
  placeholder card showing the code + name. When real decor scans are added,
  drop them at the `image` path below (public/images/kaindl/...) and they
  appear automatically — no code change needed.

  `hyd` marks the Kaindl "+HYD" surface. It is left false for every finish
  until confirmed per item from the official catalogue — do NOT guess. Flip a
  single finish to `hyd: true` once verified and the +HYD tag renders.
*/
export const KAINDL_FAMILIES = [
  {
    family: 'Solids & Lacquers',
    finishes: [
      {
        code: '1101 SM',
        name: 'White RAL 9010',
        image: '/images/kaindl/kaindl-1101sm-white-ral9010.jpg',
        hyd: false,
      },
      {
        code: '27049',
        name: 'Cashmere',
        image: '/images/kaindl/kaindl-27049-cashmere.jpg',
        hyd: false,
      },
    ],
  },
  {
    family: 'Concrete & Stone',
    finishes: [
      {
        code: '44374',
        name: 'Concrete Opal',
        image: '/images/kaindl/kaindl-44374-concrete-opal.jpg',
        hyd: false,
      },
      {
        code: '4454',
        name: 'Concrete Basic',
        image: '/images/kaindl/kaindl-4454-concrete-basic.jpg',
        hyd: false,
      },
      {
        code: '4453',
        name: 'Concrete Weave',
        image: '/images/kaindl/kaindl-4453-concrete-weave.jpg',
        hyd: false,
      },
    ],
  },
  {
    family: 'Metal & Rust',
    finishes: [
      {
        code: '4399',
        name: 'Rusty Ocean',
        image: '/images/kaindl/kaindl-4399-rusty-ocean.jpg',
        hyd: false,
      },
      {
        code: '4398',
        name: 'Rusty Iron',
        image: '/images/kaindl/kaindl-4398-rusty-iron.jpg',
        hyd: false,
      },
    ],
  },
  {
    family: 'Wood & Oak',
    finishes: [
      {
        code: '5414',
        name: 'Oak Classic',
        image: '/images/kaindl/kaindl-5414-oak-classic.jpg',
        hyd: false,
      },
      {
        code: '34139',
        name: 'Oak Sanremo Sand',
        image: '/images/kaindl/kaindl-34139-oak-sanremo-sand.jpg',
        hyd: false,
      },
    ],
  },
]

// Flat list with family attached — used by the homepage / hero teasers to pick
// a few featured swatches by code.
export const KAINDL_FINISHES = KAINDL_FAMILIES.flatMap((group) =>
  group.finishes.map((finish) => ({ ...finish, family: group.family }))
)

// Helper: pick specific finishes (in order) by code for featured strips.
export function pickFinishes(...codes) {
  return codes
    .map((code) => KAINDL_FINISHES.find((f) => f.code === code))
    .filter(Boolean)
}
