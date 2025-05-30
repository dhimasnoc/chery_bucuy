import { motion } from "framer-motion";
import { Phone, Mail, MessageSquareText } from "lucide-react";
import bgcontact from "../assets/hero2.jpg";

export default function SalesContactPageParallax() {
  return (
    <div className="relative min-h-screen">
      {/* Background image with parallax effect */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgcontact})`,
        }}
      />

      {/* Overlay gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Konten */}
      <div className="relative z-20 flex items-center justify-center min-h-screen p-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-10 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8"
        >
          {/* Foto */}
          <div className="flex-shrink-0">
            <img
              src="/sales.jpg"
              alt="Sales Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">ISRONI MAHMUD</h2>
            <p className="text-blue-600 font-semibold">
              Sales Consultan - Mobil Chery
            </p>
            <p className="text-gray-700">
              Dapatkan mobil impian Anda dengan harga terbaik dan pelayanan
              ramah.
            </p>

            {/* Kontak */}
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-700">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>0822-1992-1926</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-700">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>isroni.fajarmitra@gmail.com</span>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <a
                href="https://wa.me/6282219921926"
                target="_blank"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl flex items-center gap-2 shadow"
              >
                <MessageSquareText className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="tel:081234567890"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center gap-2 shadow"
              >
                <Phone className="w-5 h-5" />
                Telpon
              </a>
              <a
                href="mailto:budi.sales@toyota.com"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-xl flex items-center gap-2 shadow"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
