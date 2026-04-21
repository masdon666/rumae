function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Rumae. Crafted for cozy living.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#cta">Shop</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
