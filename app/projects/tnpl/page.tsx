
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const responsibilities = [
  {
    no: "01",
    title: "Social Media Strategy",
    description:
      "Planned team-specific content strategies and digital communication aligned with each team's identity.",
  },
  {
    no: "02",
    title: "Live Match Coverage",
    description:
      "Managed real-time updates, match moments, results and important developments throughout tournaments.",
  },
  {
    no: "03",
    title: "Creative Content",
    description:
      "Developed engaging creatives and original content IPs tailored to each team's identity and audience.",
  },
  {
    no: "04",
    title: "Player Storytelling",
    description:
      "Highlighted player performances, team identity and key sporting moments through digital content.",
  },
  {
    no: "05",
    title: "Content Planning",
    description:
      "Coordinated content requirements, creative planning and delivery throughout the tournaments.",
  },
  {
    no: "06",
    title: "Audience Engagement",
    description:
      "Created timely content that connected supporters with their teams and the tournament.",
  },
];

export default function TNPLProject() {
  return (
    <main className="tnpl-project">

      {/* HERO */}
      <section className="tnpl-hero section-pad">
        <div className="tnpl-topline">
          <Link href="/#client-carousel" className="tnpl-back-link">
            <ArrowLeft size={15} />
            BACK TO PROJECTS
          </Link>
          <span>PROJECT / 07</span>
        </div>

        <div className="tnpl-hero-content">
          <div className="tnpl-hero-copy">
            <span className="tnpl-eyebrow">SPORTS / CRICKET / TNPL</span>

            <h1>
              Two teams.
              <span>One league.</span>
            </h1>

            <p>
              Building digital identities, creating match-day moments
              and bringing cricket closer to fans through social media
              for the Tamil Nadu Premier League.
            </p>
          </div>

          <div className="tnpl-hero-details">
            <div>
              <span>PROJECT</span>
              <strong>TAMIL NADU PREMIER LEAGUE</strong>
            </div>
            <div>
              <span>TEAMS</span>
              <strong>NELLAI ROYAL KINGS / TRICHY GRAND CHOLAS</strong>
            </div>
            <div>
              <span>MY ROLE</span>
              <strong>SOCIAL MEDIA MANAGEMENT</strong>
            </div>
            <div>
              <span>FOCUS</span>
              <strong>STRATEGY / CONTENT / LIVE COVERAGE</strong>
            </div>
          </div>
        </div>

        <div className="tnpl-hero-image">
          <Image
            src="/images/clients/tnpl/hero.jpg"
            alt="Tamil Nadu Premier League"
            fill
            priority
            sizes="100vw"
          />
          <span>TNPL / THE GAME BEGINS</span>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="tnpl-section section-pad">
        <div className="tnpl-section-label">
          <span>01 / PROJECT OVERVIEW</span>
          <span>THE BIG PICTURE</span>
        </div>

        <div className="tnpl-overview-grid">
          <div className="tnpl-overview-copy">
            <span className="tnpl-eyebrow">BEHIND THE SCENES</span>

            <h2>
              More than
              <span>just cricket.</span>
            </h2>

            <p className="tnpl-lead">
              Two teams. Different identities. One sporting platform.
            </p>

            <p>
              Managed social media strategy, content planning and
              creative execution for Tamil Nadu Premier League teams
              Nellai Royal Kings and Trichy Grand Cholas.
            </p>

            <p>
              Developed engaging digital content highlighting team
              identity, player performances and key sporting moments,
              ensuring each team's communication reflected its own
              personality and audience.
            </p>

            <p>
              Handled end-to-end social media execution, including
              live match coverage, real-time updates, creative content
              and original content IPs throughout the tournaments.
            </p>
          </div>

          <div className="tnpl-overview-gallery">
            <div className="tnpl-image tnpl-image-tall">
              <Image
                src="/images/clients/tnpl/overview-01.jpg"
                alt="TNPL cricket action"
                fill
                sizes="(max-width: 700px) 90vw, 45vw"
              />
              <span>THE LEAGUE / 01</span>
            </div>

            <div className="tnpl-image">
              <Image
                src="/images/clients/tnpl/overview-02.jpg"
                alt="Nellai Royal Kings"
                fill
                sizes="(max-width: 700px) 45vw, 25vw"
              />
              <span>NELLAI / 02</span>
            </div>

            <div className="tnpl-image">
              <Image
                src="/images/clients/tnpl/overview-03.jpg"
                alt="Trichy Grand Cholas"
                fill
                sizes="(max-width: 700px) 45vw, 25vw"
              />
              <span>TRICHY / 03</span>
            </div>
          </div>
        </div>
      </section>

      {/* TEAMS */}
      <section className="tnpl-section section-pad">
        <div className="tnpl-section-label">
          <span>02 / THE TEAMS</span>
          <span>TWO IDENTITIES / ONE LEAGUE</span>
        </div>

        <div className="tnpl-section-heading">
          <h2>
            Different colours.
            <span>Same passion.</span>
          </h2>
          <p>
            Building distinct digital identities for both teams while
            maintaining a consistent presence across the league.
          </p>
        </div>

        <div className="tnpl-team-grid">
          <article className="tnpl-team-card">
            <div className="tnpl-team-image">
              <Image
                src="/images/clients/tnpl/nellai-royal-kings.jpg"
                alt="Nellai Royal Kings"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              <span>TEAM / 01</span>
            </div>

            <div className="tnpl-team-info">
              <span className="tnpl-eyebrow">TNPL / TEAM 01</span>
              <h3>Nellai Royal Kings</h3>
              <p>
                Creating a strong team identity through match-day
                storytelling, player-focused content, fan engagement
                and original creative formats.
              </p>
            </div>
          </article>

          <article className="tnpl-team-card">
            <div className="tnpl-team-image">
              <Image
                src="/images/clients/tnpl/trichy-grand-cholas.jpg"
                alt="Trichy Grand Cholas"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              <span>TEAM / 02</span>
            </div>

            <div className="tnpl-team-info">
              <span className="tnpl-eyebrow">TNPL / TEAM 02</span>
              <h3>Trichy Grand Cholas</h3>
              <p>
                Developing team-led content and consistent digital
                communication around players, performances and
                important tournament moments.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="tnpl-section section-pad">
        <div className="tnpl-section-label">
          <span>03 / MY CONTRIBUTION</span>
          <span>STRATEGY & EXECUTION</span>
        </div>

        <div className="tnpl-section-heading">
          <h2>
            From the first ball
            <span>to the last.</span>
          </h2>
          <p>
            Managing the complete social media journey, bringing
            together creative planning, match-day execution and
            team-focused storytelling.
          </p>
        </div>

        <div className="tnpl-responsibility-grid">
          {responsibilities.map((item) => (
            <article key={item.no}>
              <span className="tnpl-number">{item.no}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WORK GALLERY */}
      <section className="tnpl-section section-pad">
        <div className="tnpl-section-label">
          <span>04 / SELECTED WORK</span>
          <span>CONTENT & CREATIVES</span>
        </div>

        <div className="tnpl-section-heading">
          <h2>
            Moments that
            <span>move the crowd.</span>
          </h2>
          <p>
            A look at the content, match coverage and creative
            storytelling developed across both teams.
          </p>
        </div>

        <div className="tnpl-work-gallery">
          <div className="tnpl-image">
            <Image
              src="/images/clients/tnpl/work-01.jpg"
              alt="TNPL match coverage"
              fill
              sizes="(max-width: 700px) 50vw, 25vw"
            />
            <span>MATCH COVERAGE / 01</span>
          </div>

          <div className="tnpl-image">
            <Image
              src="/images/clients/tnpl/work-02.jpg"
              alt="TNPL creative content"
              fill
              sizes="(max-width: 700px) 50vw, 25vw"
            />
            <span>CREATIVE CONTENT / 02</span>
          </div>

          <div className="tnpl-image">
            <Image
              src="/images/clients/tnpl/work-03.jpg"
              alt="TNPL player storytelling"
              fill
              sizes="(max-width: 700px) 50vw, 25vw"
            />
            <span>PLAYER STORIES / 03</span>
          </div>

          <div className="tnpl-image">
            <Image
              src="/images/clients/tnpl/work-04.jpg"
              alt="TNPL team moments"
              fill
              sizes="(max-width: 700px) 50vw, 25vw"
            />
            <span>TEAM MOMENTS / 04</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="tnpl-footer section-pad">
        <div>
          <span className="tnpl-eyebrow">END OF PROJECT / 07</span>
          <h2>
            Beyond the
            <span>boundaries.</span>
          </h2>
        </div>

        <Link href="/#client-carousel" className="tnpl-back-link">
          BACK TO ALL PROJECTS
          <ArrowUpRight size={16} />
        </Link>
      </footer>

    </main>
  );
}
