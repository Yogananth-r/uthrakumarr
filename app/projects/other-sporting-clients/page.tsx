import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const clients = [
  { no: "01", name: "The Performance Doctor" },
  { no: "02", name: "Hyderabad Vikings" },
  { no: "03", name: "Dilli Dilwale" },
  { no: "04", name: "Fantasy Akhada" },
  { no: "05", name: "Chennai Smashers" },
  { no: "06", name: "Ruby White Town Legends" },
];

const contributions = [
  {
    no: "01",
    title: "Social Media Strategy",
    description:
      "Managed social media strategy for multiple sporting teams and brands.",
  },
  {
    no: "02",
    title: "Content Planning",
    description:
      "Planned content around team identity, player performances and key sporting moments.",
  },
  {
    no: "03",
    title: "Creative Execution",
    description:
      "Developed creative content and original content IPs tailored to each team's identity and audience.",
  },
  {
    no: "04",
    title: "Live Match Coverage",
    description:
      "Handled live match coverage and real-time updates throughout tournaments.",
  },
  {
    no: "05",
    title: "Content Delivery",
    description:
      "Coordinated content delivery throughout tournaments to maintain consistent brand communication.",
  },
  {
    no: "06",
    title: "Audience Engagement",
    description:
      "Created content to maintain audience engagement across social media platforms.",
  },
];

export default function OtherSportingClients() {
  return (
    <main className="osc-project">

      {/* HERO */}
      <section className="osc-hero section-pad">
        <div className="osc-topline">
          <Link href="/#client-carousel" className="osc-back-link">
            <ArrowLeft size={15} />
            BACK TO PROJECTS
          </Link>
          <span>PROJECT / 08</span>
        </div>

        <div className="osc-hero-content">
          <div className="osc-hero-copy">
            <span className="osc-eyebrow">SPORTS / MULTIPLE CLIENTS</span>

            <h1>
              Beyond the
              <span>big leagues.</span>
            </h1>

            <p>
              Working across sporting teams and brands, building digital
              presence through social media strategy, creative content
              and tournament-led communication.
            </p>
          </div>

          <div className="osc-hero-details">
            <div>
              <span>PROJECT</span>
              <strong>OTHER SPORTING CLIENTS</strong>
            </div>
            <div>
              <span>CLIENTS</span>
              <strong>6 SPORTING TEAMS & BRANDS</strong>
            </div>
            <div>
              <span>MY ROLE</span>
              <strong>SOCIAL MEDIA MANAGEMENT</strong>
            </div>
            <div>
              <span>FOCUS</span>
              <strong>STRATEGY / CONTENT / EXECUTION</strong>
            </div>
          </div>
        </div>

        <div className="osc-hero-banner">
          <span>SPORTING STORIES / DIGITAL EXPERIENCES</span>
          <span>01 — 06</span>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="osc-section section-pad">
        <div className="osc-section-label">
          <span>01 / PROJECT OVERVIEW</span>
          <span>ACROSS SPORTING BRANDS</span>
        </div>

        <div className="osc-overview">
          <div className="osc-overview-heading">
            <span className="osc-eyebrow">MULTIPLE TEAMS. DIFFERENT IDENTITIES.</span>
            <h2>
              One passion.
              <span>Many stories.</span>
            </h2>
          </div>

          <div className="osc-overview-copy">
            <p className="osc-lead">
              Managed social media strategy, content planning, and creative
              execution for multiple sporting teams and brands.
            </p>

            <p>
              Developed content that highlighted team identity, player
              performances, and key sporting moments.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="osc-section section-pad">
        <div className="osc-section-label">
          <span>02 / CLIENT PORTFOLIO</span>
          <span>THE SPORTING LINE-UP</span>
        </div>

        <div className="osc-section-heading">
          <h2>
            Different teams.
            <span>Shared ambition.</span>
          </h2>
          <p>
            A range of sporting teams and brands brought together through
            social media strategy and creative execution.
          </p>
        </div>

        <div className="osc-client-grid">
          {clients.map((client) => (
            <article className="osc-client-card" key={client.no}>
              <span className="osc-client-number">{client.no}</span>
              <h3>{client.name}</h3>
              <span className="osc-client-category">SPORTING CLIENT</span>
            </article>
          ))}
        </div>
      </section>

      {/* CONTRIBUTIONS */}
      <section className="osc-section section-pad">
        <div className="osc-section-label">
          <span>03 / MY CONTRIBUTION</span>
          <span>STRATEGY & EXECUTION</span>
        </div>

        <div className="osc-section-heading">
          <h2>
            From planning
            <span>to the final post.</span>
          </h2>
          <p>
            Handled end-to-end social media execution, coordinating content
            throughout tournaments to maintain consistent communication
            and audience engagement.
          </p>
        </div>

        <div className="osc-contribution-grid">
          {contributions.map((item) => (
            <article key={item.no}>
              <span className="osc-number">{item.no}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="osc-footer section-pad">
        <div>
          <span className="osc-eyebrow">END OF PROJECT / 08</span>
          <h2>
            Every team.
            <span>Its own story.</span>
          </h2>
        </div>

        <Link href="/#client-carousel" className="osc-back-link">
          BACK TO ALL PROJECTS
          <ArrowUpRight size={16} />
        </Link>
      </footer>

    </main>
  );
}