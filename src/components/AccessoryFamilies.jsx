import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import AccessoryCard from './AccessoryCard.jsx'

/*
  AccessoryFamilies — a reusable Accessories section: a centered intro
  (olive eyebrow + headline + optional deck) above one or more labelled family
  clusters, each a uniform grid of AccessoryCards.

  Used for Kanaan's own non-partner sections (handles, tools, machines), always
  accent="warm" so they stay fully warm. The Kolity partner moment has its own
  stronger component (KolityPartner) and does not route through here.

  `accent` flows down to the family divider rule and the cards' hover hairline.

  A family whose `family` is empty renders just its grid (no eyebrow), useful
  when the section headline already names the single group.
*/
const FAMILY_RULE = {
  warm: 'bg-stone/50',
  kolity: 'bg-kolity/30',
}

export default function AccessoryFamilies({
  id,
  bg = 'ivory',
  number,
  label,
  title,
  deck,
  families = [],
  accent = 'warm',
}) {
  const ruleClass = FAMILY_RULE[accent] || FAMILY_RULE.warm

  return (
    <Section
      id={id}
      bg={bg}
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number={number}>{label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              {title}
            </h2>
          </Reveal>
          {deck && (
            <Reveal delay={0.3}>
              <p className="mt-5 font-serif text-[20px] leading-[1.35] text-walnut/75 sm:text-[22px]">
                {deck}
              </p>
            </Reveal>
          )}
        </div>

        {/* Family clusters */}
        <div className="mt-14 flex flex-col gap-y-16 lg:mt-20 lg:gap-y-24">
          {families.map((group, gi) => (
            <div key={group.family || gi}>
              {group.family && (
                <Reveal>
                  <div className="flex items-center gap-5">
                    <span className="whitespace-nowrap text-eyebrow uppercase text-olive">
                      {group.family}
                    </span>
                    <span aria-hidden="true" className={`h-px flex-1 ${ruleClass}`} />
                  </div>
                </Reveal>
              )}

              <div
                className={`grid grid-cols-2 gap-x-6 gap-y-10 ${
                  group.items.length === 2
                    ? 'mx-auto max-w-3xl lg:gap-x-10'
                    : 'lg:grid-cols-3 lg:gap-x-8'
                }${group.family ? ' mt-8 lg:mt-10' : ''}`}
              >
                {group.items.map((item, i) => (
                  <AccessoryCard
                    key={item.name}
                    item={item}
                    accent={accent}
                    delay={Math.min(i, 3) * 0.08}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
