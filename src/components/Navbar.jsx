function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="brand">
          Rumae
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#features">Features</a>
          <a href="#testimonial">Testimoni</a>
        </nav>
        <a className="btn btn-soft" href="#cta">
          Coba Sekarang
        </a>
      </div>
    </header>
  )
}

export default Navbar
