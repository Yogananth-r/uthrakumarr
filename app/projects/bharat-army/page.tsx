
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function BharatArmyProject() {
  return (
    <main className="ba-project">
      <header className="ba-header">
        <Link href="/" className="ba-back">
          <ArrowLeft size={16} /> BACK TO PORTFOLIO
        </Link>
        <span>PROJECT 001 / SELECTED WORK</span>
        <span>UTHRA KUMAR R.</span>
      </header>

      <section className="ba-hero">
        <div className="ba-hero-image">
          <Image
            src="/images/clients/bharat-army.png"
            alt="The Bharat Army"
            fill
            priority
            sizes="100vw"
            className="ba-cover-image"
          />
          <div className="ba-image-overlay" />
        </div>

        <div className="ba-hero-content">
          <span className="ba-kicker">CRICKET / GLOBAL FAN COMMUNITY</span>
          <h1>THE BHARAT<br /><span>ARMY.</span></h1>
          <div className="ba-hero-bottom">
            <p>We are the Bharat Army, a passionate community of cricket enthusiasts whose unwavering support has fueled Team India's journey for over two decades.</p>
            <span>PROJECT LEAD / 001</span>
          </div>
        </div>
      </section>

      <section className="ba-overview section-pad">
        <div className="section-label">
          <span>01 / PROJECT OVERVIEW</span>
          <span>LEADERSHIP & EXECUTION</span>
        </div>

        
        <div className="ba-overview-grid">

        <div className="ba-overview-copy">
            <h2>
            Beyond the<br />
            game. <span>Beyond the</span><br />
            boundaries.
            </h2>

            <span className="eyebrow">MY ROLE / PROJECT LEAD</span>

            <p className="ba-lead">
            Leading content, people and delivery for the global supporter
            group of the Indian cricket team.
            </p>

            <p>
            Led a cross-functional team of seven across social, design and
            video. Oversaw match-day publishing, campaigns, client
            communication, Bharat Army Travel content, and 50+ newsletter
            editions.
            </p>
        </div>

        <div className="ba-image-gallery">
            <div className="ba-gallery-item">
            <Image
                src="/images/clients/ba-01.jpg"
                alt="Bharat Army project image 1"
                fill
                sizes="(max-width: 700px) 45vw, 25vw"
            />
            </div>

            <div className="ba-gallery-item">
            <Image
                src="/images/clients/ba-02.jpg"
                alt="Bharat Army project image 2"
                fill
                sizes="(max-width: 700px) 45vw, 25vw"
            />
            </div>

            <div className="ba-gallery-item">
            <Image
                src="/images/clients/ba-03.jpg"
                alt="Bharat Army project image 3"
                fill
                sizes="(max-width: 700px) 45vw, 25vw"
            />
            </div>

            <div className="ba-gallery-item">
            <Image
                src="/images/clients/ba-04.jpg"
                alt="Bharat Army project image 4"
                fill
                sizes="(max-width: 700px) 45vw, 25vw"
            />
            </div>
        </div>

        </div>

        <div className="ba-stat-grid">
          <div><strong>07</strong><span>TEAM MEMBERS</span></div>
          <div><strong>50+</strong><span>NEWSLETTER EDITIONS</span></div>
          <div><strong>05</strong><span>KEY CAMPAIGNS</span></div>
          <div><strong>GLOBAL</strong><span>FAN COMMUNITY</span></div>
        </div>
      </section>


<section className="ba-responsibilities section-pad">
  <div className="section-label">
    <span>02 / WHAT I LED</span>
    <span>STRATEGY MEETS EXECUTION</span>
  </div>

  <div className="ba-responsibilities-grid">

    <div className="ba-responsibility-list">
      <article>
        <span>01</span>
        <div>
          <h3>Team Leadership</h3>
          <p>Coordinating a seven-member creative team across social media,
            design and video production.</p>
        </div>
      </article>

      <article>
        <span>02</span>
        <div>
          <h3>Content & Live Coverage</h3>
          <p>Planning and overseeing match-day content, live updates,
            storytelling and fan engagement.</p>
        </div>
      </article>

      <article>
        <span>03</span>
        <div>
          <h3>Campaign Management</h3>
          <p>Managing brand campaigns, creative delivery, communication
            and execution across key partnerships.</p>
        </div>
      </article>

      <article>
        <span>04</span>
        <div>
          <h3>Newsletter & Travel Content</h3>
          <p>Managing 50+ newsletter editions and content for Bharat Army
            Travel.</p>
        </div>
      </article>
    </div>

    <div className="ba-responsibility-gallery">
      <div className="ba-gallery-item">
        <Image src="/images/clients/ba-work-01.jpg" alt="Team leadership" fill sizes="(max-width: 700px) 90vw, 40vw" />
      </div>

      <div className="ba-gallery-item">
        <Image src="/images/clients/ba-work-02.jpg" alt="Live match coverage" fill sizes="(max-width: 700px) 90vw, 40vw" />
      </div>

      <div className="ba-gallery-item">
        <Image src="/images/clients/ba-work-03.jpg" alt="Campaign management" fill sizes="(max-width: 700px) 90vw, 40vw" />
      </div>

      <div className="ba-gallery-item">
        <Image src="/images/clients/ba-work-04.jpg" alt="Newsletter and travel content" fill sizes="(max-width: 700px) 90vw, 40vw" />
      </div>
    </div>

  </div>
</section>

<section className="ba-results">
  <div className="section-pad">
    <div className="section-label">
      <span>03 / CAMPAIGN PERFORMANCE</span>
      <span>ICC MEN'S CRICKET WORLD CUP 2023 — CAMPAIGN PERIOD — 18 SEP – 18 NOV 2023</span>
    </div>

<div className="ba-results-heading">
  <h2>Numbers that<br /><span>made an impact.</span></h2>

  <div className="ba-results-aside">
    <p>
      A snapshot of the digital performance during the ICC Men's
      Cricket World Cup 2023 campaign.
    </p>

    <div className="ba-results-gallery">
      <div className="ba-results-image">
        <Image
          src="/images/clients/ba-insights-01.png"
          alt="Bharat Army social media campaign insights"
          fill
          sizes="(max-width: 700px) 50vw, 20vw"
        />
      </div>

      <div className="ba-results-image">
        <Image
          src="/images/clients/ba-insights-02.png"
          alt="Bharat Army social media performance analytics"
          fill
          sizes="(max-width: 700px) 50vw, 20vw"
        />
      </div>
    </div>
  </div>
</div>

    <div className="ba-results-grid">
      <div><strong>152M+</strong><span>TOTAL IMPRESSIONS</span></div>
      <div><strong>10.1M+</strong><span>TOTAL ENGAGEMENT</span></div>
      <div><strong>51.1M+</strong><span>VIDEO VIEWS</span></div>
      <div><strong>151.2K+</strong><span>FOLLOWER INCREASE</span></div>
    </div>

  </div>
</section>


<section className="ba-partners section-pad">
  <div className="section-label">
    <span>04 / BRAND COLLABORATIONS</span>
    <span>PARTNERSHIPS & CAMPAIGNS</span>
  </div>

  <div className="ba-partners-heading">
    <h2>Brands behind<br /><span>the campaigns.</span></h2>
    <p>
      Collaborating with leading brands across cricket's biggest
      moments and sporting platforms.
    </p>
  </div>

  <div className="ba-brand-grid">

    <article className="ba-brand-card">
      <div className="ba-brand-visual">
        <Image src="/images/clients/brands/cred.png" alt="CRED" fill />
        <span>01 / BRAND PARTNER</span>
      </div>
      <div className="ba-brand-info">
        <div>
          <h3>CRED</h3>
          <p>IPL 2023</p>
        </div>
        <span>2023</span>
      </div>
    </article>

    <article className="ba-brand-card">
      <div className="ba-brand-visual">
        <Image src="/images/clients/brands/hsbc.png" alt="HSBC" fill />
        <span>02 / BRAND PARTNER</span>
      </div>
      <div className="ba-brand-info">
        <div>
          <h3>HSBC</h3>
          <p>World Test Championship Final</p>
        </div>
        <span>2023</span>
      </div>
    </article>

    <article className="ba-brand-card">
      <div className="ba-brand-visual">
        <Image src="/images/clients/brands/thums-up.png" alt="Thums Up" fill />
        <span>03 / BRAND PARTNER</span>
      </div>
      <div className="ba-brand-info">
        <div>
          <h3>THUMS UP</h3>
          <p>Cricket World Cup</p>
        </div>
        <span>2023</span>
      </div>
    </article>

    <article className="ba-brand-card">
      <div className="ba-brand-visual">
        <Image src="/images/clients/brands/scapia.png" alt="Scapia" fill />
        <span>04 / BRAND PARTNER</span>
      </div>
      <div className="ba-brand-info">
        <div>
          <h3>SCAPIA</h3>
          <p>Cricket World Cup</p>
        </div>
        <span>2023</span>
      </div>
    </article>

    <article className="ba-brand-card">
      <div className="ba-brand-visual">
        <Image src="/images/clients/brands/airtel.png" alt="Airtel" fill />
        <span>05 / BRAND PARTNER</span>
      </div>
      <div className="ba-brand-info">
        <div>
          <h3>AIRTEL</h3>
          <p>Cricket World Cup</p>
        </div>
        <span>2023</span>
      </div>
    </article>

    <article className="ba-brand-card">
      <div className="ba-brand-visual">
        <Image src="/images/clients/brands/adidas.png" alt="Adidas" fill />
        <span>06 / BRAND PARTNER</span>
      </div>
      <div className="ba-brand-info">
        <div>
          <h3>ADIDAS</h3>
          <p>Cricket World Cup</p>
        </div>
        <span>2023</span>
      </div>
    </article>

    <article className="ba-brand-card">
      <div className="ba-brand-visual">
        <Image src="/images/clients/brands/confirmtkt.png" alt="ConfirmTKT" fill />
        <span>07 / BRAND PARTNER</span>
      </div>
      <div className="ba-brand-info">
        <div>
          <h3>ConfirmTKT</h3>
          <p>Cricket World Cup</p>
        </div>
        <span>2023</span>
      </div>
    </article>

  </div>
</section>


      <section className="ba-next section-pad">
        <span className="eyebrow">END OF PROJECT 001</span>
        <h2>LET'S BUILD<br /><span>WHAT'S NEXT.</span></h2>
        <Link href="/#client-carousel" className="text-link">
          BACK TO CLIENTS <ArrowUpRight size={16} />
        </Link>
      </section>

      <footer className="ba-footer">
        <span>UTHRA KUMAR R.</span>
        <span>SOCIAL MEDIA / STRATEGY / ACCOUNT MANAGEMENT</span>
        <Link href="/">BACK TO PORTFOLIO ↗</Link>
      </footer>
    </main>
  );
}
