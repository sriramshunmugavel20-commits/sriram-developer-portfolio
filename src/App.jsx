import React, { useState } from "react";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Download,
  Code2, Database, Server, Globe, ExternalLink, MapPin, BriefcaseBusiness,
  GraduationCap, Sparkles, Send, CheckCircle2
} from "lucide-react";

const skills = [
  { group: "Frontend", icon: Code2, items: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"] },
  { group: "Backend", icon: Server, items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
  { group: "Database & Tools", icon: Database, items: ["MongoDB", "Mongoose", "Git", "GitHub", "Postman"] },
];

const projects = [
  {
    number: "01",
    name: "Boeing Travels",
    type: "FULL-STACK TRAVEL MANAGEMENT",
    description: "A travel agency management platform for exploring destinations, viewing packages and vehicles, submitting enquiries, and managing bookings.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/sriramshunmugavel20-commits/Boeing-Travel-Agency",
    featured: true,
  },
  
];

const navItems = [["Home", "#home"], ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Experience", "#experience"], ["Contact", "#contact"]];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "sriramshunmugavel20@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Sriram home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SRIRAM<span>DEV</span></span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>N. Sriram<br /><span>Shunmugavel.</span></h1>
            <h2>Building digital experiences<br className="desktop-break" /> with <span className="accent-text">modern web technologies.</span></h2>
            <p className="hero-description">I'm an aspiring <strong>MERN Stack Developer</strong> passionate about creating responsive, user-friendly web applications and solving real-world problems through code.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <Mail size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/sriramshunmugavel20-commits" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={`mailto:${email}`} aria-label="Email"><Mail /></a>
              <span className="social-line" />
              <span className="mono muted">TAMIL NADU, INDIA</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="code-card">
              <div className="code-top"><div className="window-dots"><i /><i /><i /></div><span>developer.js</span><span className="code-top-right">● LIVE</span></div>
              <div className="code-content">
                <div><span className="ln">01</span><span className="purple">const</span> <span className="blue">developer</span> = {"{"}</div>
                <div><span className="ln">02</span>  name: <span className="green">'Sriram'</span>,</div>
                <div><span className="ln">03</span>  role: <span className="green">'MERN Developer'</span>,</div>
                <div><span className="ln">04</span>  passion: <span className="green">'Building'</span>,</div>
                <div><span className="ln">05</span>  learning: <span className="green">'Always'</span></div>
                <div><span className="ln">06</span>{"}"};</div>
                <div className="code-gap"><span className="ln">07</span><span className="purple">function</span> <span className="blue">createImpact</span>() {"{"}</div>
                <div><span className="ln">08</span>  <span className="purple">return</span> <span className="green">'Ideas into reality'</span>;</div>
                <div><span className="ln">09</span>{"}"}</div>
                <div className="code-cursor"><span className="ln">10</span><span className="cursor" /></div>
              </div>
              <div className="code-footer"><span><span className="footer-pulse" /> JavaScript</span><span>UTF-8&nbsp;&nbsp; Spaces: 2</span></div>
            </div>
            <div className="float-chip chip-react"><span>⚛</span> React.js</div>
            <div className="float-chip chip-node"><span>⬡</span> Node.js</div>
            <div className="hero-stamp"><Sparkles size={15} /> CURIOUS BY NATURE</div>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-wrap section-block" id="about">
          <div className="section-heading"><p className="eyebrow">01 / ABOUT ME</p><h2>A little about <span>my journey.</span></h2></div>
          <div className="about-grid">
            <div className="about-lead"><span className="quote-mark">“</span><p>I enjoy turning ideas into practical, well-designed web applications.</p></div>
            <div className="about-body">
              <p>I'm a computer science graduate focused on full-stack web development. I work with the MERN stack to build complete web experiences — from clean, responsive interfaces to backend APIs and database integration.</p>
              <p>My goal is to keep learning, collaborate with a development team, and contribute to products that make a useful difference.</p>
              <div className="about-facts">
                <div><GraduationCap /><span><b>B.Sc. Computer Science</b><small>Manonmaniam Sundaranar University</small></span></div>
                <div><MapPin /><span><b>Tamil Nadu, India</b><small>Open to suitable opportunities</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-heading"><p className="eyebrow">02 / WHAT I WORK WITH</p><h2>My technical <span>toolkit.</span></h2><p className="section-subtitle">The technologies I use to design, build and improve web applications.</p></div>
          <div className="skills-grid">
            {skills.map(({ group, icon: Icon, items }, index) => <article className="skill-card" key={group}><div className="skill-card-top"><span className="skill-icon"><Icon /></span><span className="mono">0{index + 1}</span></div><h3>{group}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="section-heading heading-row"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Projects I've <span>built.</span></h2></div><a className="text-link" href="https://github.com/sriramshunmugavel20-commits" target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={16} /></a></div>
          <div className="projects-list">
            {projects.map(project => <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.number}>
              <div className="project-number mono">{project.number}</div>
              <div className="project-main"><p className="eyebrow">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}><ArrowUpRight /></a>
              {project.featured && <div className="project-watermark">BT<span>.</span></div>}
            </article>)}
          </div>
          <p className="note-line"><span>*</span> Project links open the source repositories. Add a deployed demo link when your project is hosted.</p>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-heading"><p className="eyebrow">04 / BACKGROUND</p><h2>Education & <span>experience.</span></h2></div>
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-marker"><BriefcaseBusiness size={17} /></div><div className="timeline-content"><div className="timeline-meta"><span>OCT 2023 — OCT 2025</span><span className="timeline-type">PROFESSIONAL EXPERIENCE</span></div><h3>Accounts & Administration Executive</h3><h4>Ferron Steel Pvt Ltd</h4><p>Worked with Tally ERP and Advanced Excel, supporting purchase and sales entries, invoicing, GST-related tasks, and dispatch documentation.</p></div></div>
            <div className="timeline-item"><div className="timeline-marker"><BriefcaseBusiness size={17} /></div><div className="timeline-content"><div className="timeline-meta"><span>FEB 2023 — OCT 2023</span><span className="timeline-type">PROFESSIONAL EXPERIENCE</span></div><h3>Admin Executive</h3><h4>Unitech</h4><p>Supported day-to-day administrative operations and coordination.</p></div></div>
            <div className="timeline-item"><div className="timeline-marker"><GraduationCap size={17} /></div><div className="timeline-content"><div className="timeline-meta"><span>EDUCATION</span><span className="timeline-type">ACADEMIC</span></div><h3>B.Sc. Computer Science</h3><h4>Manonmaniam Sundaranar University</h4><p>Graduated with 8.0 CGPA.</p></div></div>
            <div className="timeline-item"><div className="timeline-marker"><Code2 size={17} /></div><div className="timeline-content"><div className="timeline-meta"><span>PROFESSIONAL TRAINING</span><span className="timeline-type">FULL-STACK DEVELOPMENT</span></div><h3>PMKVY 4.0 — Full Stack Web Developer</h3><h4>Short Term Training</h4><p>Focused training in full-stack web development fundamentals and practical skills.</p></div></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <p className="eyebrow">05 / LET'S CONNECT</p>
            <h2>Have a project or<br />an opportunity in <span>mind?</span></h2>
            <p className="contact-copy">I'm interested in entry-level and junior developer opportunities where I can contribute, learn and grow with a team.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=sriramshunmugavel20@gmail.com&su=Job%20Opportunity" target="_blank" rel="noopener noreferrer">
                Send me an email 
                <Send size={16} /></a>
                <button className="button button-ghost" onClick={copyEmail}>
                  {copied ? <><CheckCircle2 size={16} /> Copied!</> : <><Mail size={16} /> Copy email</>}
                  </button>
                  </div>
            <div className="contact-email mono">{email}</div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SRIRAM<span>DEV</span></span></a><p>Designed & built with care by Sriram.</p><div className="footer-links"><a href="https://github.com/sriramshunmugavel20-commits" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href={`mailto:${email}`} aria-label="Email"><Mail /></a></div><span className="copyright mono">© {new Date().getFullYear()} ALL RIGHTS RESERVED</span></footer>
    </div>
  );
}

export default App;