
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
            <p>Turning fan passion into powerful digital experiences.</p>
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
          <h2>Beyond the<br />game. <span>Beyond the</span><br />boundaries.</h2>

          <div className="ba-overview-copy">
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
      </section>

      <section className="ba-results">
        <div className="section-pad">
          <div className="section-label">
            <span>03 / CAMPAIGN PERFORMANCE</span>
            <span>ICC MEN'S CRICKET WORLD CUP 2023</span>
          </div>

          <div className="ba-results-heading">
            <h2>Numbers that<br /><span>made an impact.</span></h2>
            <p>A snapshot of the digital performance during the ICC Men's
              Cricket World Cup 2023 campaign.</p>
          </div>

          <div className="ba-results-grid">
            <div><strong>152M+</strong><span>TOTAL IMPRESSIONS</span></div>
            <div><strong>10.1M+</strong><span>TOTAL ENGAGEMENT</span></div>
            <div><strong>51.1M+</strong><span>VIDEO VIEWS</span></div>
            <div><strong>151.2K+</strong><span>FOLLOWER INCREASE</span></div>
          </div>
          <p className="ba-period">CAMPAIGN PERIOD / 18 SEP – 18 NOV 2023</p>
        </div>
      </section>

      <section className="ba-partners section-pad">
        <div className="section-label">
          <span>04 / BRAND COLLABORATIONS</span>
          <span>PARTNERSHIPS & CAMPAIGNS</span>
        </div>
        <h2>Working with<br /><span>leading brands.</span></h2>
        <div className="ba-brand-list">
          <span>THUMS UP</span>
          <span>SCAPIA</span>
          <span>AIRTEL</span>
          <span>HSBC</span>
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
