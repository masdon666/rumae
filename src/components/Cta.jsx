function Cta() {
  return (
    <section id="cta" className="section cta">
      <div className="container text-center">
        <h2>Rumah Nyaman Itu Dimulai dari Aroma</h2>

        <p className="mb-6">
          Cuma dengan 1 semprot, suasana rumah berubah jadi lebih tenang,
          hangat, dan bikin betah seharian.
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          {/* WhatsApp */}
          <a
            className="btn btn-primary"
            href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20order%20Rumae"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pesan via WhatsApp
          </a>

          {/* Instagram */}
          <a
            className="btn border"
            href="https://instagram.com/rumaespray/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lihat Instagram
          </a>

          {/* TikTok */}
          <a
            className="btn border"
            href="https://tiktok.com/@rumaespray"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lihat TikTok
          </a>
        </div>

        {/* Trust + Urgency */}
        <p className="mt-4 text-sm text-gray-500">
          ✨ Sudah dipakai banyak pelanggan • Stok terbatas hari ini
        </p>
      </div>
    </section>
  );
}

export default Cta;