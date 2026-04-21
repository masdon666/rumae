function Hero() {
  return (
    <section id="home" className="py-16 bg-[#f7f3ee]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm text-gray-500 mb-2">
            Linen Spray / Home Fragrance
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            Hadirkan rasa pulang di setiap sudut rumahmu.
          </h1>

          <p className="text-gray-600 mb-6">
            Rumae menghadirkan aroma calming yang bikin rumah terasa lebih hangat,
            bersih, dan nyaman hanya dalam satu semprotan.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="#cta"
              className="bg-black text-white px-6 py-3 rounded-full"
            >
              Pesan Sekarang
            </a>

            <a
              href="#features"
              className="border px-6 py-3 rounded-full"
            >
              Lihat Keunggulan
            </a>
          </div>

          {/* Harga */}
          <p className="mt-4 font-semibold text-lg">
            Mulai dari Rp 45.000
          </p>
        </div>

        {/* RIGHT CONTENT (PRODUK) */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          
          <img
            src="/images/Rumae-homespray.png"
            alt="Rumae Home Spray"
            className="rounded-xl mx-auto shadow-lg hover:scale-105 transition duration-300"
          />

          <div className="mt-4">
            <p className="text-xs text-gray-400 mb-1">BEST SELLER</p>
            <h3 className="font-semibold text-lg">Dreamy Night 🌙</h3>
            <p className="text-sm text-gray-500">Calm Linen Mist</p>
            <p className="text-sm text-gray-400">250 ml</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;