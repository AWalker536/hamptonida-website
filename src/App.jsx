import { ArrowRight, Mail } from "lucide-react";
const advisoryAreas = [
  {
    title: 'AI Governance & Infrastructure Readiness',
    text: 'Board and executive advisory focused on AI oversight, infrastructure readiness, operational resilience, governance visibility, and enterprise-scale transformation preparedness.'
  },
  {
    title: 'Enterprise Transformation & Operating Strategy',
    text: 'Strategic advisory supporting modernization across infrastructure, cloud, customer transformation, operating model evolution, and AI-enabled enterprise transformation.'
  },
  {
    title: 'Cybersecurity, Operational Resilience & Risk',
    text: 'Executive and board-level perspectives on cyber governance, operational resilience, infrastructure risk, intelligent systems oversight, and enterprise continuity in increasingly interconnected environments.'
  },
  {
    title: 'The IDA Framework™',
    text: 'A strategic advisory framework centered on the intersection of Infrastructure, Data, and AI — designed to help organizations align technology readiness with governance, operational scalability, and long-term enterprise value creation.'
  },
  {
    title: 'Executive Perspectives & Strategic Dialogue',
    text: 'Executive engagement, keynote speaking, board briefings, leadership dialogue, and strategic perspectives focused on AI, governance, infrastructure, enterprise transformation, and technology fluency.'
  }
]

const insights = [
  {
    title: 'AI Governance & Infrastructure Readiness for Boards',
    link: '#ai-governance'
  },
  {
    title: 'The Economics of AI Inference and Enterprise Scale',
    link: '#inference-economics'
  },
  {
    title: 'Why Modern Boards Need Technology Fluency',
    link: '#technology-fluency'
  }
]

export default function App() {
  const contactEmail = 'april.walker@hamptonida.com'
  const linkedInUrl =  'https://www.linkedin.com/in/aprilwalkermbams'
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
<section className="problem-statement section">
  <div className="problem-container">
    <p className="eyebrow">Strategic Positioning</p>

    <h2>The Enterprise Readiness Challenge</h2>

    <p>
      AI is reshaping enterprise operations, infrastructure, governance, cybersecurity, and competitive positioning faster than many organizations are prepared to operationalize responsibly and at scale.
    </p>

    <p>
      Many boards and leadership teams face increasing pressure to understand not only how AI is being deployed, but whether their organizations possess the infrastructure readiness, data maturity, governance visibility, operational resilience, and technology fluency required to sustain transformation effectively.
    </p>

    <p>
      HamptonIda Advisory Group helps organizations navigate this evolving landscape through strategic advisory grounded in the intersection of Infrastructure, Data, and AI.
    </p>
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
            <article className="insight-card" key={item.title}>
           <p>{item.title}</p>
              <a href={item.link}>Read More</a>
            </article>
          ))}
        </div>
      </section>
<section id="ai-governance" className="insight-detail section">
  <p className="eyebrow">Executive Perspective</p>
  <h2>AI Governance & Infrastructure Readiness for Boards</h2>

  <p>
    AI governance discussions often focus on policy, ethics, and regulatory oversight. While important, these conversations can overlook the operational foundations required to deploy AI responsibly and at enterprise scale. Infrastructure readiness, cybersecurity resilience, data architecture, and operational visibility are increasingly inseparable from effective AI governance.
  </p>

  <p>
    Many organizations are approaching AI governance as a policy exercise rather than an operational readiness challenge. In practice, AI resilience depends as much on infrastructure maturity, data architecture, cybersecurity posture, and operational visibility as it does on governance frameworks themselves.
  </p>

  <h3>Industry Example: Financial Services</h3>

  <p>
    A global financial institution may successfully deploy AI-powered customer engagement tools, fraud detection models, or internal productivity copilots. However, without modernized infrastructure, integrated data governance, and resilient operational controls, these initiatives can create fragmentation, inconsistent outputs, and elevated operational risk.
  </p>
</section>

<section id="inference-economics" className="insight-detail section">
  <p className="eyebrow">Executive Perspective</p>
  <h2>The Economics of AI Inference and Enterprise Scale</h2>

  <p>
    The next phase of enterprise AI competition will not be determined solely by model capability, but by the economics of inference at scale — including compute efficiency, infrastructure utilization, latency, operational cost structures, and business outcome alignment.
  </p>

  <p>
    As enterprises move beyond experimentation into production environments, leaders must evaluate how inference costs influence infrastructure strategy, operational leverage, customer experience, and long-term capital allocation priorities.
  </p>

  <h3>Industry Example: Healthcare</h3>

  <p>
    A healthcare provider deploying AI-assisted diagnostics across hospital systems may achieve strong clinical outcomes in pilot environments. However, scaling those workloads across thousands of daily interactions introduces substantial inference demands, including compute costs, latency requirements, cybersecurity protections, and regulatory obligations.
  </p>
</section>

<section id="technology-fluency" className="insight-detail section">
  <p className="eyebrow">Executive Perspective</p>
  <h2>Why Modern Boards Need Technology Fluency</h2>

  <p>
    Technology fluency is no longer optional for modern boards. AI, cybersecurity, infrastructure modernization, and digital operating models increasingly shape enterprise performance, operational resilience, customer engagement, and shareholder value.
  </p>

  <p>
    Boards require directors capable of understanding not only technology risk, but the broader business implications of technological transformation and intelligent operating systems.
  </p>

  <h3>Industry Example: Energy & Utilities</h3>

  <p>
    An energy provider modernizing grid operations through digital infrastructure, predictive analytics, and AI-enabled monitoring may significantly improve operational efficiency and resilience. However, these same systems also expand cyber exposure, infrastructure dependencies, operational complexity, and regulatory risk.
  </p>
</section>
      <section id="speaking" className="speaking section">
  <div className="speaking-container">
    <p className="eyebrow">Speaking & Executive Engagements</p>

    <h2>Board-level perspectives for leaders navigating AI, governance, and enterprise transformation.</h2>

    <p>
      April Walker speaks on topics at the intersection of AI, infrastructure, cybersecurity, governance, enterprise transformation, and board technology fluency.
    </p>

    <div className="speaking-list">
      <span>Board & Executive Briefings</span>
      <span>Industry Conferences & Keynotes</span>
      <span>Leadership Forums</span>
      <span>Strategic Roundtables</span>
      <span>Executive Fireside Conversations</span>
      <span>AI Governance & Enterprise Readiness Discussions</span>
    </div>

    <a className="button primary" href={`mailto:${contactEmail}`}>
      Contact for Speaking Inquiries
    </a>
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
