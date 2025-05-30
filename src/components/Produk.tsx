import React, { useState } from "react";

import mobil1 from "../assets/mobil1.webp";
import mobil2 from "../assets/mobil2.png";
import mobil3 from "../assets/mobil3.png";
import mobil4 from "../assets/mobil4.png";
import mobil5 from "../assets/mobil5.webp";
import mobil6 from "../assets/mobil6.webp";
import mobil7 from "../assets/mobil7.webp";
import mobil8 from "../assets/mobil8.webp";
import mobil9 from "../assets/mobil9.webp";

type Mobil = {
  id: number;
  nama: string;
  kategori: string;
  tahun: number;
  harga: number;
  gambar: string;
};

const dataMobil: Mobil[] = [
  {
    id: 1,
    nama: "TIGGO 8 CSH",
    kategori: "TIGGO",
    tahun: 2022,
    harga: 200000000,
    gambar: mobil1,
  },
  {
    id: 2,
    nama: "TIGGO CROSS",
    kategori: "TIGGO",
    tahun: 2021,
    harga: 350000000,
    gambar: mobil2,
  },
  {
    id: 3,
    nama: "TIGGO 8",
    kategori: "TIGGO",
    tahun: 2023,
    harga: 220000000,
    gambar: mobil3,
  },
  {
    id: 4,
    nama: "TIGGO 8 PRO MAX",
    kategori: "TIGGO",
    tahun: 2022,
    harga: 250000000,
    gambar: mobil4,
  },
  {
    id: 5,
    nama: "TIGGO PRO",
    kategori: "TIGGO",
    tahun: 2022,
    harga: 250000000,
    gambar: mobil5,
  },
  {
    id: 6,
    nama: "J6",
    kategori: "OMODA",
    tahun: 2022,
    harga: 250000000,
    gambar: mobil6,
  },
  {
    id: 7,
    nama: "OMODA E5",
    kategori: "OMODA",
    tahun: 2022,
    harga: 250000000,
    gambar: mobil7,
  },
  {
    id: 8,
    nama: "OMODA 5 GT",
    kategori: "OMODA",
    tahun: 2022,
    harga: 250000000,
    gambar: mobil8,
  },
  {
    id: 9,
    nama: "OMODA 5",
    kategori: "OMODA",
    tahun: 2022,
    harga: 250000000,
    gambar: mobil9,
  },
];

const Produk = () => {
  const [kategoriFilter, setKategoriFilter] = useState<string>("Semua");

  const mobilTampil =
    kategoriFilter === "Semua"
      ? dataMobil
      : dataMobil.filter((m) => m.kategori === kategoriFilter);

  const kategoriList = ["Semua", ...new Set(dataMobil.map((m) => m.kategori))];

  return (
    <section className="min-h-screen bg-black text-white py-12 px-6 md:px-12 font-Oxanium">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center tracking-wide drop-shadow-lg">
          DAFTAR MOBIL
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {kategoriList.map((kategori) => (
            <button
              key={kategori}
              className={`px-10 py-2 rounded-full font-semibold transition 
                ${
                  kategoriFilter === kategori
                    ? "bg-red-600 shadow-lg"
                    : "bg-black hover:bg-gray-600"
                }`}
              onClick={() => setKategoriFilter(kategori)}
            >
              {kategori}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {mobilTampil.map((mobil) => (
            <div
              key={mobil.id}
              className="bg-black rounded-xl  shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              <img
                src={mobil.gambar}
                alt={mobil.nama}
                className="w-full h-56 md:h-45 object-cover transition-transform duration-300 ease-in-out hover:scale-130"
                loading="lazy"
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-2">{mobil.nama}</h2>
                <p className="text-blue-400 font-medium mb-1">
                  Kategori: {mobil.kategori}
                </p>
                <p className="text-gray-300 mb-1">Tahun: {mobil.tahun}</p>
                <p className="text-green-400 font-semibold text-lg mb-4">
                  Harga: Rp {mobil.harga.toLocaleString()}
                </p>

                <button
                  className="bg-red-600 hover:bg-red-700 transition rounded-full px-6 py-2 font-semibold shadow-md
          w-full text-center"
                  onClick={() => alert(`Detail mobil: ${mobil.nama}`)}
                >
                  See Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produk;
