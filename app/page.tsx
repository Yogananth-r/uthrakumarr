

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';

const clients = [
  { no: '01', name: 'THE BHARAT ARMY', image: "/images/clients/bharat-army.png", role: 'PROJECT LEAD', type: 'CRICKET · FAN COMMUNITY', desc: 'Led a cross-functional team of seven across social, design and video. Oversaw match-day publishing, campaigns, client communication, Bharat Army Travel content, and 50+ newsletter editions.', tags: ['Project leadership', 'Live match coverage', 'Brand campaigns', 'Newsletters'] },
  { no: '02', name: 'FC MADRAS',image: "/images/clients/bharat-army.png", role: 'SOCIAL MEDIA MANAGER', type: 'FOOTBALL · ACADEMY', desc: 'Built football-focused storytelling around academy activities, player development and club milestones, with live coverage across AIFF Elite, Junior and Sub-Junior League campaigns.', tags: ['Social strategy', 'Live coverage', 'Football storytelling'] },
  { no: '03', name: 'BHARAT RANGERS',image: "/images/clients/bharat-army.png", role: 'SOCIAL MEDIA MANAGER · ON-GROUND', type: 'CRICKET · VPL SEASON 2', desc: 'Delivered stadium-side match coverage, coordinated photo and video crews, and created player-led content and campaign assets during the team’s runners-up campaign.', tags: ['On-ground production', 'Match-day content', 'Brand collaborations'] },
  { no: '04', name: 'SQUASH RACKETS FEDERATION OF INDIA', image: "/images/clients/bharat-army.png",role: 'SOCIAL MEDIA MANAGER · ON-GROUND', type: 'SQUASH · SDAT SQUASH WORLD CUP 2025', desc: 'Covered India’s title-winning Squash World Cup campaign, created player content with international athletes, and managed ongoing digital communication and tournament coverage.', tags: ['Tournament coverage', 'Player interviews', 'Social strategy'] },
  { no: '05', name: 'ROUNDGLASS SPORTS', role: 'SOCIAL MEDIA MANAGER',image: "/images/clients/bharat-army.png", type: 'MULTI-SPORT · PUNJAB HOCKEY LEAGUE', desc: 'Managed sports storytelling and live event content across athlete and league initiatives, including match updates, brand activity and on-ground coordination for Punjab Hockey League 2025.', tags: ['Athlete storytelling', 'Live coverage', 'Event execution'] },
  { no: '06', name: 'DINDIGUL DISTRICT ATHLETIC ASSOCIATION',image: "/images/clients/bharat-army.png", role: 'SOCIAL MEDIA MANAGER · ON-GROUND', type: 'ATHLETICS · 2026 CHAMPIONSHIP', desc: 'Led pre-event, live-event and post-event social coverage for the 40th Tamil Nadu Inter-District Junior Athletic Championship, coordinating content and event branding.', tags: ['Event coverage', 'Reels & highlights', '17K+ followers in 10 days'] },
  { no: '07', name: 'TNPL', role: 'SOCIAL MEDIA MANAGEMENT',image: "/images/clients/bharat-army.png", type: 'NELLAl ROYAL KINGS · TRICHY GRAND CHOLAS', desc: 'Managed social media strategy, content planning and creative execution, including live match coverage, real-time updates and original content tailored to each team’s identity.', tags: ['Team identity', 'Live match coverage', 'Fan engagement'] },
  { no: '08', name: 'OTHER SPORTING CLIENTS',image: "/images/clients/bharat-army.png", role: 'SOCIAL MEDIA & CONTENT', type: 'MULTIPLE TEAMS & BRANDS', desc: 'Managed strategy, content planning and creative execution for The Performance Doctor, Hyderabad Vikings, Dilli Dilwale, Fantasy Akhada, Chennai Smashers and Ruby White Town Legends.', tags: ['Content planning', 'Original content IPs', 'Tournament execution'] },
];

const campaigns = [
  { label: 'THE BHARAT ARMY', title: 'Cricket Comes Home', event: 'ICC MEN’S CRICKET WORLD CUP 2023', number: '01' },
  { label: 'THE BHARAT ARMY', title: 'Island Showdown', event: 'INDIA TOUR OF WEST INDIES 2023', number: '02' },
  { label: 'THE BHARAT ARMY', title: 'Dublin Showdown', event: 'INDIA TOUR OF IRELAND 2023', number: '03' },
  { label: 'THE BHARAT ARMY', title: 'Battle Royal', event: 'ENGLAND TOUR OF INDIA 2024', number: '04' },
  { label: 'THE BHARAT ARMY', title: 'Balla Chelga Cup Ayega', event: 'ICC MEN’S T20 WORLD CUP 2024', number: '05' },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeClient, setActiveClient] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let value = 0;
    const timer = window.setInterval(() => {
      value = Math.min(value + Math.floor(Math.random() * 13) + 7, 100);
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(timer);
        window.setTimeout(() => setLoading(false), 450);
      }
    }, 75);
    return () => window.clearInterval(timer);
  }, []);

  const changeClient = (direction: number) => setActiveClient((current) => (current + direction + clients.length) % clients.length);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={`preloader ${loading ? '' : 'preloader--done'}`} aria-hidden={!loading}>
        <div className="preloader-top"><span>Uthra Kumar® / PORTFOLIO</span><span>INDEPENDENT DIGITAL PRACTICE</span></div>
        <div className="preloader-center"><span className="preloader-kicker">SOCIAL MEDIA · STRATEGY · ACCOUNT MANAGEMENT</span><div className="preloader-count">{String(progress).padStart(3, '0')}<small>%</small></div><div className="progress-track"><span style={{ width: `${progress}%` }} /></div></div>
        <div className="preloader-bottom"><span>LOADING SELECTED WORK</span><span>CHENNAI / INDIA</span></div>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}>Uthra Kumar<span>®</span></a>
        <nav className={menuOpen ? 'nav nav--open' : 'nav'}>
          <a href="#about" onClick={closeMenu}>ABOUT</a><a href="#expertise" onClick={closeMenu}>EXPERTISE</a><a href="#work" onClick={closeMenu}>SELECTED WORK</a><a href="#experience" onClick={closeMenu}>EXPERIENCE</a><a href="#contact" onClick={closeMenu}>CONTACT <ArrowUpRight size={12} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <div className="header-status"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</div>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-meta"><span>PORTFOLIO / 2026</span></div>
          <div className="hero-title-wrap"><p className="eyebrow">SOCIAL MEDIA / STRATEGY / ACCOUNT MANAGEMENT</p><h1>UTHRA<br /><span>KUMAR</span><sup></sup></h1><div className="hero-index"></div></div>
          <div
          className="hero-portrait-panel"
          style={{
          position: 'absolute',
          top: '17%',
          right: '7.5%',
          width: '27%',
          height: '62%',
          boxSizing: 'border-box',
          }}
          >
          <div
          style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          background: '#171717',
          }}
          >
          <Image
          src="/images/uthra.jpg"
          alt="Portrait of Uthra Kumar"
          fill
          priority
          sizes="(max-width: 768px) 80vw, 27vw"
          style={{
          objectFit: 'cover',
          objectPosition: 'center top',
          filter: 'grayscale(100%)',
          opacity: 0.94,
          }}
          />
          </div>
          </div>
          <div className="hero-bottom"><div className="hero-statement">Turning ideas<br />into <span>impact.</span></div><div className="hero-intro"><p>A social media professional combining brand strategy, creative storytelling, client management, and team leadership to drive meaningful growth.</p><a className="text-link" href="#work">EXPLORE SELECTED WORK <ArrowDownRight size={16} /></a></div><div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div></div>
        </section>

            <section className="ticker" aria-label="Areas of focus">
          <div className="ticker-track">
            {[1, 2].map((group) => (
              <div className="ticker-group" key={group}>
                <span>STRATEGY</span><i>✳</i>
                <span>STORYTELLING</span><i>✳</i>
                <span>SPORTS CULTURE</span><i>✳</i>
                <span>CAMPAIGN DELIVERY</span><i>✳</i>
              </div>
            ))}
          </div>
        </section>

        <section className="intro section-pad" id="about"><div className="section-label"><span>01 / INTRODUCTION</span><span>THE PERSON BEHIND THE POSTS</span></div><div className="intro-grid"><h2>A little about<br />my <span>journey.</span></h2><div className="intro-copy"><p className="lead">I’m a social media professional with 5+ years of experience in social media strategy, account management, content development, and campaign execution.</p><p>My experience spans sports, entertainment, travel, lifestyle, and regional marketing, working across client-facing and in-house projects. I’ve worked on brand partnerships, digital campaigns, content strategies, and audience engagement initiatives that bring brands closer to their communities.</p><p>Beyond content creation, I bring experience in managing client relationships, coordinating creative teams, planning content calendars, and overseeing execution from brief to delivery.</p><p>My approach combines strategic thinking, creative storytelling, and performance insights to build meaningful digital experiences and help brands grow.</p></div></div><div className="snapshot-grid"></div></section>

        <section className="expertise section-pad" id="expertise"><div className="section-label"><span>02 / CAPABILITIES</span><span>WHERE STRATEGY MEETS EXECUTION</span></div><div className="section-heading"><h2>Built to think.<br /><span>Ready to deliver.</span></h2><p>A combination of strategic thinking, creative development, performance analysis, and people management to build effective social media experiences.</p></div><div className="expertise-list"><article><span>01</span><div><h3>Social Media Strategy</h3><p>Platform strategy, audience understanding, content planning, brand positioning, and campaign roadmaps.</p></div><b>STRATEGY</b></article><article><span>02</span><div><h3>Content & Creative Development</h3><p>Creative concepts, content pillars, campaign ideation, reels, storytelling, and platform-specific content.</p></div><b>CREATIVE</b></article><article><span>03</span><div><h3>Campaign & Brand Partnerships</h3><p>Integrated campaigns, brand collaborations, sponsored content, campaign coordination, and delivery.</p></div><b>CAMPAIGNS</b></article><article><span>04</span><div><h3>Analytics & Performance</h3><p>Reach, impressions, video views, engagement analysis, reporting, and performance-led optimisation.</p></div><b>INSIGHTS</b></article><article><span>05</span><div><h3>Account & Client Management</h3><p>Client communication, stakeholder management, creative briefs, approvals, timelines, and delivery coordination.</p></div><b>RELATIONSHIPS</b></article><article><span>06</span><div><h3>Team Leadership & Execution</h3><p>Team coordination, task delegation, workflow management, cross-functional collaboration, and quality control.</p></div><b>DELIVERY</b></article></div></section>

        <section className="work section-pad" id="work"><div className="section-label"><span>03 / SELECTED WORK</span><span>SPORTS · PEOPLE · PERFORMANCE</span></div><div className="work-head"><div><p className="eyebrow">A FEW STORIES FROM THE FIELD</p><h2>Work that<br /><span>moves people.</span></h2></div><div className="work-note"><p>From always-on social to high-pressure live coverage, each project is shaped by its audience, its moment, and the story it needs to tell.</p></div></div>
          
          {/* comment */}
          {/* <div className="featured-project">
            <div className="featured-art">
              <div className="art-grid"/>
              <span className="art-label">FEATURED PROJECT / 001</span>
              <div className="art-monogram">BA<span>®</span></div>
              <div className="art-bottom"><span>FAN COMMUNITY</span><span>CRICKET / GLOBAL</span></div>
              <div className="art-vertical">PROJECT LEADERSHIP · LIVE COVERAGE</div>
              </div>
            <div className="featured-details"><div className="featured-top"><span>01 / 08</span><span>PROJECT LEAD</span></div><h3>THE<br />BHARAT<br /><span>ARMY.</span></h3><p>Leading content, people and delivery for the global supporter group of the Indian cricket team.</p><div className="featured-stats"><div><strong>07</strong><span>TEAM MEMBERS</span></div><div><strong>50+</strong><span>NEWSLETTER EDITIONS</span></div><div><strong>05</strong><span>KEY CAMPAIGNS</span></div></div><a href="#client-carousel" className="text-link">EXPLORE PROJECT <ArrowDownRight size={16} /></a></div></div>  */}



          {/* <div className="client-carousel" id="client-carousel"><div className="carousel-top"><span>{String(activeClient + 1).padStart(2, '0')} / {String(clients.length).padStart(2, '0')}</span></div><div className="client-card">
            
            {/* comment */}
            {/* <div className="client-card-side"><span>{clients[activeClient].no} / CLIENT</span><div className="client-graphic"><span>{clients[activeClient].name.split(' ').map((word) => word[0]).join('').slice(0, 4)}</span><small>SELECTED WORK</small></div><span>{clients[activeClient].type}</span></div>  */}
            

            {/* <div className="client-card-side">
              <span>{clients[activeClient].no} / CLIENT</span>

              <div className="client-image">
                <Image
                  src={clients[activeClient].image}
                  alt={`${clients[activeClient].name} client`}
                  fill
                  sizes="(max-width: 640px) 90vw, 35vw"
                  className="client-image-photo"
                />
                <span className="client-image-label">SELECTED WORK</span>
              </div>

              <span>{clients[activeClient].type}</span>
            </div>

            
            <div className="client-card-main"><span className="eyebrow">{clients[activeClient].role}</span><h3>{clients[activeClient].name}</h3><p>{clients[activeClient].desc}</p><div className="tag-list">{clients[activeClient].tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="carousel-controls"><div className="dots">{clients.map((client, i) => <button key={client.no} aria-label={`Show ${client.name}`} className={i === activeClient ? 'dot dot--active' : 'dot'} onClick={() => setActiveClient(i)} />)}</div><div className="arrows"><button aria-label="Previous client" onClick={() => changeClient(-1)}><ArrowLeft size={18} /></button><button aria-label="Next client" onClick={() => changeClient(1)}><ArrowRight size={18} /></button></div></div></div></div></div> */}
          {/* <div className="campaigns"><div className="campaigns-head"><h3>Campaigns with a point of view.</h3><p>Selected campaign identities developed for major cricket moments.</p></div><div className="campaign-grid">{campaigns.map((campaign) => <article key={campaign.number} className="campaign-card"><div className="campaign-graphic"><span>{campaign.number}</span><b>{campaign.title.split(' ').map((word) => word[0]).join('')}</b><i>CAMPAIGN / BA</i></div><div className="campaign-info"><span>{campaign.label}</span><h4>{campaign.title}</h4><p>{campaign.event}</p></div></article>)}</div><div className="brand-collabs"><span>BRAND COLLABORATIONS / THE BHARAT ARMY</span><div><b>CRED</b><b>HSBC</b><b>THUMS UP</b><b>SCAPIA</b><b>AIRTEL</b><b>adidas</b><b>ConfirmTkt</b></div></div></div> */}



{/* <div className="client-carousel" id="client-carousel">
  <div className="carousel-top">
    <span>
      {String(activeClient + 1).padStart(2, "0")} / {String(clients.length).padStart(2, "0")}
    </span>
  </div>

  {clients[activeClient].featured ? (
    <div className="featured-project">
      <div className="featured-art">
        <Image
          src={clients[activeClient].image}
          alt={clients[activeClient].name}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="featured-client-image"
        />
        <div className="art-grid" />
        <span className="art-label">FEATURED PROJECT / 001</span>
        <div className="art-bottom">
          <span>FAN COMMUNITY</span>
          <span>CRICKET / GLOBAL</span>
        </div>
        <div className="art-vertical">
          PROJECT LEADERSHIP · LIVE COVERAGE
        </div>
      </div>

      <div className="featured-details">
        <div className="featured-top">
          <span>{clients[activeClient].no} / CLIENT</span>
          <span>{clients[activeClient].role}</span>
        </div>

        <h3>THE<br />BHARAT<br /><span>ARMY.</span></h3>

        <p>{clients[activeClient].desc}</p>

        <div className="featured-stats">
          <div><strong>07</strong><span>TEAM MEMBERS</span></div>
          <div><strong>50+</strong><span>NEWSLETTER EDITIONS</span></div>
          <div><strong>05</strong><span>KEY CAMPAIGNS</span></div>
        </div>

        <div className="tag-list">
          {clients[activeClient].tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {clients[activeClient].no === "01" && (
            <a href="/projects/bharat-army" className="text-link">
              EXPLORE PROJECT <ArrowUpRight size={16} />
            </a>
          )}

        <div className="carousel-controls">
          <div className="dots">
            {clients.map((client, i) => (
              <button
                key={client.no}
                aria-label={`Show ${client.name}`}
                className={i === activeClient ? "dot dot--active" : "dot"}
                onClick={() => setActiveClient(i)}
              />
            ))}
          </div>

          <div className="arrows">
            <button aria-label="Previous client" onClick={() => changeClient(-1)}>
              <ArrowLeft size={18} />
            </button>
            <button aria-label="Next client" onClick={() => changeClient(1)}>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="client-card">
      <div className="client-card-side">
        <span>{clients[activeClient].no} / CLIENT</span>

        <div className="client-image">
          <Image
            src={clients[activeClient].image}
            alt={`${clients[activeClient].name} client`}
            fill
            sizes="(max-width: 640px) 90vw, 35vw"
            className="client-image-photo"
          />
          <span className="client-image-label">SELECTED WORK</span>
        </div>

        <span>{clients[activeClient].type}</span>
      </div>

      <div className="client-card-main">
        <span className="eyebrow">{clients[activeClient].role}</span>
        <h3>{clients[activeClient].name}</h3>
        <p>{clients[activeClient].desc}</p>

        <div className="tag-list">
          {clients[activeClient].tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="carousel-controls">
          <div className="dots">
            {clients.map((client, i) => (
              <button
                key={client.no}
                aria-label={`Show ${client.name}`}
                className={i === activeClient ? "dot dot--active" : "dot"}
                onClick={() => setActiveClient(i)}
              />
            ))}
          </div>

          <div className="arrows">
            <button aria-label="Previous client" onClick={() => changeClient(-1)}>
              <ArrowLeft size={18} />
            </button>
            <button aria-label="Next client" onClick={() => changeClient(1)}>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</div> */}

<div className="client-carousel" id="client-carousel">
  <div className="carousel-top">
    <span>
      {String(activeClient + 1).padStart(2, "0")} / {String(clients.length).padStart(2, "0")}
    </span>
  </div>

  <div className="client-card">
    <div className="client-card-side">
      <span>{clients[activeClient].no} / CLIENT</span>

      <div className="client-image">
        <Image
          src={clients[activeClient].image}
          alt={`${clients[activeClient].name} client`}
          fill
          sizes="(max-width: 640px) 90vw, 35vw"
          className="client-image-photo"
        />
        <span className="client-image-label">SELECTED WORK</span>
      </div>

      <span>{clients[activeClient].type}</span>
    </div>

    <div className="client-card-main">
      <span className="eyebrow">{clients[activeClient].role}</span>
      <h3>{clients[activeClient].name}</h3>
      <p>{clients[activeClient].desc}</p>

      <div className="tag-list">
        {clients[activeClient].tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      {clients[activeClient].no === "01" && (
        <a href="/projects/bharat-army" className="text-link">
          EXPLORE PROJECT <ArrowUpRight size={16} />
        </a>
      )}

      <div className="carousel-controls">
        <div className="dots">
          {clients.map((client, i) => (
            <button
              key={client.no}
              aria-label={`Show ${client.name}`}
              className={i === activeClient ? "dot dot--active" : "dot"}
              onClick={() => setActiveClient(i)}
            />
          ))}
        </div>

        <div className="arrows">
          <button aria-label="Previous client" onClick={() => changeClient(-1)}>
            <ArrowLeft size={18} />
          </button>
          <button aria-label="Next client" onClick={() => changeClient(1)}>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>




        </section>

        <section className="metrics section-pad"><div className="section-label"><span>04 / CAMPAIGN PERFORMANCE</span><span>NUMBERS THAT TELL THE STORY</span></div><div className="section-heading"><h2>Creative work.<br /><span>Real impact.</span></h2><p>Campaigns built around audience engagement, content execution, and measurable digital impact.</p></div><div className="case-grid"><article className="case-card case-card--dark"><div className="case-top"><span>CASE STUDY / 01</span><span>18 SEP — 18 NOV 2023</span></div><p className="eyebrow">THE BHARAT ARMY</p><h3>ICC MEN’S CRICKET<br />WORLD CUP 2023</h3><div className="metric-grid"><div><strong>152M<span>+</span></strong><small>IMPRESSIONS</small></div><div><strong>10.1M<span>+</span></strong><small>ENGAGEMENTS</small></div><div><strong>51.1M<span>+</span></strong><small>VIDEO VIEWS</small></div><div><strong>151.2K<span>+</span></strong><small>FOLLOWER INCREASE</small></div></div><div className="image-placeholder-row"><div>CAMPAIGN IMAGE / 01</div><div>CAMPAIGN IMAGE / 02</div><div>CAMPAIGN IMAGE / 03</div></div></article><article className="case-card"><div className="case-top"><span>CASE STUDY / 02</span><span>25 SEP — 06 OCT 2026</span></div><p className="eyebrow">DINDIGUL DISTRICT ATHLETIC ASSOCIATION</p><h3>40TH TAMIL NADU<br />INTER-DISTRICT JUNIOR<br />ATHLETIC CHAMPIONSHIP</h3><div className="metric-grid"><div><strong>5.1M<span>+</span></strong><small>IMPRESSIONS</small></div><div><strong>204K<span>+</span></strong><small>ENGAGEMENTS</small></div><div><strong>17.5K<span>+</span></strong><small>FOLLOWER INCREASE</small></div><div><strong>18K</strong><small>TOTAL FOLLOWERS</small></div></div><div className="image-placeholder-row"><div>EVENT IMAGE / 01</div><div>EVENT IMAGE / 02</div><div>EVENT IMAGE / 03</div></div></article></div><p className="asset-note">IMAGE AREAS ARE PLACEHOLDERS — PROJECT PHOTOGRAPHY AND CREATIVE ASSETS TO BE ADDED.</p></section>

        <section className="experience section-pad" id="experience"><div className="section-label"><span>05 / EXPERIENCE</span><span>THE JOURNEY SO FAR</span></div><div className="section-heading"><h2>Experience that<br /><span>connects the dots.</span></h2><p>From technology operations to social media and account leadership, building experience across technical support, digital marketing, campaign execution, and team coordination.</p></div><div className="timeline"><article><div className="timeline-date">NOV 2020 — AUG 2022</div><div className="timeline-content"><span>01 / TECHNOLOGY</span><h3>Cognizant Technology Solutions</h3><h4>Programmer Analyst – IT Engineer</h4><p>Supported IT operations, job scheduling, incident resolution, and database-related implementations.</p><ul><li>Supervised AutoSys jobs to maintain operational continuity and timely completion.</li><li>Resolved customer queries and incidents through ServiceNow and Remedy.</li><li>Collaborated with developers on database code integration to support system performance.</li></ul></div></article><article><div className="timeline-date">AUG 2022 — MAR 2023</div><div className="timeline-content"><span>02 / DIGITAL MARKETING</span><h3>Tiny Dot Foods</h3><h4>Social Media Manager</h4><p>Managed social media strategy and digital marketing activities to strengthen brand visibility, customer engagement, and product discovery.</p><ul><li>Planned monthly content calendars, executed campaigns, and coordinated photoshoots.</li><li>Managed brand presence across e-commerce and digital platforms, including Amazon and Google Business Profile.</li><li>Oversaw content creation and used analytics to evaluate and optimise campaigns.</li></ul></div></article><article className="timeline-featured"><div className="timeline-date">MAR 2023 — OCT 2026</div><div className="timeline-content"><span>03 / SOCIAL · CAMPAIGNS · LEADERSHIP</span><h3>Sportwalk</h3><h4>Senior Social Media Executive</h4><p>Progressed from social media management into greater ownership of client accounts, campaign delivery, and team coordination, bridging client requirements with creative execution.</p><div className="responsibility-grid"><div><b>ACCOUNT & CLIENT MANAGEMENT</b><p>Client communication, stakeholder coordination, and timely delivery.</p></div><div><b>SOCIAL MEDIA STRATEGY</b><p>Content calendars, campaign planning, and daily platform management.</p></div><div><b>TEAM LEADERSHIP</b><p>Creative team alignment, timelines, deliverables, and quality control.</p></div><div><b>CAMPAIGN & EVENT EXECUTION</b><p>On-ground activations, professional shoots, and live event coverage.</p></div><div><b>PAID MEDIA & PERFORMANCE</b><p>Meta advertising, performance tracking, and campaign optimisation.</p></div></div><div className="account-list"><span>SELECTED ACCOUNTS</span><p>The Bharat Army · TNPL · Nellai Royal Kings · Trichy Grand Cholas · Roundglass Sports · Punjab FC · Southern Street Premier League · SRFI · FC Madras</p></div></div></article></div></section>

        <section className="education section-pad"><div className="section-label"><span>06 / EDUCATION</span><span>ACADEMIC FOUNDATION</span></div><div className="education-row"><div><span>2020 / GRADUATE</span><h2>Er. Perumal Manimekalai<br /><span>College of Engineering</span></h2></div><div className="education-detail"><span>DEGREE SPECIALISATION</span><strong>Mechanical Engineering</strong><span>YEAR OF PASSING</span><strong>2020</strong></div></div></section>

        <section className="contact section-pad" id="contact"><div className="section-label"><span>07 / GET IN TOUCH</span><span>OPEN TO WHAT’S NEXT</span></div><div className="contact-main"><p className="eyebrow">HAVE A GOOD PROJECT IN MIND?</p><h2>Let’s make<br />something <span>matter.</span></h2><a className="contact-email" href="mailto:uthrakumar145@gmail.com">uthrakumar145@gmail.com <ArrowUpRight /></a></div><div className="contact-bottom"><div><span>NAME</span><p>Uthra Kumar R.</p></div><div><span>PHONE</span><a href="tel:9795096968">+91 97950 96968</a></div><div><span>LINKEDIN</span><a href="https://www.linkedin.com/in/uthra-kumar" target="_blank" rel="noreferrer">LET’S CONNECT <ArrowUpRight size={14} /></a></div><div><span>BASED IN</span><p>INDIA</p></div></div></section>
      </main>
      <footer className="site-footer"><a className="wordmark" href="#home">Uthra Kumar<span>®</span></a><span>STRATEGY WITH INTENT. EXECUTION WITH IMPACT.</span><a href="#home">BACK TO TOP ↑</a><span>© 2026 UTHRA KUMAR R.</span></footer>
    </>
  );
}