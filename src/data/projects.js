/*
  PROJECT DATA — single source of truth for the Projects page (text directory,
  gallery filter, and gallery cards) AND the homepage "Selected Work" strip.

  Real photos are PNGs under public/images/projects/, named consistently
  (project-{category}-NN.png). The gallery card shows a clean "Photo to follow"
  placeholder for any item whose file is missing — drop the matching file in
  and it appears automatically, no code change needed.

  Wording for fire-rated doors is intentionally neutral. Do NOT introduce
  certification claims (EI30 / EI60 / certified / approved / compliance / etc.)
  until confirmed official details are provided.
*/

export const PROJECT_CATEGORIES = [
  {
    key: 'doors',
    name: 'Doors',
    description:
      'Solid and veneered interior doors — including pivoting, concealed-frame, and fire-rated solutions.',
  },
  {
    key: 'kitchens',
    name: 'Kitchens',
    description:
      'Fully custom kitchens, from cabinetry to island, fitted to the room.',
  },
  {
    key: 'bedrooms',
    name: 'Bedrooms',
    description:
      'Headboards, bedroom millwork, and built-in storage shaped to the wall.',
  },
  {
    key: 'closets',
    name: 'Closets',
    description:
      'Walk-in and built-in closets, made to fit the space and the use.',
  },
  {
    key: 'walls-ceilings',
    name: 'Walls & Ceilings',
    description:
      'Floor-to-ceiling cladding, fluted panelling, and ceiling features in matched veneers.',
  },
  {
    key: 'commercial',
    name: 'Commercial',
    description:
      'Receptions, restaurants, banks, retail — bespoke commercial fit-outs and millwork.',
  },
  {
    key: 'outdoor',
    name: 'Outdoor',
    description:
      'Pergolas, outdoor woodwork, and weather-resistant exterior carpentry.',
  },
  {
    key: 'tables',
    name: 'Tables',
    description:
      'Dining, conference, and statement tables — solid wood and custom finishes.',
  },
  {
    key: 'decorative-screens',
    name: 'Decorative Screens',
    description:
      'Carved and slatted wood screens used as room dividers and feature walls.',
  },
]

export const CATEGORIES_BY_KEY = Object.fromEntries(
  PROJECT_CATEGORIES.map((c) => [c.key, c]),
)

/*
  Helper: build N entries for a category at once. The default per-category
  title is repeated across that category's cards (kept generic on purpose —
  we don't invent client/site/year details).
*/
function entries({ category, prefix, count, title, ext = 'png', startAt = 1 }) {
  return Array.from({ length: count }, (_, i) => ({
    category,
    image: `/images/projects/${prefix}-${String(startAt + i).padStart(2, '0')}.${ext}`,
    title,
  }))
}

export const PROJECTS = [
  ...entries({ category: 'doors',              prefix: 'project-door',              count: 15, title: 'Custom Wooden Door' }),
  ...entries({ category: 'kitchens',           prefix: 'project-kitchen',           count: 14, title: 'Custom Kitchen' }),
  ...entries({ category: 'bedrooms',           prefix: 'project-bedroom',           count: 8,  title: 'Bedroom Woodwork' }),
  ...entries({ category: 'walls-ceilings',     prefix: 'project-wall-ceiling',      count: 9,  title: 'Wall & Ceiling Feature' }),
  ...entries({ category: 'commercial',         prefix: 'project-commercial',        count: 14, title: 'Commercial Interior' }),
  ...entries({ category: 'outdoor',            prefix: 'project-outdoor',           count: 3,  title: 'Outdoor Woodwork' }),
  ...entries({ category: 'closets',            prefix: 'project-closet',            count: 2,  title: 'Custom Closet' }),
  ...entries({ category: 'tables',             prefix: 'project-table',             count: 3,  title: 'Custom Table' }),
  ...entries({ category: 'decorative-screens', prefix: 'project-decorative-screen', count: 1,  title: 'Decorative Wood Screen' }),
  // Bars: hidden until project-bar-01.png is uploaded — re-add the entries() line for the bars category at that point.
]

// Six curated picks for the homepage "Selected Work" strip — one per major
// category, the 01 image of each. Easy to swap once we identify favorites.
export const FEATURED_PROJECTS = [
  { category: 'doors',          image: '/images/projects/project-door-01.png',         title: 'Custom Wooden Door' },
  { category: 'kitchens',       image: '/images/projects/project-kitchen-01.png',      title: 'Custom Kitchen' },
  { category: 'commercial',     image: '/images/projects/project-commercial-01.png',   title: 'Commercial Interior' },
  { category: 'walls-ceilings', image: '/images/projects/project-wall-ceiling-01.png', title: 'Wall & Ceiling Feature' },
  { category: 'outdoor',        image: '/images/projects/project-outdoor-01.png',      title: 'Outdoor Woodwork' },
  { category: 'bedrooms',       image: '/images/projects/project-bedroom-01.png',      title: 'Bedroom Woodwork' },
]
