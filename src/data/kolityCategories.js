/*
  Kolity accessory categories — the Kolity-specific hardware range.

  REAL-MEDIA-ONLY policy: this list shows ONLY items we have real photos for, so
  the section never renders placeholder/empty Kolity cards. Drawer systems are
  represented by the mechanism VIDEOS in KolityPartner (hidden drawer system +
  ball-bearing slide) — not by cards here, and drawer images are never reused.

  Currently shipped: two hinge cards (Hydraulic hidden hinges, Closet & cabinet
  hinges). Removed from the visible page until real media exists: Invisible
  hinges, Drawer rollers, Drawer slides, Soft-close drawer systems.

  SCOPE: Kolity = hinges + drawer systems. Door/closet handles, tools, and
  machines are NOT Kolity products — they live in the warm Accessories sections
  (accessoriesSupplies.js), never under the Kolity logo or green.

  To add an item later: drop its photo at public/images/kolity/<file>.jpg and
  add a { name, image } entry here — it appears automatically (AccessoryCard
  falls back to a clean placeholder if an image is ever missing). These are
  product / category photos, never finished Kanaan projects.
*/
export const KOLITY_FAMILIES = [
  {
    family: 'Hinges',
    items: [
      {
        name: 'Hydraulic hidden hinges',
        image: '/images/kolity/hydraulic-hidden-door-hinge.jpg',
      },
      {
        name: 'Closet & cabinet hinges',
        image: '/images/kolity/closet-hinge.jpg',
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
