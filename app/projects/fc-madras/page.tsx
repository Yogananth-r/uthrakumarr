
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function FCMadrasProject() {
  return (
    <main className="fm-project">

      {/* PROJECT HERO */}
      <section className="fm-hero section-pad">
        <div className="fm-topline">
          <Link href="/#client-carousel" className="fm-back-link">
            <ArrowLeft size={15} /> BACK TO PROJECTS
          </Link>
          <span>PROJECT / 02</span>
        </div>

        <div className="fm-hero-content">
          <div>
            <span className="fm-eyebrow">FC MADRAS / FOOTBALL</span>
            <h1>
              Building the
              <br />
              <span>next generation.</span>
            </h1>
            <p className="fm-hero-description">
              Social media strategy, football storytelling and live match
              coverage for a club focused on developing the next generation
              of football talent.
            </p>
          </div>

          <div className="fm-hero-details">
            <div>
              <span>CLIENT</span>
              <strong>FC MADRAS</strong>
            </div>
            <div>
              <span>MY ROLE</span>
              <strong>SOCIAL MEDIA MANAGER</strong>
            </div>
            <div>
              <span>FOCUS</span>
              <strong>STRATEGY · CONTENT · LIVE COVERAGE</strong>
            </div>
          </div>
        </div>

        <div className="fm-hero-image">
          <span>FC MADRAS / PROJECT VISUAL</span>
        </div>
      </section>


      {/* 01 / OVERVIEW */}
      <section className="fm-overview section-pad">
        <div className="section-label">
          <span>01 / OVERVIEW</span>
          <span>THE PROJECT</span>
        </div>

        <div className="fm-overview-grid">
          <div className="fm-overview-copy">
            <h2>
              More than
              <br />
              <span>the game.</span>
            </h2>

            <span className="fm-eyebrow">MY ROLE / SOCIAL MEDIA MANAGER</span>

            <p className="fm-lead">
              Building the digital story of a football club focused on
              its journey, academy, emerging talent and player development.
            </p>

            <p>
              Managed social media strategy, content planning and creative
              development for FC Madras, highlighting the club's football
              journey, academy activities and achievements across its teams.
            </p>

            <p>
              Served as the primary point of contact between the client
              and internal teams, coordinating content requirements,
              creative execution and deliverables to maintain smooth
              communication and timely publishing.
            </p>
          </div>

          <div className="fm-overview-gallery">
            <div className="fm-image-placeholder fm-image-tall">
              <span>FC MADRAS / 01</span>
            </div>
            <div className="fm-image-placeholder">
              <span>FC MADRAS / 02</span>
            </div>
            <div className="fm-image-placeholder">
              <span>FC MADRAS / 03</span>
            </div>
          </div>
        </div>
      </section>


      {/* 02 / WHAT I LED */}
      <section className="fm-led section-pad">
        <div className="section-label">
          <span>02 / WHAT I LED</span>
          <span>STRATEGY & EXECUTION</span>
        </div>

        <div className="fm-led-heading">
          <h2>
            From planning
            <br />
            <span>to match day.</span>
          </h2>

          <p>
            Managing the complete content journey, from client requirements
            and creative coordination to on-ground coverage and real-time
            storytelling.
          </p>
        </div>

        <div className="fm-led-grid">

          <article className="fm-led-item">
            <span>01</span>
            <h3>Social Media Strategy</h3>
            <p>
              Managed the club's social media direction, content planning
              and publishing across its football and academy activities.
            </p>
          </article>

          <article className="fm-led-item">
            <span>02</span>
            <h3>Client & Team Coordination</h3>
            <p>
              Acted as the primary client contact, aligning requirements,
              creative teams, deliverables and publishing timelines.
            </p>
          </article>

          <article className="fm-led-item">
            <span>03</span>
            <h3>Football Storytelling</h3>
            <p>
              Developed content highlighting the club's progress,
              emerging talent, player development and achievements
              across its teams.
            </p>
          </article>

          <article className="fm-led-item">
            <span>04</span>
            <h3>Live Match Coverage</h3>
            <p>
              Coordinated on-ground coverage across the 2025–26 AIFF
              Elite, Junior and Sub-Junior League campaigns, capturing
              goals, key moments and match highlights.
            </p>
          </article>

          <article className="fm-led-item">
            <span>05</span>
            <h3>Real-Time Publishing</h3>
            <p>
              Delivered live match updates and Instagram Stories,
              keeping fans connected to the action as matches unfolded.
            </p>
          </article>

        </div>

        <div className="fm-work-gallery">
          <div className="fm-image-placeholder">
            <span>MATCH COVERAGE / 01</span>
          </div>
          <div className="fm-image-placeholder">
            <span>MATCH COVERAGE / 02</span>
          </div>
          <div className="fm-image-placeholder">
            <span>MATCH COVERAGE / 03</span>
          </div>
          <div className="fm-image-placeholder">
            <span>MATCH COVERAGE / 04</span>
          </div>
        </div>
      </section>


      {/* 03 / CAMPAIGN PERFORMANCE */}
      <section className="fm-results section-pad">
        <div className="section-label">
          <span>03 / CAMPAIGN PERFORMANCE</span>
          <span>2025–26 / AIFF LEAGUE CAMPAIGNS</span>
        </div>

        <div className="fm-results-heading">
          <h2>
            Numbers that
            <br />
            <span>tell the story.</span>
          </h2>

          <p>
            A snapshot of the digital performance and audience engagement
            throughout FC Madras' football campaigns.
          </p>
        </div>

        <div className="fm-metrics-grid">
          <div>
            <strong>—</strong>
            <span>TOTAL IMPRESSIONS</span>
          </div>
          <div>
            <strong>—</strong>
            <span>TOTAL ENGAGEMENT</span>
          </div>
          <div>
            <strong>—</strong>
            <span>VIDEO VIEWS</span>
          </div>
          <div>
            <strong>—</strong>
            <span>FOLLOWER INCREASE</span>
          </div>
        </div>

        <div className="fm-results-gallery">
          <div className="fm-image-placeholder">
            <span>PERFORMANCE INSIGHTS / 01</span>
          </div>
          <div className="fm-image-placeholder">
            <span>PERFORMANCE INSIGHTS / 02</span>
          </div>
        </div>
      </section>


      {/* PROJECT FOOTER */}
      <footer className="fm-footer section-pad">
        <div>
          <span className="fm-eyebrow">END OF PROJECT / 02</span>
          <h2>
            The work behind
            <br />
            <span>the game.</span>
          </h2>
        </div>

        <Link href="/#client-carousel" className="fm-back-link">
          BACK TO ALL PROJECTS <ArrowUpRight size={16} />
        </Link>
      </footer>

    </main>
  );
}
