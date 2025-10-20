import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">SMK Teknologi Nusantara</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Sekolah Menengah Kejuruan yang berkomitmen menghasilkan lulusan berkualitas di bidang Teknik Informatika dan Robotika.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-blue-100 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/profile" className="text-blue-100 hover:text-white transition-colors">
                  Profil Sekolah
                </a>
              </li>
              <li>
                <a href="/programs" className="text-blue-100 hover:text-white transition-colors">
                  Program Keahlian
                </a>
              </li>
              <li>
                <a href="/news" className="text-blue-100 hover:text-white transition-colors">
                  Berita & Agenda
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Jl. Teknologi No. 123, Jakarta Timur</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+62212345678" className="text-blue-100 hover:text-white transition-colors">
                  (021) 2345678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@smkteknologinusantara.sch.id" className="text-blue-100 hover:text-white transition-colors">
                  info@smkteknologinusantara.sch.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="text-blue-100">Senin - Jumat: 07:00 - 16:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
            <p>&copy; 2025 SMK Teknologi Nusantara. Semua hak dilindungi.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Syarat Penggunaan
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

