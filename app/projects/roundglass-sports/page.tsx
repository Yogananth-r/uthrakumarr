
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function RoundglassSportsProject() {
  return (
    <main className="rg-project">

      {/* PROJECT HERO */}
      <section className="rg-hero section-pad">
        <div className="rg-topline">
          <Link href="/#client-carousel" className="rg-back-link">
            <ArrowLeft size={15} /> BACK TO PROJECTS
          </Link>
          <span>PROJECT / 05</span>
        </div>

        <div className="rg-hero-content">
          <div>
            <span className="rg-eyebrow">
              ROUNDGLASS SPORTS / MULTI-SPORT
            </span>

            <h1>
              Stories beyond
              <br />
              <span>the game.</span>
            </h1>

            <p className="rg-hero-description">
              Social media strategy, athlete storytelling and live
              sports coverage across multiple sporting disciplines.
            </p>
          </div>

          <div className="rg-hero-details">
            <div>
              <span>CLIENT</span>
              <strong>ROUNDGLASS SPORTS</strong>
            </div>
            <div>
              <span>MY ROLE</span>
              <strong>SOCIAL MEDIA MANAGER</strong>
            </div>
            <div>
              <span>FOCUS</span>
              <strong>STRATEGY · CONTENT · LIVE COVERAGE</strong>
            </div>
            <div>
              <span>FEATURED PROJECT</span>
              <strong>PUNJAB HOCKEY LEAGUE 2025</strong>
            </div>
          </div>
        </div>

        <div className="rg-hero-image">
          <span>ROUNDGLASS SPORTS / PROJECT VISUAL</span>
        </div>
      </section>


      {/* 01 / OVERVIEW */}
      <section className="rg-overview section-pad">
        <div className="section-label">
          <span>01 / OVERVIEW</span>
          <span>THE PROJECT</span>
        </div>

        <div className="rg-overview-grid">
          <div className="rg-overview-copy">
            <h2>
              More than
              <br />
              <span>the scoreboard.</span>
            </h2>

            <span className="rg-eyebrow">
              MY ROLE / SOCIAL MEDIA MANAGER
            </span>

            <p className="rg-lead">
              Building a consistent digital presence around
              athletes, sporting initiatives and the stories
              that move sport forward.
            </p>

            <p>
              Managed social media strategy, content planning
              and creation for Roundglass Sports, building a
              consistent digital presence around its sporting
              initiatives, athletes and key developments.
            </p>

            <p>
              Covered live sporting events featuring Roundglass
              athletes across tennis, golf and hockey. Created
              real-time content that captured key moments and
              connected audiences with athletes and their
              achievements.
            </p>
          </div>

          <div className="rg-overview-gallery">
            <div className="rg-image-placeholder rg-image-tall">
              <span>ROUNDGLASS / 01</span>
            </div>
            <div className="rg-image-placeholder">
              <span>ATHLETE COVERAGE / 02</span>
            </div>
            <div className="rg-image-placeholder">
              <span>SPORTING INITIATIVES / 03</span>
            </div>
          </div>
        </div>

        <div className="rg-athlete-strip">
          <span>ATHLETES COVERED</span>
          <div>
            <strong>Yuki Bhambri</strong>
            <strong>Karan Singh</strong>
            <strong>Shubhankar Sharma</strong>
            <strong>Arshdeep Singh</strong>
            <strong>Princedeep Singh</strong>
            <strong>AND OTHERS</strong>
          </div>
        </div>
      </section>


      {/* 02 / WHAT I LED */}
      <section className="rg-led section-pad">
        <div className="section-label">
          <span>02 / WHAT I LED</span>
          <span>STRATEGY & EXECUTION</span>
        </div>

        <div className="rg-led-heading">
          <h2>
            From athletes
            <br />
            <span>to audiences.</span>
          </h2>

          <p>
            Connecting sporting achievements with audiences through
            planned content, live event coverage and consistent
            digital storytelling.
          </p>
        </div>

        <div className="rg-led-grid">

          <article className="rg-led-item">
            <span>01</span>
            <h3>Social Media Strategy</h3>
            <p>
              Managed social media direction and content planning
              to build a consistent digital presence for
              Roundglass Sports.
            </p>
          </article>

          <article className="rg-led-item">
            <span>02</span>
            <h3>Content Development</h3>
            <p>
              Developed social media content around sporting
              initiatives, athletes, achievements and key
              developments.
            </p>
          </article>

          <article className="rg-led-item">
            <span>03</span>
            <h3>Live Event Coverage</h3>
            <p>
              Covered live sporting events, capturing important
              moments and sharing real-time updates with
              audiences.
            </p>
          </article>

          <article className="rg-led-item">
            <span>04</span>
            <h3>Athlete Storytelling</h3>
            <p>
              Created athlete-focused content highlighting
              performances, achievements and sporting journeys
              across disciplines.
            </p>
          </article>

          <article className="rg-led-item">
            <span>05</span>
            <h3>Multi-Sport Coverage</h3>
            <p>
              Worked across tennis, golf and hockey, covering
              athletes and their sporting developments.
            </p>
          </article>

          <article className="rg-led-item">
            <span>06</span>
            <h3>Campaign Execution</h3>
            <p>
              Coordinated content requirements and creative
              execution to ensure timely and consistent
              publishing.
            </p>
          </article>

        </div>

        <div className="rg-work-gallery">
          <div className="rg-image-placeholder">
            <span>TENNIS / 01</span>
          </div>
          <div className="rg-image-placeholder">
            <span>GOLF / 02</span>
          </div>
          <div className="rg-image-placeholder">
            <span>HOCKEY / 03</span>
          </div>
          <div className="rg-image-placeholder">
            <span>ATHLETE STORIES / 04</span>
          </div>
        </div>
      </section>


      {/* 03 / FEATURED PROJECT */}
      <section className="rg-featured section-pad">
        <div className="section-label">
          <span>03 / FEATURED PROJECT</span>
          <span>PUNJAB HOCKEY LEAGUE / 2025</span>
        </div>

        <div className="rg-featured-hero">
          <div>
            <span className="rg-eyebrow">
              ROUNDGLASS SPORTS / HOCKEY
            </span>

            <h2>
              Punjab Hockey
              <br />
              <span>League 2025.</span>
            </h2>

            <p>
              Bringing the league to life through live match coverage,
              on-ground storytelling and digital content.
            </p>
          </div>

          <div className="rg-featured-facts">
            <div>
              <span>ORGANISER</span>
              <strong>ROUNDGLASS SPORTS</strong>
            </div>
            <div>
              <span>TEAMS</span>
              <strong>08 PARTICIPATING TEAMS</strong>
            </div>
            <div>
              <span>FORMAT</span>
              <strong>CLUB-LEVEL COMPETITION</strong>
            </div>
          </div>
        </div>

        <div className="rg-featured-overview">
          <div className="rg-featured-copy">
            <span className="rg-eyebrow">
              THE TOURNAMENT
            </span>

            <h3>
              A bigger stage
              <br />
              for Indian hockey.
            </h3>

            <p>
              Organised by Roundglass Sports, the Punjab Hockey
              League provided competitive exposure to clubs
              across India, bringing together eight participating
              teams.
            </p>

            <p>
              The tournament featured current national team
              players, legendary Olympians and a special
              exhibition match involving hockey greats.
            </p>

            <p>
              Covered key matches, activities and tournament
              moments, showcasing the scale of the league
              and its contribution to Indian hockey.
            </p>
          </div>

          <div className="rg-featured-gallery">
            <div className="rg-image-placeholder rg-featured-main-image">
              <span>PUNJAB HOCKEY LEAGUE / 01</span>
            </div>
            <div className="rg-image-placeholder">
              <span>TOURNAMENT / 02</span>
            </div>
            <div className="rg-image-placeholder">
              <span>EXHIBITION MATCH / 03</span>
            </div>
          </div>
        </div>

        <div className="rg-featured-responsibilities">
          <div>
            <span>01</span>
            <h3>Live Match Updates</h3>
            <p>
              Real-time match updates and coverage throughout
              the league.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>On-Ground Content</h3>
            <p>
              Capturing match moments, activities and
              behind-the-scenes content.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Brand Collaborations</h3>
            <p>
              Executing brand collaboration content according
              to campaign requirements.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Event Branding & Promotion</h3>
            <p>
              Coordinating event branding and promotional
              activities across the tournament.
            </p>
          </div>
        </div>

        <div className="rg-featured-gallery-bottom">
          <div className="rg-image-placeholder">
            <span>MATCH COVERAGE / 04</span>
          </div>
          <div className="rg-image-placeholder">
            <span>PLAYER MOMENTS / 05</span>
          </div>
          <div className="rg-image-placeholder">
            <span>LEAGUE ACTIVITIES / 06</span>
          </div>
        </div>
      </section>


      {/* 04 / PERFORMANCE */}
      <section className="rg-results section-pad">
        <div className="section-label">
          <span>04 / CAMPAIGN PERFORMANCE</span>
          <span>PUNJAB HOCKEY LEAGUE / 2025</span>
        </div>

        <div className="rg-results-heading">
          <h2>
            Numbers that
            <br />
            <span>tell the story.</span>
          </h2>

          <p>
            A snapshot of the digital performance and audience
            engagement throughout the Punjab Hockey League campaign.
          </p>
        </div>

        <div className="rg-metrics-grid">
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

        <div className="rg-results-gallery">
          <div className="rg-image-placeholder">
            <span>CAMPAIGN INSIGHTS / 01</span>
          </div>
          <div className="rg-image-placeholder">
            <span>PERFORMANCE ANALYTICS / 02</span>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="rg-footer section-pad">
        <div>
          <span className="rg-eyebrow">
            END OF PROJECT / 05
          </span>
          <h2>
            Every athlete.
            <br />
            <span>Every story.</span>
          </h2>
        </div>

        <Link href="/#client-carousel" className="rg-back-link">
          BACK TO ALL PROJECTS <ArrowUpRight size={16} />
        </Link>
      </footer>

    </main>
  );
}
