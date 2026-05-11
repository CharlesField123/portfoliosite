import { useState, useEffect, useRef } from 'react';

const resumePdf = import.meta.env.BASE_URL + 'CharlesField_Resume.pdf';

/* ──────────────────────────────────────────────
   HOOKS
────────────────────────────────────────────── */
function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ──────────────────────────────────────────────
   NAV
────────────────────────────────────────────── */
function Nav() {
  const scrolled = useScrolled();
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <span className="nav-logo">cf.dev</span>
        <ul className="nav-links">
          {['About', 'Skills', 'Experience', 'Projects', 'Resume', 'Contact'].map(s => (
            <li key={s}><a href={`#${s.toLowerCase()}`}>{s}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ──────────────────────────────────────────────
   HERO
────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div>
            <div className="hero-badge">
              <span className="dot" />
              Open to Co-op &amp; AI Engineering Roles
            </div>
            <h1 className="hero-name">
              Charles<br />
              <span className="gradient-text">Field</span>
            </h1>
            <p className="hero-title">
              AI-Driven Engineer &amp; <span>LLM Systems Builder</span>
            </p>
            <p className="hero-desc">
              Software engineering student at <strong style={{ color: 'var(--accent-blue)' }}>NJIT</strong> building
              intelligent systems at the intersection of AI and full-stack engineering — from autonomous agents
              and prompt pipelines to production web apps powered by LLMs.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">See AI Projects ↓</a>
              <a
                href="https://github.com/charlesfield123"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-github"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
          </div>

          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring">
              <img
                className="hero-avatar-img"
                src="https://media.licdn.com/dms/image/v2/C4D03AQEPfa7KKBspDw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1611591621622?e=1779926400&v=beta&t=-DdVWv4TQ9vyl90l9TagaZBP2uR9lZ0joUI1FyGcr8g"
                alt="Charles Field"
              />
            </div>
            <div className="hero-float-badge badge-1">
              <div className="float-badge-label">Focus</div>
              <div className="float-badge-value">AI Engineering</div>
            </div>
            <div className="hero-float-badge badge-2">
              <div className="float-badge-label">University</div>
              <div className="float-badge-value">NJIT 🎓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   ABOUT
────────────────────────────────────────────── */
function About() {
  const ref = useFadeIn();
  return (
    <section id="about" style={{ paddingTop: '80px' }}>
      <div className="container">
        <div className="fade-up" ref={ref}>
          <div className="section-tag">✦ About Me</div>
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">
                Engineering the <span className="gradient-text">AI-powered</span> future
              </h2>
              <p>
                I'm a software engineering student at the <strong>New Jersey Institute of Technology</strong> with a
                background in computer science from Ocean County College. My core drive is building
                systems where AI does the heavy lifting.
              </p>
              <p>
                I design and ship autonomous agents, LLM-powered pipelines, and intelligent full-stack
                applications — turning cutting-edge model capabilities into real, production-ready tools.
              </p>
              <p>
                Based in <strong style={{ color: 'var(--accent-blue)' }}>Jackson, New Jersey</strong> — actively
                seeking co-op &amp; AI engineering roles where I can build what's next.
              </p>
              <div style={{ marginTop: 28 }}>
                <span className="btn-secondary" style={{ fontSize: '0.85rem', padding: '10px 18px', cursor: 'default' }}>
                  📞 (732) 575-6253
                </span>
              </div>
            </div>

            <div className="about-stats">
              {[
                { number: '150+', label: 'Prompts Engineered' },
                { number: '23%', label: 'LLM Error Reduction' },
                { number: '3+', label: 'Autonomous AI Agents' },
                { number: '300+', label: 'Git Commits' },
              ].map(({ number, label }) => (
                <div key={label} className="glass-card stat-card">
                  <div className="stat-number">{number}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SKILLS
────────────────────────────────────────────── */
const SKILLS = [
  { icon: '🤖', name: 'LLM Engineering', level: 'Experienced' },
  { icon: '🧠', name: 'Prompt Engineering', level: 'Advanced' },
  { icon: '🕵️', name: 'AI Agents', level: 'Advanced' },
  { icon: '🐍', name: 'Python', level: 'Proficient' },
  { icon: '⚡', name: 'JavaScript', level: 'Proficient' },
  { icon: '🔷', name: 'TypeScript', level: 'Proficient' },
  { icon: '⚛️', name: 'React', level: 'Advanced' },
  { icon: '🎸', name: 'Django', level: 'Advanced' },
  { icon: '🔀', name: 'Git', level: 'Advanced' },
  { icon: '🌐', name: 'RESTful APIs', level: 'Advanced' },
  { icon: '🎭', name: 'Playwright', level: 'Proficient' },
  { icon: '⚙️', name: 'Groq / OpenAI API', level: 'Proficient' },
];

function Skills() {
  const ref = useFadeIn();
  return (
    <section id="skills">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <div className="section-tag">⚙️ Technical Skills</div>
          <h2 className="section-title">
            AI Tools &amp; <span className="gradient-text-purple">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, and AI tools I use to build intelligent, production-ready systems.
          </p>
          <div className="skills-grid">
            {SKILLS.map(s => (
              <div key={s.name} className="skill-chip">
                <span className="skill-icon">{s.icon}</span>
                <div>
                  <div className="skill-name">{s.name}</div>
                  <div className="skill-level">{s.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   EXPERIENCE
────────────────────────────────────────────── */
const EXPERIENCE = [
  {
    icon: '🤝',
    date: 'December 2025 – Present',
    role: 'AI Trainer / Expert',
    company: 'Handshake — Remote',
    desc: [
      'Engineered and tested 150+ domain-specific prompts to evaluate LLM performance for generative AI applications.',
      'Analyzed AI-generated code outputs for technical accuracy across Python, JavaScript, TypeScript, Java, and C++.',
      'Reduced model error rates by 23% through systematic feedback on algorithms, data structures, and design patterns.',
      'Documented 40+ best practices for prompt optimization; collaborated with cross-functional teams to improve training workflows.',
    ],
  },
];

const EDUCATION = [
  {
    icon: '🎓',
    date: 'September 2025 – May 2027',
    role: 'B.S. Information Technology',
    company: 'New Jersey Institute of Technology, Newark',
    desc: ["Pursuing a Bachelor's degree in Information Technology with a focus on software engineering."],
  },
  {
    icon: '📚',
    date: 'January 2021 – January 2023',
    role: 'A.S. Computer Science',
    company: 'Ocean County College',
    desc: ["Associate's degree in Computer Science covering algorithms, data structures, and OOP principles."],
  },
  {
    icon: '🏫',
    date: 'January 2020 – January 2021',
    role: 'Vocational Computer Science',
    company: 'Ocean County Vocational Technical School',
    desc: ['Foundational studies in computer science and software development.'],
  },
];

function Experience() {
  const ref = useFadeIn();
  return (
    <section id="experience">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <div className="section-tag">💼 Work Experience</div>
          <h2 className="section-title">
            Building with <span className="gradient-text">AI</span> Professionally
          </h2>
          <p className="section-subtitle">AI engineering roles and educational background that shaped my craft.</p>

          <h3 style={{ marginTop: 48, marginBottom: 8, fontSize: '1rem', color: 'var(--text-secondary)', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
            Experience
          </h3>
          <div className="timeline">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot">{e.icon}</div>
                <div className="glass-card timeline-content">
                  <div className="timeline-date">{e.date}</div>
                  <div className="timeline-role">{e.role}</div>
                  <div className="timeline-company">{e.company}</div>
                  <ul style={{ paddingLeft: 16 }}>
                    {e.desc.map((d, j) => (
                      <li key={j} className="timeline-desc" style={{ marginBottom: 6 }}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: 48, marginBottom: 8, fontSize: '1rem', color: 'var(--text-secondary)', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
            Education
          </h3>
          <div className="timeline">
            {EDUCATION.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot">{e.icon}</div>
                <div className="glass-card timeline-content">
                  <div className="timeline-date">{e.date}</div>
                  <div className="timeline-role">{e.role}</div>
                  <div className="timeline-company">{e.company}</div>
                  {e.desc.map((d, j) => (
                    <p key={j} className="timeline-desc">{d}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   PROJECTS
────────────────────────────────────────────── */
const PROJECTS = [
  {
    color: 'green',
    icon: '🤖',
    title: 'AI Orchestrator & Job Automation',
    desc: 'End-to-end autonomous pipeline that scrapes internship listings, validates links, rewrites resumes with a Groq LLM, and submits applications via a Playwright browser agent — zero human input required.',
    tags: ['Node.js', 'Playwright', 'Groq API', 'Python', 'REST'],
    highlights: ['Fully autonomous agent loop', 'LLM-powered resume optimizer', 'Browser automation'],
  },
  {
    color: 'purple',
    icon: '🧠',
    title: 'LLM Prompt Engineering Suite',
    desc: 'Designed and systematically evaluated 150+ domain-specific prompts to benchmark LLM accuracy across five programming languages. Reduced model error rates by 23% and documented 40+ optimization best practices.',
    tags: ['Python', 'LLMs', 'Prompt Engineering', 'AI Evaluation'],
    highlights: ['150+ engineered prompts', '23% error rate reduction', '40+ documented patterns'],
  },
  {
    color: 'blue',
    icon: '🛒',
    title: 'AI-Enhanced E-Commerce Platform',
    desc: 'Full-stack e-commerce application serving 200+ test users, with a Django REST API backend, React frontend, JWT auth, and an AI-assisted product recommendation layer.',
    tags: ['Django', 'React', 'JWT', 'PostgreSQL', 'REST API'],
    highlights: ['200+ test users', '40% faster page loads', '300+ git commits'],
  },
];

function Projects() {
  const ref = useFadeIn();
  return (
    <section id="projects">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <div className="section-tag">🚀 Projects</div>
          <h2 className="section-title">
            AI Systems I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            Autonomous agents, LLM pipelines, and intelligent full-stack applications.
          </p>
          <div className="projects-grid">
            {PROJECTS.map(p => (
              <div key={p.title} className={`glass-card project-card ${p.color}`}>
                <div className="project-header">
                  <span className="project-icon">{p.icon}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div style={{ marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {p.highlights.map(h => (
                    <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'var(--accent-green)' }}>
                      <span>✓</span> {h}
                    </div>
                  ))}
                </div>
                <div className="project-tags">
                  {p.tags.map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   CONTACT
────────────────────────────────────────────── */
function Contact() {
  const ref = useFadeIn();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <div className="section-tag">📬 Contact</div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            Interested in collaborating or have a co-op opportunity? Let's talk.
          </p>

          <div className="contact-wrapper">
            <div>
              {sent ? (
                <div className="glass-card" style={{ padding: 40, textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                    className="btn-primary"
                    style={{ marginTop: 24 }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="contact-form glass-card" style={{ padding: 32 }} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      className="form-input"
                      type="text"
                      placeholder="Jane Smith"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      className="form-input"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      className="form-textarea"
                      placeholder="Tell me about the opportunity..."
                      required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info">
              {[
                { icon: '💼', label: 'LinkedIn', value: 'charles-field-574108205', href: 'https://www.linkedin.com/in/charles-field-574108205' },
                { icon: '📞', label: 'Phone', value: '(732) 575-6253', href: 'tel:7325756253' },
                { icon: '📍', label: 'Location', value: 'Jackson, NJ 08527', href: 'https://maps.google.com/?q=Jackson,NJ' },
                { icon: '🎓', label: 'School', value: 'NJIT — Newark, NJ', href: 'https://www.njit.edu' },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass-card contact-link"
                >
                  <div className="contact-link-icon">{item.icon}</div>
                  <div>
                    <div className="contact-link-label">{item.label}</div>
                    <div className="contact-link-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   RESUME
────────────────────────────────────────────── */
function Resume() {
  const ref = useFadeIn();
  return (
    <section id="resume">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <div className="section-tag">📄 Resume</div>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 32 }}>
            View or download my latest resume below.
          </p>
          <div className="resume-actions">
            <a
              href={resumePdf}
              download="CharlesField_Resume.pdf"
              className="btn-primary"
            >
              ⬇ Download PDF
            </a>
          </div>
          <div className="resume-viewer glass-card">
            <iframe
              src={resumePdf}
              title="Charles Field Resume"
              className="resume-iframe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   FOOTER
────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Built with <span>React</span> &amp; ❤️ by <span>Charles Field</span> · {new Date().getFullYear()}
        </p>
        <p style={{ marginTop: 6, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Jackson, NJ · NJIT · AI-Driven Engineer · Open to Co-op &amp; AI Roles
        </p>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────
   APP
────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <div className="bg-mesh">
        <div className="bg-mesh-extra" />
      </div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
