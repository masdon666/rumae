function Problem() {
  const items = [
    'Ruangan terasa pengap setelah seharian beraktivitas.',
    'Sprei dan sofa menyerap bau yang mengganggu kenyamanan.',
    'Mood cepat turun saat rumah terasa kurang segar.',
  ]

  return (
    <section id="problem" className="section">
      <div className="container">
        <p className="eyebrow">Problem</p>
        <h2>Rumah cantik belum tentu terasa nyaman.</h2>
        <div className="cards">
          {items.map((item) => (
            <article className="card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
