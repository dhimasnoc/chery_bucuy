import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-12 font-Oxanium">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            CheryMobil
          </h2>
          <p className="text-gray-400">
            Tempat terbaik untuk menemukan mobil impian Anda dengan harga
            terbaik dan layanan terpercaya.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Navigasi</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-red-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#produk" className="hover:text-red-600 transition">
                Produk
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-600 transition">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-600 transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Kontak</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              📍 Jl. Raya Hankam No.114-47 RT.002/RW.010 Kel.Jatirahayu, Kec
              Pd.Melati, Kota Bekasi , Jawa Barat
            </li>
            <li>📞 +62 822 1992 1926</li>
            <li>✉️ isroni.fajarmitra@gmail.com</li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Ikuti Kami</h3>
          <div className="flex space-x-5 text-gray-400">
            {/* Icon Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12.1C22 6.6 17.5 2 12 2S2 6.6 2 12.1c0 5 3.7 9.1 8.5 9.9v-7h-2.5v-3h2.5v-2.3c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 3h-2.4v7c4.8-.8 8.5-4.9 8.5-9.9z" />
              </svg>
            </a>
            {/* Icon Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm4.5 4a4 4 0 100 8 4 4 0 000-8zm5.5-.5a1 1 0 11-2 0 1 1 0 012 0zM12 8a4 4 0 11-.001 8.001A4 4 0 0112 8z" />
              </svg>
            </a>
            {/* Icon Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14.86 5.48 5.48 0 002.4-3.04 10.72 10.72 0 01-3.44 1.3 5.4 5.4 0 00-9.2 4.92A15.35 15.35 0 012 4.15a5.39 5.39 0 001.68 7.19 5.33 5.33 0 01-2.44-.68v.07a5.42 5.42 0 004.33 5.31 5.39 5.39 0 01-1.42.2 5.39 5.39 0 01-1.01-.1 5.41 5.41 0 005.05 3.75A10.84 10.84 0 012 19.54a15.27 15.27 0 008.29 2.43c9.95 0 15.39-8.25 15.39-15.39 0-.23-.01-.46-.02-.68A11 11 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Chery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
