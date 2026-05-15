import { ArrowRight, Mail } from "lucide-react";
const advisoryAreas = [
  {
    title: 'AI Governance & Board Readiness',
    text: 'Helping boards and executive teams understand AI risk, oversight, adoption, infrastructure readiness, and long-term enterprise value creation.'
  },
  {
    title: 'Enterprise Infrastructure & Transformation',
    text: 'Advisory across cloud modernization, operational resilience, enterprise architecture, and AI-era technology strategy.'
  },
  {
    title: 'Cybersecurity & Risk Oversight',
    text: 'Governance approaches for increasingly intelligent, data-driven, and interconnected enterprises.'
  },
  {
    title: 'Executive Strategy & Thought Leadership',
    text: 'Executive engagement, strategic positioning, speaking, and board-level dialogue focused on AI and enterprise transformation.'
  }
]

const insights = [
  'AI Governance & Infrastructure Readiness for Boards',
  'The Economics of AI Inference and Enterprise Scale',
  'Why Modern Boards Need Technology Fluency'
]

export default function App() {
  const contactEmail = 'contact@hamptonida.com'
  const linkedInUrl = 'https://www.linkedin.com/in/YOUR-LINKEDIN-PROFILE'
  const executiveProfilePdf = '/assets/executive-profile.pdf'

  return (
    <main className="site-shell">
      <header className="nav">
        <a href="#top" className="brand">
          <img src="/assets/hamptonida-logo.png" alt="HamptonIda logo" className="brand-logo" />
          <span>HamptonIda Advisory Group</span>
        </a>

        <nav className="nav-links">
          <a href="#advisory">Advisory</a>
          <a href="#framework">IDA Framework™</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">HamptonIda Advisory Group</p>

          <h1>
            Transforming
            <span>Intelligence Into Impact</span>
          </h1>

          <p className="hero-subhead">
            Board-level advisory across AI, infrastructure, governance, cybersecurity, and enterprise transformation.
          </p>

          <p className="hero-credibility">
            Founder & CEO, HamptonIda Advisory Group. Board Director | AI, Infrastructure & Governance Advisor.
          </p>

          <div className="button-row">
            <a className="button primary" href={`mailto:${contactEmail}`}>
              Schedule a Conversation <ArrowRight size={17} />
            </a>

            <a className="button secondary" href={executiveProfilePdf}>
              Download Executive Profile
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src="/assets/april-headshot.jpg" alt="April, Founder and CEO of HamptonIda Advisory Group" className="hero-image" />
        </div>
      </section>

      <section className="positioning section">
        <div>
          <p className="eyebrow">The HamptonIda Perspective</p>
        </div>

        <p className="statement">
          HamptonIda Advisory Group helps boards and executive teams navigate the intersection of AI, infrastructure,
          governance, and enterprise transformation. Through the IDA Framework™ — Infrastructure, Data, and AI —
          HamptonIda provides strategic insight grounded in decades of operational leadership across global technology organizations.
        </p>
      </section>

      <section id="advisory" className="advisory section">
        <div className="section-heading">
          <p className="eyebrow">Advisory Areas</p>
          <h2>Strategic guidance for the intelligent enterprise.</h2>
        </div>

        <div className="card-grid">
          {advisoryAreas.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about section">
        <div>
          <p className="eyebrow">About April</p>
        </div>

        <div className="about-copy">
          <p>
            April is a global technology executive and public company board director with more than three decades of
            leadership experience across AI, infrastructure, cybersecurity, customer success, and enterprise transformation.
          </p>

          <p>
            Her executive career spans leadership roles at Salesforce, Microsoft, MetLife, NBCUniversal, and AOL, where
            she helped lead large-scale technology modernization initiatives, operational transformation, and strategic innovation programs.
          </p>

          <p>
            Today, through HamptonIda Advisory Group, she advises boards and executive teams navigating the rapidly
            evolving intersection of AI, governance, enterprise infrastructure, and business strategy.
          </p>
        </div>
      </section>

      <section id="framework" className="framework section">
        <p className="eyebrow">The IDA Framework™</p>
        <h2>Infrastructure → Data → AI</h2>
        <p>
          A strategic framework designed to help organizations understand how infrastructure foundations, data readiness,
          and AI capabilities intersect to drive enterprise transformation, governance, and long-term value creation.
        </p>
      </section>

      <section className="insights section">
        <div className="section-heading">
          <p className="eyebrow">Featured Insights</p>
          <h2>Current thinking and executive perspectives.</h2>
        </div>

        <div className="insight-grid">
          {insights.map((item) => (
            <article className="insight-card" key={item}>
              <p>{item}</p>
              <a href="#contact">Read More</a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section">
        <p className="eyebrow">Contact</p>

        <h2>Let’s Start the Conversation.</h2>

        <p>
          HamptonIda Advisory Group partners with boards and executive teams navigating AI transformation, governance,
          infrastructure strategy, and enterprise modernization.
        </p>

        <div className="button-row center">
          <a className="button primary" href={linkedInUrl} target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>

          <a className="button secondary" href={`mailto:${contactEmail}`}>
            <Mail size={17} /> Contact HamptonIda
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} HamptonIda Advisory Group. All rights reserved.</p>
      </footer>
    </main>
  )
}
