/*
  Kolity accessory categories — the Kolity-specific hardware range only.

  SCOPE (confirmed): Kolity covers hinges and drawer systems. Door/closet
  handles, measuring tapes, screwdrivers, and general tools are NOT Kolity
  products — they belong to a future, separate "Accessories / Professional
  Supplies" section, not this partner data.

  A third family — "Cabinet mechanisms / furniture fittings" — was intentionally
  left out until Kolity's actual range is confirmed. Do NOT invent it. Add a new
  block here once verified.

  Mirrors the structure of kaindlFinishes.js so the two partner stories stay a
  matched set: families → items, each item with a name and an image path.

  Product images are NOT in the repo yet. AccessoryCard falls back to a clean
  placeholder card showing the item name (state-driven, so no broken-image
  flash). When real product photos are added, drop them at the `image` path
  below (public/images/kolity/...) and they appear automatically — no code
  change needed.

  These are product / category photos, never finished Kanaan projects. Any
  generated "application visual" must stay generic and labelled as such — never
  captioned as a specific real project.
*/
export const KOLITY_FAMILIES = [
  {
    family: 'Hinges',
    items: [
      {
        name: 'Hydraulic hidden hinges',
        image: '/images/kolity/kolity-hydraulic-hidden-hinges.jpg',
      },
      {
        name: 'Invisible hinges',
        image: '/images/kolity/kolity-invisible-hinges.jpg',
      },
      {
        name: 'Closet & cabinet hinges',
        image: '/images/kolity/kolity-closet-cabinet-hinges.jpg',
      },
    ],
  },
  {
    family: 'Drawer systems',
    items: [
      {
        name: 'Drawer rollers',
        image: '/images/kolity/kolity-drawer-rollers.jpg',
      },
      {
        name: 'Drawer slides',
        image: '/images/kolity/kolity-drawer-slides.jpg',
      },
      {
        name: 'Soft-close drawer systems',
        image: '/images/kolity/kolity-soft-close-drawer-systems.jpg',
      },
    ],
  },
]

// Flat list with family attached — used by the hero / homepage teaser to pick
// a few featured items by name.
export const KOLITY_ITEMS = KOLITY_FAMILIES.flatMap((group) =>
  group.items.map((item) => ({ ...item, family: group.family }))
)

// Helper: pick specific items (in order) by name for featured strips.
export function pickCategories(...names) {
  return names
    .map((name) => KOLITY_ITEMS.find((item) => item.name === name))
    .filter(Boolean)
}
