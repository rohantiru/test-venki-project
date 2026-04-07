import './App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Tri<span>Charity</span></div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#donate" className="navbar-cta">Donate</a></li>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <h1>Train Hard. Race Together. Give Back.</h1>
      <p>
        We're a charitable community of triathletes who race to raise funds
        for causes that matter. Join us — every stroke, pedal, and stride counts.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary">Join the Community</button>
        <button className="btn-outline">Learn More</button>
      </div>
    </section>
  )
}

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

function Events() {
  const events = [
    { month: 'MAY', day: '10', name: 'Spring Sprint Tri', location: 'Lake Meridian, WA', tag: 'Sprint' },
    { month: 'JUN', day: '21', name: 'Charity Olympic Race', location: 'Green Lake, WA', tag: 'Olympic' },
    { month: 'AUG', day: '3',  name: 'Summer Half Ironman', location: 'Hood Canal, WA', tag: 'Half' },
    { month: 'OCT', day: '12', name: 'Fall Fundraiser 5K Run', location: 'Volunteer Park, WA', tag: 'Run' },
  ]

  return (
    <section id="events" className="events-section">
      <div className="section">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="section-subtitle">Race with us and help us hit our fundraising goals this season.</p>
        <div className="events-list">
          {events.map((e) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Donate() {
  return (
    <section id="donate" className="donate-section">
      <h2>Help Us Make a Difference</h2>
      <p>
        100% of donations go to our community-chosen charities. Every dollar
        makes a real impact — on and off the course.
      </p>
      <button className="btn-white">Donate Now</button>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} TriCharity &nbsp;·&nbsp;
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#donate">Donate</a>
      </p>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Donate />
      <Footer />
    </>
  )
}

export default App
