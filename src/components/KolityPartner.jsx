import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import AccessoryCard from './AccessoryCard.jsx'
import PartnerLockup from './PartnerLockup.jsx'
import MechanismVideo from './motion/MechanismVideo.jsx'
import { KOLITY_FAMILIES } from '../data/kolityCategories.js'

/*
  KOLITY PARTNER — the marquee distributor moment inside the Accessories page.

  Deliberately stronger than the warm non-partner sections: it sits on a beige
  band (so it separates from the ivory sections around it), leads with a large
  Kolity lockup + distributor line, and is marked by a controlled green divider.
  Green is clearly present here — lockup rule, section divider, family rules, and
  the cards' green hover hairline — but stays a set of thin accents, never a
  background, and well under the ~5% budget. This is the ONLY section where
  Kolity green appears.

  Scope is Kolity-only: Hinges and Drawer systems. Handles, tools, and machines
  are Kanaan's own ranges and live in their own warm sections — never here.

  Wording is honest: "Distributor of Kolity hardware in Lebanon" — no
  exclusivity claim unless confirmed. The logo file is not in the repo yet, so
  PartnerLockup shows the "Kolity" wordmark until a transparent PNG is added.
*/
export default function KolityPartner() {
  return (
    <Section
      id="accessories-kolity"
      bg="beige"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Strong partner intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="01">DISTRIBUTOR</SectionLabel>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex justify-center">
              <PartnerLockup
                logo="/images/brands/kolity-logo-transparent.png"
                alt="Kolity"
                wordmark="Kolity"
                label="Distributor of Kolity hardware in Lebanon"
                accent="kolity"
                size="lg"
                align="center"
              />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="mt-10 font-serif text-display-sm leading-[1.15] text-walnut">
              Hardware that moves quietly.
            </h2>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-5 font-serif text-[20px] leading-[1.35] text-walnut/75 sm:text-[22px]">
              We stock and supply Kolity’s hinges and drawer systems — the moving
              parts behind a well-built interior.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            {/* Controlled green divider — marks the partner moment */}
            <span
              aria-hidden="true"
              className="mx-auto mt-10 block h-px w-16 bg-kolity/50"
            />
          </Reveal>
        </div>

        {/* Featured media — real Kolity mechanism videos. Sits between the
            distributor intro and the family grids. Two tiles; the family cards
            below stay static. */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:mt-20">
          <Reveal delay={0.1}>
            <MechanismVideo
              webm="/videos/kolity/hidden-drawer-system.webm"
              mp4="/videos/kolity/hidden-drawer-system.mp4"
              poster="/images/kolity/hidden-drawer-system-poster.jpg"
              title="Hidden drawer system"
              description="Concealed runners — a clean drawer front and a smooth, quiet close."
              accent="kolity"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <MechanismVideo
              webm="/videos/kolity/ball-bearing-slide.webm"
              mp4="/videos/kolity/ball-bearing-slide.mp4"
              poster="/images/kolity/ball-bearing-slide-poster.jpg"
              title="Ball-bearing drawer slide"
              description="Full-extension travel on precision steel ball bearings."
              accent="kolity"
            />
          </Reveal>
        </div>

        {/* Family clusters — Hinges, Drawer systems */}
        <div className="mt-14 flex flex-col gap-y-16 lg:mt-20 lg:gap-y-24">
          {KOLITY_FAMILIES.map((group) => (
            <div key={group.family}>
              <Reveal>
                <div className="flex items-center gap-5">
                  <span className="whitespace-nowrap text-eyebrow uppercase text-olive">
                    {group.family}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-kolity/30" />
                </div>
              </Reveal>

              <div
                className={`mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:mt-10 ${
                  group.items.length === 2
                    ? 'mx-auto max-w-3xl lg:gap-x-10'
                    : 'lg:grid-cols-3 lg:gap-x-8'
                }`}
              >
                {group.items.map((item, i) => (
                  <AccessoryCard
                    key={item.name}
                    item={item}
                    accent="kolity"
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
