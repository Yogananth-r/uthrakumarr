
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function BharatRangersProject() {
  return (
    <main className="br-project">

      {/* PROJECT HERO */}
      <section className="br-hero section-pad">
        <div className="br-topline">
          <Link href="/#client-carousel" className="br-back-link">
            <ArrowLeft size={15} /> BACK TO PROJECTS
          </Link>
          <span>PROJECT / 03</span>
        </div>

        <div className="br-hero-content">
          <div>
            <span className="br-eyebrow">
              BHARAT RANGERS / CRICKET
            </span>

            <h1>
              Beyond the
              <br />
              <span>boundary.</span>
            </h1>

            <p className="br-hero-description">
              On-ground social media management, live match coverage
              and creative storytelling during Vidarbha Premier League
              Season 2.
            </p>
          </div>

          <div className="br-hero-details">
            <div>
              <span>CLIENT</span>
              <strong>BHARAT RANGERS</strong>
            </div>
            <div>
              <span>MY ROLE</span>
              <strong>SOCIAL MEDIA MANAGER – ON-GROUND</strong>
            </div>
            <div>
              <span>TOURNAMENT</span>
              <strong>VIDARBHA PREMIER LEAGUE / SEASON 2</strong>
            </div>
            <div>
              <span>RESULT</span>
              <strong>RUNNERS-UP</strong>
            </div>
          </div>
        </div>

        <div className="br-hero-image">
          <span>BHARAT RANGERS / PROJECT VISUAL</span>
        </div>
      </section>


      {/* 01 / OVERVIEW */}
      <section className="br-overview section-pad">
        <div className="section-label">
          <span>01 / OVERVIEW</span>
          <span>THE PROJECT</span>
        </div>

        <div className="br-overview-grid">
          <div className="br-overview-copy">
            <h2>
              Every moment.
              <br />
              <span>Every story.</span>
            </h2>

            <span className="br-eyebrow">
              MY ROLE / ON-GROUND SOCIAL MEDIA MANAGER
            </span>

            <p className="br-lead">
              Bringing the team's tournament journey to life through
              real-time coverage, creative content and on-ground
              storytelling.
            </p>

            <p>
              Managed on-ground social media activities for Bharat
              Rangers during Vidarbha Premier League Season 2, held
              from 1 to 14 June 2026, where the team finished as
              runners-up.
            </p>

            <p>
              Handled live match coverage directly from the stadium,
              capturing key moments and sharing real-time updates
              throughout the tournament.
            </p>
          </div>

          <div className="br-overview-gallery">
            <div className="br-image-placeholder br-image-tall">
              <span>BHARAT RANGERS / 01</span>
            </div>
            <div className="br-image-placeholder">
              <span>BHARAT RANGERS / 02</span>
            </div>
            <div className="br-image-placeholder">
              <span>BHARAT RANGERS / 03</span>
            </div>
          </div>
        </div>
      </section>


      {/* 02 / WHAT I LED */}
      <section className="br-led section-pad">
        <div className="section-label">
          <span>02 / WHAT I LED</span>
          <span>ON-GROUND EXECUTION & CONTENT</span>
        </div>

        <div className="br-led-heading">
          <h2>
            From the
            <br />
            <span>ground up.</span>
          </h2>

          <p>
            Coordinating on-ground production, managing live match
            storytelling and creating content that extended the
            team's tournament journey beyond the field.
          </p>
        </div>

        <div className="br-led-grid">

          <article className="br-led-item">
            <span>01</span>
            <h3>Live Match Coverage</h3>
            <p>
              Covered matches directly from the stadium, capturing
              key moments and sharing real-time updates throughout
              the tournament.
            </p>
          </article>

          <article className="br-led-item">
            <span>02</span>
            <h3>Production Coordination</h3>
            <p>
              Planned and coordinated the on-ground photography
              and videography team, ensuring coverage requirements
              were clearly communicated.
            </p>
          </article>

          <article className="br-led-item">
            <span>03</span>
            <h3>Creative Briefing</h3>
            <p>
              Briefed the production team on content requirements,
              shot lists and coverage priorities for match days.
            </p>
          </article>

          <article className="br-led-item">
            <span>04</span>
            <h3>Brand Collaborations</h3>
            <p>
              Executed brand collaboration content according to
              campaign requirements and planned deliverables.
            </p>
          </article>

          <article className="br-led-item">
            <span>05</span>
            <h3>Player-Focused Content</h3>
            <p>
              Developed player-focused stories and original content
              IPs for post-tournament publishing and future
              social media use.
            </p>
          </article>

        </div>

        <div className="br-work-gallery">
          <div className="br-image-placeholder">
            <span>ON-GROUND COVERAGE / 01</span>
          </div>
          <div className="br-image-placeholder">
            <span>ON-GROUND COVERAGE / 02</span>
          </div>
          <div className="br-image-placeholder">
            <span>CONTENT PRODUCTION / 03</span>
          </div>
          <div className="br-image-placeholder">
            <span>PLAYER CONTENT / 04</span>
          </div>
        </div>
      </section>


      {/* 03 / CAMPAIGN PERFORMANCE */}
      <section className="br-results section-pad">
        <div className="section-label">
          <span>03 / CAMPAIGN PERFORMANCE</span>
          <span>VPL SEASON 2 / 01 JUN – 14 JUN 2026</span>
        </div>

        <div className="br-results-heading">
          <h2>
            The numbers
            <br />
            <span>behind the action.</span>
          </h2>

          <p>
            A snapshot of the digital performance, audience engagement
            and content reach throughout Bharat Rangers' tournament
            campaign.
          </p>
        </div>

        <div className="br-metrics-grid">
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

        <div className="br-results-gallery">
          <div className="br-image-placeholder">
            <span>CAMPAIGN INSIGHTS / 01</span>
          </div>
          <div className="br-image-placeholder">
            <span>PERFORMANCE ANALYTICS / 02</span>
          </div>
        </div>
      </section>


      {/* PROJECT FOOTER */}
      <footer className="br-footer section-pad">
        <div>
          <span className="br-eyebrow">END OF PROJECT / 03</span>
          <h2>
            The game ends.
            <br />
            <span>The stories stay.</span>
          </h2>
        </div>

        <Link href="/#client-carousel" className="br-back-link">
          BACK TO ALL PROJECTS <ArrowUpRight size={16} />
        </Link>
      </footer>

    </main>
  );
}
