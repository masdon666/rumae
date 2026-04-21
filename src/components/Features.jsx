const features = [
  { title: 'Long Lasting', text: 'Aroma bertahan hingga berjam-jam.' },
  { title: 'Fabric Friendly', text: 'Lembut untuk linen dan kain favoritmu.' },
  { title: 'Elegant Scent', text: 'Karakter aroma berkelas untuk daily use.' },
  { title: 'Minimalist Bottle', text: 'Desain estetis yang mempercantik ruangan.' },
]

function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <p className="eyebrow">Features</p>
        <h2>Diracik untuk rumah yang lebih hidup dan hangat.</h2>
        <div className="cards feature-grid">
          {features.map((feature) => (
            <article className="card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
