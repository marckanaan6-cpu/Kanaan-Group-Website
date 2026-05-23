/*
  Kaindl Boards Collection 2026 — FULL catalogue data (Catalogue page library).

  Source: Kanaan × Kaindl "Boards Collection 2026" PDF. 63 listings across 8
  categories / 17 subgroups. This is the full browsing library and is SEPARATE
  from the curated homepage set in kaindlFinishes.js (do not merge them).

  Data only — no images cropped/generated yet, and this file is not imported by
  any page yet. Image paths point to the FUTURE convention:
    /images/kaindl/decors/kaindl-<code+surface-slug>-<name-slug>.jpg
  (note: the homepage curated set uses /images/kaindl/... ; the catalogue uses
   the /images/kaindl/decors/ subfolder.)

  Conventions / decisions (approved):
   - Each surface variant is its own row (e.g. 1101 PE and 1101 SM).
   - Surface codes (PE/SM/BS/MN/DP/IR/RV/AE) kept as raw values; meanings TBD.
   - Spelling kept verbatim from the PDF (e.g. "Mahagony", "Nuss", "Zingana").
   - For 5881/2125 the PDF prints the surface after the name; recorded as PE.
   - hyd: nearly all true except the two Creams and Strong Colors (except 2098).
   - notes: free-text for any uncertainty; empty string when none.

  slug + image are derived from code + name so they stay consistent and unique.
*/

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

// Raw rows in catalogue order. slug + image are added by the map below.
const RAW = [
  // 01 — Whites & Creams
  { code: '17005', baseCode: '17005', surface: null, name: 'White Glossy', category: 'Whites & Creams', subgroup: 'Whites', hyd: true, notes: 'HYD printed on its own line in the PDF' },
  { code: '1101 PE', baseCode: '1101', surface: 'PE', name: 'White RAL 9010', category: 'Whites & Creams', subgroup: 'Whites', hyd: true, notes: '' },
  { code: '1101 SM', baseCode: '1101', surface: 'SM', name: 'White RAL 9010', category: 'Whites & Creams', subgroup: 'Whites', hyd: true, notes: 'same decor as 1101 PE, different surface' },
  { code: '1570 BS', baseCode: '1570', surface: 'BS', name: 'Diamond White', category: 'Whites & Creams', subgroup: 'Whites', hyd: true, notes: '' },
  { code: '27049', baseCode: '27049', surface: null, name: 'Cashmere', category: 'Whites & Creams', subgroup: 'Creams', hyd: false, notes: 'homepage curated pick' },
  { code: '27045', baseCode: '27045', surface: null, name: 'Champagne', category: 'Whites & Creams', subgroup: 'Creams', hyd: false, notes: '' },

  // 02 — Greys & Blacks
  { code: '27060 BS', baseCode: '27060', surface: 'BS', name: 'Fog Grey', category: 'Greys & Blacks', subgroup: 'Light Greys', hyd: true, notes: '' },
  { code: '2112', baseCode: '2112', surface: null, name: 'Grey', category: 'Greys & Blacks', subgroup: 'Light Greys', hyd: true, notes: '' },
  { code: '5881 PE', baseCode: '5881', surface: 'PE', name: 'Silver', category: 'Greys & Blacks', subgroup: 'Light Greys', hyd: true, notes: 'surface PE printed after the name in the PDF' },
  { code: '2171 PE', baseCode: '2171', surface: 'PE', name: 'Agate Grey', category: 'Greys & Blacks', subgroup: 'Light Greys', hyd: true, notes: '' },
  { code: '26299', baseCode: '26299', surface: null, name: 'Cobalt Grey', category: 'Greys & Blacks', subgroup: 'Mid & Dark Greys', hyd: true, notes: '' },
  { code: '25722 MN', baseCode: '25722', surface: 'MN', name: 'Storm Grey', category: 'Greys & Blacks', subgroup: 'Mid & Dark Greys', hyd: true, notes: '' },
  { code: '25720 MN', baseCode: '25720', surface: 'MN', name: 'Graphite Blue', category: 'Greys & Blacks', subgroup: 'Mid & Dark Greys', hyd: true, notes: '' },
  { code: '25737 MN', baseCode: '25737', surface: 'MN', name: 'Verde', category: 'Greys & Blacks', subgroup: 'Mid & Dark Greys', hyd: true, notes: '' },
  { code: '2162', baseCode: '2162', surface: null, name: 'Grey Graphite', category: 'Greys & Blacks', subgroup: 'Mid & Dark Greys', hyd: true, notes: '' },
  { code: '2164 PE', baseCode: '2164', surface: 'PE', name: 'Anthracite', category: 'Greys & Blacks', subgroup: 'Mid & Dark Greys', hyd: true, notes: '' },
  { code: '22192', baseCode: '22192', surface: null, name: 'Black Blue', category: 'Greys & Blacks', subgroup: 'Blacks', hyd: true, notes: '' },
  { code: '2190 PE', baseCode: '2190', surface: 'PE', name: 'Black RAL 9004', category: 'Greys & Blacks', subgroup: 'Blacks', hyd: true, notes: 'base 2190 appears in three variants' },
  { code: '2190', baseCode: '2190', surface: null, name: 'Black Glossy', category: 'Greys & Blacks', subgroup: 'Blacks', hyd: true, notes: 'base 2190 appears in three variants' },

  // 03 — Concrete & Stone
  { code: '44374', baseCode: '44374', surface: null, name: 'Concrete Opal', category: 'Concrete & Stone', subgroup: 'Concrete', hyd: true, notes: 'homepage curated pick' },
  { code: '44375', baseCode: '44375', surface: null, name: 'Concrete Pearl', category: 'Concrete & Stone', subgroup: 'Concrete', hyd: true, notes: '' },
  { code: '4454', baseCode: '4454', surface: null, name: 'Concrete Basic', category: 'Concrete & Stone', subgroup: 'Concrete', hyd: true, notes: '' },
  { code: '4453', baseCode: '4453', surface: null, name: 'Concrete Weave', category: 'Concrete & Stone', subgroup: 'Concrete', hyd: true, notes: '' },
  { code: '44405 DP', baseCode: '44405', surface: 'DP', name: 'Concrete Art Slategrey', category: 'Concrete & Stone', subgroup: 'Stone & Marble', hyd: true, notes: '' },
  { code: 'K4892 DP', baseCode: 'K4892', surface: 'DP', name: 'Pietra Grey', category: 'Concrete & Stone', subgroup: 'Stone & Marble', hyd: true, notes: '' },
  { code: '34321', baseCode: '34321', surface: null, name: 'Oxyde', category: 'Concrete & Stone', subgroup: 'Stone & Marble', hyd: true, notes: '' },
  { code: '45274', baseCode: '45274', surface: null, name: 'Corten Steel', category: 'Concrete & Stone', subgroup: 'Oxide & Corten', hyd: true, notes: '' },
  { code: '4398', baseCode: '4398', surface: null, name: 'Rusty Iron', category: 'Concrete & Stone', subgroup: 'Oxide & Corten', hyd: true, notes: 'homepage curated pick' },
  { code: '4399', baseCode: '4399', surface: null, name: 'Rusty Ocean', category: 'Concrete & Stone', subgroup: 'Oxide & Corten', hyd: true, notes: '' },

  // 04 — Light Natural Woods
  { code: '34032', baseCode: '34032', surface: null, name: 'Hemlock Nordique', category: 'Light Natural Woods', subgroup: 'Pale & Nordic', hyd: true, notes: '' },
  { code: 'K2443', baseCode: 'K2443', surface: null, name: 'Abies Clay', category: 'Light Natural Woods', subgroup: 'Pale & Nordic', hyd: true, notes: '' },
  { code: 'K2406', baseCode: 'K2406', surface: null, name: 'Abies Shine', category: 'Light Natural Woods', subgroup: 'Pale & Nordic', hyd: true, notes: '' },
  { code: '37745', baseCode: '37745', surface: null, name: 'Mongori', category: 'Light Natural Woods', subgroup: 'Pale & Nordic', hyd: true, notes: '' },
  { code: '34139', baseCode: '34139', surface: null, name: 'Oak Sanremo Sand', category: 'Light Natural Woods', subgroup: 'Sand & Weathered', hyd: true, notes: '' },
  { code: '5575', baseCode: '5575', surface: null, name: 'Oak Fossil', category: 'Light Natural Woods', subgroup: 'Sand & Weathered', hyd: true, notes: '' },
  { code: '5412', baseCode: '5412', surface: null, name: 'Oak Raw', category: 'Light Natural Woods', subgroup: 'Sand & Weathered', hyd: true, notes: '' },
  { code: '34141', baseCode: '34141', surface: null, name: 'Oak Sanremo Bronze', category: 'Light Natural Woods', subgroup: 'Sand & Weathered', hyd: true, notes: '' },

  // 05 — Mid Natural Woods
  { code: '37307', baseCode: '37307', surface: null, name: 'Oak Natural', category: 'Mid Natural Woods', subgroup: 'Oaks — Natural & Classic', hyd: true, notes: '' },
  { code: '5414', baseCode: '5414', surface: null, name: 'Oak Classic', category: 'Mid Natural Woods', subgroup: 'Oaks — Natural & Classic', hyd: true, notes: 'homepage curated pick' },
  { code: 'K4420 IR', baseCode: 'K4420', surface: 'IR', name: 'Oak Evoke Classic', category: 'Mid Natural Woods', subgroup: 'Oaks — Natural & Classic', hyd: true, notes: '' },
  { code: '37965', baseCode: '37965', surface: null, name: 'Elm', category: 'Mid Natural Woods', subgroup: 'Oaks — Natural & Classic', hyd: true, notes: '' },
  { code: '5574', baseCode: '5574', surface: null, name: 'Oak Evoke Ocean', category: 'Mid Natural Woods', subgroup: 'Warm Oaks', hyd: true, notes: '' },
  { code: 'K5574 IR', baseCode: 'K5574', surface: 'IR', name: 'Oak Evoke Sunset', category: 'Mid Natural Woods', subgroup: 'Warm Oaks', hyd: true, notes: '' },
  { code: '5413', baseCode: '5413', surface: null, name: 'Oak Cognac', category: 'Mid Natural Woods', subgroup: 'Warm Oaks', hyd: true, notes: '' },

  // 06 — Walnuts & Tropical Woods
  { code: '32339', baseCode: '32339', surface: null, name: 'Nuss', category: 'Walnuts & Tropical Woods', subgroup: 'Walnuts & Cherries', hyd: true, notes: '' },
  { code: '37755 BS', baseCode: '37755', surface: 'BS', name: 'Noce Sizilia', category: 'Walnuts & Tropical Woods', subgroup: 'Walnuts & Cherries', hyd: true, notes: '' },
  { code: '37967', baseCode: '37967', surface: null, name: 'Kirch Cherry', category: 'Walnuts & Tropical Woods', subgroup: 'Walnuts & Cherries', hyd: true, notes: '' },
  { code: '4329', baseCode: '4329', surface: null, name: 'Robina', category: 'Walnuts & Tropical Woods', subgroup: 'Walnuts & Cherries', hyd: true, notes: '' },
  { code: '4327', baseCode: '4327', surface: null, name: 'Noce Zarello', category: 'Walnuts & Tropical Woods', subgroup: 'Tropical & Sanremo', hyd: true, notes: '' },
  { code: '37489', baseCode: '37489', surface: null, name: 'Mahagony', category: 'Walnuts & Tropical Woods', subgroup: 'Tropical & Sanremo', hyd: true, notes: 'spelling per PDF' },
  { code: '34138 RV', baseCode: '34138', surface: 'RV', name: 'Oak Sanremo Tobacco', category: 'Walnuts & Tropical Woods', subgroup: 'Tropical & Sanremo', hyd: true, notes: '' },

  // 07 — Dark & Deep Woods
  { code: '37710', baseCode: '37710', surface: null, name: 'Wenge', category: 'Dark & Deep Woods', subgroup: 'Dark Woods', hyd: true, notes: '' },
  { code: '37782', baseCode: '37782', surface: null, name: 'Zingana', category: 'Dark & Deep Woods', subgroup: 'Dark Woods', hyd: true, notes: '' },
  { code: '4946', baseCode: '4946', surface: null, name: 'Hemlock Lava', category: 'Dark & Deep Woods', subgroup: 'Dark Woods', hyd: true, notes: '' },
  { code: '34055', baseCode: '34055', surface: null, name: 'Elm Lava', category: 'Dark & Deep Woods', subgroup: 'Dark Woods', hyd: true, notes: '' },
  { code: '2190 AE', baseCode: '2190', surface: 'AE', name: 'Schwarz', category: 'Dark & Deep Woods', subgroup: 'Dark Woods', hyd: true, notes: 'base 2190 appears in three variants' },

  // 08 — Strong Colors
  { code: '2125 PE', baseCode: '2125', surface: 'PE', name: 'Blue', category: 'Strong Colors', subgroup: 'Cool Accents', hyd: false, notes: 'surface PE printed after the name in the PDF' },
  { code: '25519', baseCode: '25519', surface: null, name: 'Beetle Green', category: 'Strong Colors', subgroup: 'Cool Accents', hyd: false, notes: '' },
  { code: '27190', baseCode: '27190', surface: null, name: 'Mamba Green', category: 'Strong Colors', subgroup: 'Cool Accents', hyd: false, notes: '' },
  { code: '2134', baseCode: '2134', surface: null, name: 'Yellow', category: 'Strong Colors', subgroup: 'Warm Accents', hyd: false, notes: '' },
  { code: '27121', baseCode: '27121', surface: null, name: 'Orange', category: 'Strong Colors', subgroup: 'Warm Accents', hyd: false, notes: '' },
  { code: '27113', baseCode: '27113', surface: null, name: 'Red', category: 'Strong Colors', subgroup: 'Warm Accents', hyd: false, notes: '' },
  { code: '2098 MN', baseCode: '2098', surface: 'MN', name: 'Ceramic Red', category: 'Strong Colors', subgroup: 'Warm Accents', hyd: true, notes: 'only +HYD in Strong Colors' },
]

// Full catalogue with derived slug + future image path on every entry.
export const KAINDL_CATALOGUE = RAW.map((d) => {
  const slug = `${slugify(d.code)}-${slugify(d.name)}`
  return { ...d, slug, image: `/images/kaindl/decors/kaindl-${slug}.jpg` }
})

// Ordered category taxonomy (for the future filter UI).
export const KAINDL_CATEGORIES = [
  { id: '01', name: 'Whites & Creams', subgroups: ['Whites', 'Creams'] },
  { id: '02', name: 'Greys & Blacks', subgroups: ['Light Greys', 'Mid & Dark Greys', 'Blacks'] },
  { id: '03', name: 'Concrete & Stone', subgroups: ['Concrete', 'Stone & Marble', 'Oxide & Corten'] },
  { id: '04', name: 'Light Natural Woods', subgroups: ['Pale & Nordic', 'Sand & Weathered'] },
  { id: '05', name: 'Mid Natural Woods', subgroups: ['Oaks — Natural & Classic', 'Warm Oaks'] },
  { id: '06', name: 'Walnuts & Tropical Woods', subgroups: ['Walnuts & Cherries', 'Tropical & Sanremo'] },
  { id: '07', name: 'Dark & Deep Woods', subgroups: ['Dark Woods'] },
  { id: '08', name: 'Strong Colors', subgroups: ['Cool Accents', 'Warm Accents'] },
]
