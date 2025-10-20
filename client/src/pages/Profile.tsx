import { MapPin, Phone, Mail, Users } from "lucide-react";

export default function Profile() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Profil Sekolah</h1>
          <p className="text-blue-100">Mengenal lebih dekat SMK Teknologi Nusantara</p>
        </div>
      </div>

      {/* Visi & Misi */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Visi Kami</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Menjadi sekolah menengah kejuruan terkemuka yang menghasilkan lulusan berkompetensi tinggi di bidang teknologi, berakhlak mulia, dan siap berkontribusi pada pembangunan bangsa.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Misi Kami</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">1.</span>
                <span>Menyelenggarakan pendidikan dan pelatihan berkualitas di bidang teknologi informatika dan robotika</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">2.</span>
                <span>Mengembangkan karakter dan kepribadian siswa yang beriman dan bertakwa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">3.</span>
                <span>Mempersiapkan siswa untuk memasuki dunia kerja dan industri</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">4.</span>
                <span>Membangun kemitraan strategis dengan industri dan institusi pendidikan</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sejarah */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sejarah Sekolah</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                SMK Teknologi Nusantara didirikan pada tahun 1999 dengan visi untuk menyediakan pendidikan kejuruan berkualitas tinggi di bidang teknologi. Berawal dari sebuah gedung sederhana dengan fasilitas terbatas, sekolah ini terus berkembang menjadi institusi pendidikan yang diakui secara nasional.
              </p>
              <p>
                Pada tahun 2005, sekolah membuka program Teknik Informatika sebagai respons terhadap meningkatnya kebutuhan tenaga kerja di bidang teknologi informasi. Program ini berkembang pesat dan menghasilkan banyak lulusan yang sukses di industri.
              </p>
              <p>
                Tahun 2010 menandai era baru dengan pembukaan program Robotika, yang menjadi salah satu program unggulan sekolah. Dengan dukungan dari berbagai mitra industri, program ini terus berinovasi dan menghasilkan siswa-siswa berprestasi.
              </p>
              <p>
                Hingga saat ini, SMK Teknologi Nusantara terus berkembang dengan meningkatkan kualitas pembelajaran, fasilitas, dan kemitraan industri. Sekolah telah menghasilkan ribuan lulusan yang tersebar di berbagai perusahaan teknologi terkemuka di Indonesia dan mancanegara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Struktur Organisasi</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {[
              { position: "Kepala Sekolah", name: "Drs. Ahmad Wijaya, M.Pd" },
              { position: "Wakil Kepala Sekolah (Kurikulum)", name: "Siti Nurhaliza, S.Pd" },
              { position: "Wakil Kepala Sekolah (Kesiswaan)", name: "Budi Santoso, S.Pd" },
              { position: "Wakil Kepala Sekolah (Sarana & Prasarana)", name: "Rina Wijaya, S.Pd" },
              { position: "Kepala Program Teknik Informatika", name: "Hendra Gunawan, S.Kom" },
              { position: "Kepala Program Robotika", name: "Dewi Lestari, S.T" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-600">
                <p className="text-sm text-blue-600 font-semibold">{item.position}</p>
                <p className="text-lg font-bold text-gray-800">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi & Kontak */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Lokasi & Kontak</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3669255254736!2d106.8227!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sJl.%20Teknologi%20No.%20123%2C%20Jakarta%20Timur!5e0!3m2!1sid!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Alamat</h3>
                    <p className="text-gray-700">Jl. Teknologi No. 123, Jakarta Timur 13210, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Telepon</h3>
                    <p className="text-gray-700">(021) 2345678</p>
                    <p className="text-gray-700">(021) 2345679 (Fax)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-700">info@smkteknologinusantara.sch.id</p>
                    <p className="text-gray-700">pendaftaran@smkteknologinusantara.sch.id</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Jam Operasional</h3>
                    <p className="text-gray-700">Senin - Jumat: 07:00 - 16:00</p>
                    <p className="text-gray-700">Sabtu: 07:00 - 12:00</p>
                    <p className="text-gray-700">Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

