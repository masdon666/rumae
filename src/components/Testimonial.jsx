const testimonials = [
  {
    quote: 'Aromanya tenang banget, kamar jadi berasa hotel butik.',
    name: 'Nadya, Jakarta',
  },
  {
    quote: 'Setiap habis beberes, semprot ini bikin mood naik lagi.',
    name: 'Rika, Bandung',
  },
]

function Testimonial() {
  return (
    <section id="testimonial" className="section">
      <div className="container">
        <p className="eyebrow">Testimonial</p>
        <h2>Dipercaya untuk menciptakan momen nyaman setiap hari.</h2>
        <div className="cards">
          {testimonials.map((item) => (
            <blockquote className="card quote" key={item.name}>
              <p>"{item.quote}"</p>
              <footer>{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
