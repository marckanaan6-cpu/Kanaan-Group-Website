/*
  Non-Kolity accessories & professional supplies — Kanaan's own range.

  These are NOT Kolity products and must never appear under the Kolity logo or
  the Kolity green accent. Kolity (hinges + drawer systems) lives in its own
  partner data file (kolityCategories.js).

  Item names here are NEUTRAL PLACEHOLDERS so the page reads as intended before
  the real catalogue arrives. Replace them with the confirmed product list when
  the user provides it — especially "Small machines & equipment", where the
  exact machines are not yet confirmed (do NOT invent specific models or claims).

  Each group maps to one section on the Accessories page. Mirrors the structure
  of kolityCategories.js: family → items, each item with a name and image path.

  Product images are NOT in the repo yet. AccessoryCard falls back to a clean
  placeholder card showing the item name (state-driven, no broken-image flash).
  Drop real photos at the `image` path below (public/images/accessories/...) and
  they appear automatically — no code change needed. These are product /
  category photos, never finished Kanaan projects.
*/
export const ACCESSORY_FAMILIES = [
  {
    family: 'Handles & finishing details',
    items: [
      {
        name: 'Door handles',
        image: '/images/accessories/accessory-door-handles.jpg',
      },
      {
        name: 'Furniture & cabinet handles',
        image: '/images/accessories/accessory-furniture-cabinet-handles.jpg',
      },
      {
        name: 'Finishing accessories',
        image: '/images/accessories/accessory-finishing-accessories.jpg',
      },
    ],
  },
  {
    family: 'Tools & professional supplies',
    items: [
      {
        name: 'Measuring tapes',
        image: '/images/accessories/accessory-measuring-tapes.jpg',
      },
      {
        name: 'Screwdrivers',
        image: '/images/accessories/accessory-screwdrivers.jpg',
      },
      {
        name: 'Small hardware & tools',
        image: '/images/accessories/accessory-small-hardware-tools.jpg',
      },
    ],
  },
  {
    family: 'Small machines & equipment',
    // PLACEHOLDER item names — replace with the confirmed machine list.
    items: [
      {
        name: 'Cutting & trimming machines',
        image: '/images/accessories/accessory-cutting-trimming-machines.jpg',
      },
      {
        name: 'Sanding & finishing machines',
        image: '/images/accessories/accessory-sanding-finishing-machines.jpg',
      },
      {
        name: 'Workshop supply equipment',
        image: '/images/accessories/accessory-workshop-supply-equipment.jpg',
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
