import React, { useState } from "react";
import { motion } from "framer-motion";
import redCar from "../assets/mobil-merah.png";
import blueCar from "../assets/mobil-biru.png";
import blackCar from "../assets/mobil-hitam.png";

const carImages: { [key: string]: string } = {
  merah: redCar,
  biru: blueCar,
  hitam: blackCar,
};

const CarDetailPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("merah");

  const specifications = [
    { label: "Tipe", value: "Toyota All New Avanza 1.5 G CVT" },
    { label: "Kapasitas Mesin", value: "1496 cc" },
    { label: "Tenaga Maksimum", value: "106 PS @ 6.000 rpm" },
    { label: "Torsi Maksimum", value: "137 Nm @ 4.200 rpm" },
    { label: "Transmisi", value: "CVT Otomatis" },
    { label: "Kapasitas Penumpang", value: "7 Orang" },
    { label: "Fitur Keselamatan", value: "ABS, EBD, Airbag, HSA" },
  ];

  const colors = [
    { name: "Merah", code: "merah", hex: "#dc2626" },
    { name: "Biru", code: "biru", hex: "#3b82f6" },
    { name: "Hitam", code: "hitam", hex: "#111827" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Gambar Mobil */}
        <motion.div
          key={selectedColor}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={carImages[selectedColor]}
            alt={`Mobil warna ${selectedColor}`}
            className="w-full max-w-md object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Detail Spesifikasi */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Toyota Avanza 2024
          </h2>
          <p className="text-gray-600">
            Mobil keluarga dengan kenyamanan terbaik, efisiensi bahan bakar
            tinggi, dan fitur keselamatan modern.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specifications.map((spec) => (
              <div key={spec.label} className="flex justify-between">
                <span className="font-medium text-gray-700">{spec.label}</span>
                <span className="text-gray-600">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Pilihan Warna */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              Pilihan Warna:
            </h4>
            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  key={color.code}
                  onClick={() => setSelectedColor(color.code)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color.code
                      ? "ring-2 ring-offset-2 ring-blue-500"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                ></button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CarDetailPage;
