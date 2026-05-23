/*
  Non-Kolity accessories & professional supplies — Kanaan's own range.

  These are NOT Kolity products and must never appear under the Kolity logo or
  the Kolity green accent. Kolity (hinges + drawer systems) lives in its own
  partner data file (kolityCategories.js).

  Each group maps to one section on the Accessories page (Handles, Tools, Saws),
  mirroring the structure of kolityCategories.js: family → items, each item with
  a name and image path.

  Images are the real Antelias branch photos under
  public/images/accessories/antelias/ (.png). Item names describe what each
  photo honestly shows — categories without a real photo were removed rather
  than left as empty placeholders (no measuring-tape / machine photos yet).
  AccessoryCard still falls back to a clean labelled placeholder if an image is
  ever missing. These are product / category photos, never finished projects.
*/
const BASE = '/images/accessories/antelias'

export const ACCESSORY_FAMILIES = [
  {
    family: 'Handles & finishing details',
    items: [
      {
        name: 'Door handles',
        image: `${BASE}/antelias-handle-display-1.png`,
      },
      {
        name: 'Closet & cabinet handles',
        image: `${BASE}/antelias-handle-display-2.png`,
      },
    ],
  },
  {
    family: 'Tools & professional supplies',
    items: [
      {
        name: 'Hand tools & supplies',
        image: `${BASE}/antelias-tool-wall-1.png`,
      },
      {
        name: 'Screwdrivers',
        image: `${BASE}/antelias-screwdriver-display.png`,
      },
      {
        name: 'Scrapers & finishing',
        image: `${BASE}/antelias-scraper-display.png`,
      },
    ],
  },
  {
    family: 'Saws & cutting',
    // antelias-bosch-saw-closeup.png is saved but intentionally not shown here
    // (it repeats the saw already in the "Saws" card) — keep for a future
    // detail/gallery section.
    items: [
      {
        name: 'Saws',
        image: `${BASE}/antelias-saw-display.png`,
      },
      {
        name: 'Hand saws',
        image: `${BASE}/antelias-hand-saw-display.png`,
      },
    ],
  },
]

// Flat list with family attached — for any featured strip that needs to pick
// a few items across groups.
export const ACCESSORY_ITEMS = ACCESSORY_FAMILIES.flatMap((group) =>
  group.items.map((item) => ({ ...item, family: group.family })),
)

// Helper: pick specific items (in order) by name.
export function pickAccessories(...names) {
  return names
    .map((name) => ACCESSORY_ITEMS.find((item) => item.name === name))
    .filter(Boolean)
}
