
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function DindigulAthleticsProject() {
  return (
    <main className="dda-project">

      {/* PROJECT HERO */}
      <section className="dda-hero section-pad">
        <div className="dda-topline">
          <Link href="/#client-carousel" className="dda-back-link">
            <ArrowLeft size={15} /> BACK TO PROJECTS
          </Link>
          <span>PROJECT / 06</span>
        </div>

        <div className="dda-hero-content">
          <div>
            <span className="dda-eyebrow">
              DINDIGUL ATHLETIC ASSOCIATION / ATHLETICS
            </span>

            <h1>
              Beyond the
              <br />
              <span>finish line.</span>
            </h1>

            <p className="dda-hero-description">
              On-ground social media management, event storytelling
              and digital coverage of Tamil Nadu's young athletic talent.
            </p>
          </div>

          <div className="dda-hero-details">
            <div>
              <span>CLIENT</span>
              <strong>DINDIGUL DISTRICT ATHLETIC ASSOCIATION</strong>
            </div>
            <div>
              <span>MY ROLE</span>
              <strong>SOCIAL MEDIA MANAGER – ON-GROUND</strong>
            </div>
            <div>
              <span>EVENT</span>
              <strong>40TH TAMIL NADU INTER-DISTRICT JUNIOR ATHLETIC CHAMPIONSHIP</strong>
            </div>
            <div>
              <span>VENUE</span>
              <strong>NPR COLLEGE OF ENGINEERING AND TECHNOLOGY, NATHAM</strong>
            </div>
          </div>
        </div>

        <div className="dda-hero-image">
          <Image
            src="/images/clients/dindigul/hero.jpg"
            alt="40th Tamil Nadu Inter-District Junior Athletic Championship"
            fill
            priority
            sizes="100vw"
          />
          <span>CHAMPIONSHIP / MAIN VISUAL</span>
        </div>
      </section>


      {/* 01 / OVERVIEW */}
      <section className="dda-overview section-pad">
        <div className="section-label">
          <span>01 / OVERVIEW</span>
          <span>THE PROJECT</span>
        </div>

        <div className="dda-overview-grid">
          <div className="dda-overview-copy">
            <h2>
              A stage for
              <br />
              <span>young champions.</span>
            </h2>

            <span className="dda-eyebrow">
              MY ROLE / ON-GROUND SOCIAL MEDIA MANAGER
            </span>

            <p className="dda-lead">
              Bringing the energy, dedication and achievements
              of young athletes to digital audiences.
            </p>

            <p>
              Managed social media coverage for the 40th Tamil Nadu
              Inter-District Junior Athletic Championship 2026,
              organised by the Dindigul District Athletic Association
              and Tamil Nadu Athletic Association at NPR College
              of Engineering and Technology, Natham.
            </p>

            <p>
              Oversaw pre-event, live-event and post-event content,
              including real-time updates, engaging reels and
              highlights showcasing athletes, competitions and
              key moments from the championship.
            </p>

            <p>
              Coordinated with the client and design team on
              on-ground branding requirements, ensuring smooth
              execution and consistency across event communications.
            </p>
          </div>

          <div className="dda-overview-gallery">
            <div className="dda-image dda-image-tall">
              <Image
                src="/images/clients/dindigul/overview-01.jpg"
                alt="Athletes at the championship"
                fill
                sizes="(max-width: 700px) 45vw, 25vw"
              />
              <span>CHAMPIONSHIP / 01</span>
            </div>

            <div className="dda-image">
              <Image
                src="/images/clients/dindigul/overview-02.jpg"
                alt="Track and field competition"
                fill
                sizes="(max-width: 700px) 45vw, 25vw"
              />
              <span>COMPETITION / 02</span>
            </div>

            <div className="dda-image">
              <Image
                src="/images/clients/dindigul/overview-03.jpg"
                alt="Athletes and event moments"
                fill
                sizes="(max-width: 700px) 45vw, 25vw"
              />
              <span>ATHLETES / 03</span>
            </div>
          </div>
        </div>
      </section>


      {/* 02 / WHAT I LED */}
      <section className="dda-led section-pad">
        <div className="section-label">
          <span>02 / WHAT I LED</span>
          <span>PRE-EVENT TO POST-EVENT</span>
        </div>

        <div className="dda-led-heading">
          <h2>
            Every moment.
            <br />
            <span>Every milestone.</span>
          </h2>

          <p>
            Managing the complete content journey, from event
            preparation and branding coordination to live
            coverage and post-event storytelling.
          </p>
        </div>

        <div className="dda-led-grid">

          <article className="dda-led-item">
            <span>01</span>
            <h3>Pre-Event Communication</h3>
            <p>
              Planned and coordinated pre-event content to build
              awareness and communicate important championship
              updates.
            </p>
          </article>

          <article className="dda-led-item">
            <span>02</span>
            <h3>Live Event Coverage</h3>
            <p>
              Managed real-time social media updates, capturing
              competitions, athlete performances and important
              moments from the venue.
            </p>
          </article>

          <article className="dda-led-item">
            <span>03</span>
            <h3>Reels & Content Creation</h3>
            <p>
              Developed engaging reels and short-form content
              highlighting the atmosphere, competitions and
              achievements.
            </p>
          </article>

          <article className="dda-led-item">
            <span>04</span>
            <h3>Client Coordination</h3>
            <p>
              Coordinated content requirements and approvals
              with the client to maintain smooth communication
              and timely publishing.
            </p>
          </article>

          <article className="dda-led-item">
            <span>05</span>
            <h3>On-Ground Branding</h3>
            <p>
              Worked with the client and design team on event
              branding requirements and their on-ground execution.
            </p>
          </article>

          <article className="dda-led-item">
            <span>06</span>
            <h3>Post-Event Storytelling</h3>
            <p>
              Published highlights and event recaps celebrating
              athletes, competitions and key championship moments.
            </p>
          </article>

        </div>

        <div className="dda-work-gallery">
          <div className="dda-image">
            <Image
              src="/images/clients/dindigul/work-01.jpg"
              alt="Championship venue and event preparation"
              fill
              sizes="(max-width: 700px) 50vw, 25vw"
            />
            <span>EVENT PREPARATION / 01</span>
          </div>

          <div className="dda-image">
            <Image
              src="/images/clients/dindigul/work-02.jpg"
              alt="Track and field event coverage"
              fill
              sizes="(max-width: 700px) 50vw, 25vw"
            />
            <span>LIVE COVERAGE / 02</span>
          </div>

          <div className="dda-image">
            <Image
              src="/images/clients/dindigul/work-03.jpg"
              alt="Athlete highlights"
              fill
              sizes="(max-width: 700px) 50vw, 25vw"
            />
            <span>ATHLETE MOMENTS / 03</span>
          </div>

          <div className="dda-image">
            <Image
              src="/images/clients/dindigul/work-04.jpg"
              alt="Championship highlights"
              fill
              sizes="(max-width: 700px) 50vw, 25vw"
            />
            <span>CHAMPIONSHIP HIGHLIGHTS / 04</span>
          </div>
        </div>
      </section>


      {/* 03 / CAMPAIGN PERFORMANCE */}
      <section className="dda-results section-pad">
        <div className="section-label">
          <span>03 / CAMPAIGN PERFORMANCE</span>
          <span>40TH TAMIL NADU INTER-DISTRICT JUNIOR ATHLETIC CHAMPIONSHIP</span>
        </div>

        <div className="dda-results-heading">
          <h2>
            Numbers that
            <br />
            <span>made an impact.</span>
          </h2>

          <p>
            A snapshot of the digital performance and audience
            growth achieved during the championship.
          </p>
        </div>

        <div className="dda-metrics-grid">
          <div>
            <strong>5.1M+</strong>
            <span>TOTAL IMPRESSIONS</span>
          </div>

          <div>
            <strong>204K+</strong>
            <span>TOTAL ENGAGEMENT</span>
          </div>

          <div>
            <strong>17.5K+</strong>
            <span>FOLLOWER INCREASE</span>
          </div>

          <div>
            <strong>18K</strong>
            <span>TOTAL FOLLOWERS</span>
          </div>
        </div>

        <div className="dda-result-highlight">
          <div>
            <span>KEY RESULT / AUDIENCE GROWTH</span>
            <strong>17K+</strong>
            <p>Followers achieved within 10 days.</p>
          </div>

          <div className="dda-result-image">
            <Image
              src="/images/clients/dindigul/performance-01.jpg"
              alt="Social media audience growth analytics"
              fill
              sizes="(max-width: 700px) 100vw, 45vw"
            />
            <span>ACCOUNT GROWTH / INSIGHTS</span>
          </div>
        </div>

        <div className="dda-results-gallery">
          <div className="dda-image">
            <Image
              src="/images/clients/dindigul/performance-02.jpg"
              alt="Championship social media insights"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <span>CAMPAIGN INSIGHTS / 01</span>
          </div>

          <div className="dda-image">
            <Image
              src="/images/clients/dindigul/performance-03.jpg"
              alt="Championship social media analytics"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <span>PERFORMANCE ANALYTICS / 02</span>
          </div>
        </div>
      </section>


      {/* PROJECT FOOTER */}
      <footer className="dda-footer section-pad">
        <div>
          <span className="dda-eyebrow">
            END OF PROJECT / 06
          </span>

          <h2>
            The next
            <br />
            <span>generation.</span>
          </h2>
        </div>

        <Link href="/#client-carousel" className="dda-back-link">
          BACK TO ALL PROJECTS <ArrowUpRight size={16} />
        </Link>
      </footer>

    </main>
  );
}
