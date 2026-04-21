import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.title = 'Rumae - Home Fragrance'
  }, [])

  return (
    <div className="bg-[#f7f3ee] text-gray-800 font-sans">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-6">
        <h1 className="text-xl font-semibold tracking-wide">Rumae</h1>
        <a
          href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20order%20Rumae"
          className="rounded-full bg-black px-4 py-2 text-sm text-white"
        >
          Order
        </a>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl leading-tight font-semibold md:text-5xl">
            Rumah Nyaman Itu Dimulai dari Aroma
          </h2>
          <p className="mb-6 text-gray-600">
            Linen spray dengan aroma calming yang bikin rumah terasa lebih
            hangat, tenang, dan bikin betah sepanjang hari.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20order%20Rumae"
            className="rounded-full bg-black px-6 py-3 text-white"
          >
            Pesan Sekarang
          </a>
        </div>

        <div className="flex h-[300px] items-center justify-center rounded-2xl bg-white text-gray-400">
          Foto Produk
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 text-center">
        <h3 className="mb-6 text-2xl font-semibold">
          Masalah yang Sering Terjadi
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li>Rumah terasa apek setelah hujan</li>
          <li>Sprei cepat bau walau baru dicuci</li>
          <li>Sulit menciptakan suasana nyaman</li>
        </ul>
      </section>

      <section className="bg-white px-6 py-12 text-center">
        <h3 className="mb-4 text-2xl font-semibold">Solusi dari Rumae</h3>
        <p className="mx-auto max-w-xl text-gray-600">
          Dengan satu semprotan, Rumae menghadirkan aroma yang menenangkan dan
          membuat rumah terasa lebih hidup.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="mb-6 text-center text-2xl font-semibold">
          Feature & Varian Favorit
        </h3>

        <div className="mb-6 grid gap-6 md:grid-cols-3">
          {[
            {
              name: 'Dreamy Night',
              image: '/images/dreamy-night.svg',
            },
            {
              name: 'Moon Hug',
              image: '/images/moon-hug.svg',
            },
            {
              name: 'Morning Air',
              image: '/images/morning-air.svg',
            },
          ].map((item) => (
            <div key={item.name} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-4">
                <p className="font-medium text-gray-700">{item.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: 'Dreamy Night 🌙',
              desc: 'Aroma lembut untuk istirahat yang lebih tenang',
            },
            {
              name: 'Moon Hug 🌙',
              desc: 'Hangat & calming, seperti dipeluk suasana malam',
            },
            {
              name: 'Morning Air 🌿',
              desc: 'Segar & bersih, bikin rumah terasa hidup',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white px-6 py-4 text-left shadow-sm"
            >
              <h4 className="font-semibold">{item.name}</h4>
              <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-12 md:grid-cols-2">
        {[
          'Aroma tahan lama',
          'Aman untuk keluarga',
          'Cocok untuk sprei & sofa',
          'Efek calming & relaxing',
        ].map((item) => (
          <div key={item} className="rounded-2xl bg-white p-6 shadow-sm">
            <p>{item}</p>
          </div>
        ))}
      </section>

      <section className="bg-white px-6 py-12 text-center">
        <h3 className="mb-6 text-2xl font-semibold">Apa Kata Mereka</h3>
        <div className="mx-auto max-w-3xl space-y-4 text-gray-600">
          <p>"Baru semprot sedikit, kamar langsung wangi!"</p>
          <p>"Aromanya calming banget, bikin betah di rumah."</p>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <h3 className="mb-4 text-2xl font-semibold">
          Siap bikin rumah lebih nyaman?
        </h3>
        <a
          href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20order%20Rumae"
          className="rounded-full bg-black px-6 py-3 text-white"
        >
          Pesan Sekarang (Respon Cepat)
        </a>
        <p className="mt-3 text-sm text-gray-500">
          ✨ Sudah dipakai banyak pelanggan • Stok terbatas
        </p>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © 2026 Rumae. All rights reserved.
      </footer>

      <a
        href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20order%20Rumae"
        className="fixed right-4 bottom-4 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default App
