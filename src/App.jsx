import { useState } from 'react'
import './App.css'

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Test Tri <span>Charity</span></div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#donate" className="navbar-cta">Donate</a></li>
      </ul>
    </nav>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ onJoinClick }) {
  return (
    <section className="hero">
      <h1>Train Hard. Race Together. Give Back.</h1>
      <p>
        We're a charitable community of triathletes who race to raise funds
        for causes that matter. Join us — every stroke, pedal, and stride counts.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary" onClick={onJoinClick}>Join the Community</button>
        <button className="btn-outline" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
          Learn More
        </button>
      </div>
    </section>
  )
}

// ── Fundraising Progress ─────────────────────────────────────────────────────
// TODO: hook this up to a real backend or Stripe later
const FUNDRAISING_GOAL = 10000
const FUNDRAISING_RAISED = 4250

function FundraisingBar() {
  const pct = Math.min(100, Math.round((FUNDRAISING_RAISED / FUNDRAISING_GOAL) * 100))

  return (
    <div className="fundraising-bar-wrapper">
      <div className="fundraising-header">
        <span className="fundraising-label">2025 Season Goal</span>
        <span className="fundraising-amount">
          ${FUNDRAISING_RAISED.toLocaleString()} <span>/ ${FUNDRAISING_GOAL.toLocaleString()}</span>
        </span>
      </div>
      <div className="fundraising-track">
        <div className="fundraising-fill" style={{ width: `${pct}%` }} />
      </div>
      <p className="fundraising-pct">{pct}% of goal reached — keep pushing!</p>
    </div>
  )
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  const pillars = [
    {
      icon: '🏊',
      title: 'Swim',
      description: 'Weekly open-water and pool sessions coached by experienced triathletes of all levels.',
    },
    {
      icon: '🚴',
      title: 'Bike',
      description: 'Group rides across scenic routes, from beginner-friendly spins to long-distance challenges.',
    },
    {
      icon: '🏃',
      title: 'Run',
      description: 'Structured run training to build your endurance and help you cross every finish line strong.',
    },
    {
      icon: '❤️',
      title: 'Give Back',
      description: 'Every race entry and donation goes directly to charitable causes we vote on as a community.',
    },
  ]

  return (
    <section id="about" className="section">
      <h2 className="section-title">What We're About</h2>
      <p className="section-subtitle">
        We believe sport is a powerful vehicle for change. Training together builds
        more than fitness — it builds community.
      </p>
      <div className="about-grid">
        {pillars.map((p) => (
          <div key={p.title} className="about-card">
            <div className="about-card-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Events ────────────────────────────────────────────────────────────────────
// Add or remove events here
const EVENTS = [
  { month: 'MAY', day: '10', name: 'Spring Sprint Tri',      location: 'Lake Meridian, WA', tag: 'Sprint',  spots: 12 },
  { month: 'JUN', day: '21', name: 'Charity Olympic Race',   location: 'Green Lake, WA',    tag: 'Olympic', spots: 8  },
  { month: 'AUG', day: '3',  name: 'Summer Half Ironman',    location: 'Hood Canal, WA',    tag: 'Half',    spots: 20 },
  { month: 'OCT', day: '12', name: 'Fall Fundraiser 5K Run', location: 'Volunteer Park, WA',tag: 'Run',     spots: 30 },
]

function Events() {
  const [interested, setInterested] = useState({})

  function toggleInterest(name) {
    setInterested((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <section id="events" className="events-section">
      <div className="section">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="section-subtitle">Race with us and help us hit our fundraising goals this season.</p>
        <div className="events-list">
          {EVENTS.map((e) => (
            <div key={e.name} className="event-item">
              <div className="event-date">
                <div>{e.month}</div>
                <div style={{ fontSize: '1.3rem' }}>{e.day}</div>
              </div>
              <div className="event-info">
                <h3>{e.name}</h3>
                <p>{e.location}</p>
              </div>
              <span className="event-tag">{e.tag}</span>
              <button
                className={`btn-interest ${interested[e.name] ? 'active' : ''}`}
                onClick={() => toggleInterest(e.name)}
              >
                {interested[e.name] ? "I'm in ✓" : "I'm interested"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Donate ────────────────────────────────────────────────────────────────────
// TODO: wire up to Stripe or GoFundMe
const DONATE_AMOUNTS = [10, 25, 50, 100]

function Donate() {
  const [selected, setSelected] = useState(25)
  const [custom, setCustom] = useState('')

  const amount = custom ? Number(custom) : selected

  return (
    <section id="donate" className="donate-section">
      <h2>Help Us Make a Difference</h2>
      <p>
        100% of donations go to our community-chosen charities. Every dollar
        makes a real impact — on and off the course.
      </p>

      <div className="donate-amounts">
        {DONATE_AMOUNTS.map((a) => (
          <button
            key={a}
            className={`donate-pill ${!custom && selected === a ? 'active' : ''}`}
            onClick={() => { setSelected(a); setCustom('') }}
          >
            ${a}
          </button>
        ))}
        <input
          className="donate-custom"
          type="number"
          placeholder="Other"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
        />
      </div>

      <button className="btn-white">
        Donate ${amount || '?'} Now
      </button>
    </section>
  )
}

// ── Join Modal ────────────────────────────────────────────────────────────────
function JoinModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', level: 'beginner' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: send to a backend / mailing list
    console.log('New member:', form)
    setSubmitted(true)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {submitted ? (
          <div className="modal-success">
            <div style={{ fontSize: '3rem' }}>🎉</div>
            <h2>You're in!</h2>
            <p>Welcome to Test Tri Charity, {form.name}. We'll be in touch soon.</p>
          </div>
        ) : (
          <>
            <h2>Join the Community</h2>
            <p>Tell us a bit about yourself and we'll reach out with next steps.</p>
            <form onSubmit={handleSubmit}>
              <label>Name
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </label>
              <label>Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
              <label>Experience level
                <select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
                  <option value="beginner">Beginner — never done a tri</option>
                  <option value="intermediate">Intermediate — done a sprint or two</option>
                  <option value="advanced">Advanced — regular racer</option>
                </select>
              </label>
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Sign Me Up
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Test Tri Charity &nbsp;·&nbsp;
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#donate">Donate</a>
      </p>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  const [showJoin, setShowJoin] = useState(false)

  return (
    <>
      <Navbar />
      <Hero onJoinClick={() => setShowJoin(true)} />
      <FundraisingBar />
      <About />
      <Events />
      <Donate />
      <Footer />
      {showJoin && <JoinModal onClose={() => setShowJoin(false)} />}
    </>
  )
}

export default App
