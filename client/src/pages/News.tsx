import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, User } from "lucide-react";

export default function News() {
  const allNews = [
    {
      id: 1,
      title: "Juara Kompetisi Robotika Nasional",
      date: "20 Oktober 2024",
      author: "Admin",
      category: "Prestasi",
      excerpt: "Tim robotika SMK Teknologi Nusantara berhasil meraih juara pertama dalam kompetisi robotika nasional yang diselenggarakan di Jakarta Convention Center.",
      content: "Dengan bangga kami umumkan bahwa tim robotika SMK Teknologi Nusantara telah meraih juara pertama dalam kompetisi robotika nasional. Prestasi ini adalah hasil dari kerja keras dan dedikasi siswa-siswa kami selama berbulan-bulan. Tim terdiri dari 5 siswa kelas XII yang telah menunjukkan inovasi dan kreativitas luar biasa dalam merancang robot mereka.",
    },
    {
      id: 2,
      title: "Peluncuran Program Magang Industri",
      date: "18 Oktober 2024",
      author: "Admin",
      category: "Program",
      excerpt: "Sekolah meluncurkan program magang industri bagi siswa kelas XI dengan mitra perusahaan teknologi terkemuka di Indonesia.",
      content: "SMK Teknologi Nusantara dengan bangga meluncurkan program magang industri yang akan memberikan pengalaman praktis kepada siswa. Program ini melibatkan kerjasama dengan berbagai perusahaan teknologi terkemuka seperti PT. Telkom Indonesia, PT. Indosat, dan beberapa startup teknologi.",
    },
    {
      id: 3,
      title: "Workshop Cybersecurity Gratis",
      date: "15 Oktober 2024",
      author: "Admin",
      category: "Workshop",
      excerpt: "Kami mengadakan workshop gratis tentang cybersecurity untuk semua siswa program Teknik Informatika dengan pembicara dari industri.",
      content: "Workshop cybersecurity gratis telah diselenggarakan dengan menghadirkan pembicara dari PT. Cyber Security Indonesia. Peserta mendapatkan pengetahuan mendalam tentang teknik-teknik keamanan siber terkini dan best practices dalam melindungi sistem informasi.",
    },
    {
      id: 4,
      title: "Pembukaan Laboratorium IoT Terbaru",
      date: "12 Oktober 2024",
      author: "Admin",
      category: "Fasilitas",
      excerpt: "SMK Teknologi Nusantara telah membuka laboratorium Internet of Things (IoT) terbaru dengan peralatan canggih senilai miliaran rupiah.",
      content: "Laboratorium IoT terbaru kami dilengkapi dengan berbagai sensor, mikrokontroler, dan perangkat IoT terkini. Fasilitas ini akan digunakan untuk mendukung pembelajaran praktis siswa dalam bidang Internet of Things dan smart systems.",
    },
    {
      id: 5,
      title: "Kerjasama dengan Universitas Teknologi",
      date: "10 Oktober 2024",
      author: "Admin",
      category: "Kerjasama",
      excerpt: "SMK Teknologi Nusantara menjalin kerjasama dengan Universitas Teknologi Indonesia untuk program dual degree dan beasiswa.",
      content: "Kerjasama strategis ini membuka peluang bagi siswa berprestasi untuk melanjutkan pendidikan ke jenjang universitas dengan beasiswa penuh. Program ini juga mencakup transfer kredit untuk mata pelajaran tertentu.",
    },
    {
      id: 6,
      title: "Siswa Kami Lolos Beasiswa Penuh ke Luar Negeri",
      date: "8 Oktober 2024",
      author: "Admin",
      category: "Prestasi",
      excerpt: "Tiga siswa SMK Teknologi Nusantara berhasil lolos beasiswa penuh untuk melanjutkan pendidikan ke universitas di Singapura dan Malaysia.",
      content: "Prestasi gemilang telah diraih oleh tiga siswa kami yang berhasil lolos seleksi beasiswa penuh dari Universitas Teknologi Nanyang Singapura dan Universitas Teknologi Malaysia. Mereka akan melanjutkan pendidikan di bidang Teknik Informatika dan Robotika.",
    },
    {
      id: 7,
      title: "Hackathon Internal SMK Teknologi Nusantara",
      date: "5 Oktober 2024",
      author: "Admin",
      category: "Event",
      excerpt: "Kami mengadakan hackathon internal dengan tema 'Smart School Solution' yang diikuti oleh lebih dari 50 siswa dari berbagai kelas.",
      content: "Hackathon internal ini memberikan kesempatan kepada siswa untuk mengembangkan ide-ide kreatif mereka dalam waktu 24 jam. Pemenang akan mendapatkan hadiah menarik dan kesempatan untuk mempresentasikan ide mereka kepada investor.",
    },
    {
      id: 8,
      title: "Sertifikasi Internasional untuk Guru",
      date: "1 Oktober 2024",
      author: "Admin",
      category: "Pengembangan",
      excerpt: "Sepuluh guru SMK Teknologi Nusantara telah menyelesaikan program sertifikasi internasional dari Cisco dan Microsoft.",
      content: "Guru-guru kami telah menyelesaikan program pelatihan intensif dan berhasil meraih sertifikasi internasional. Ini menunjukkan komitmen sekolah dalam meningkatkan kualitas pembelajaran dan mengikuti perkembangan teknologi terkini.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(allNews.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = allNews.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Berita & Agenda</h1>
          <p className="text-blue-100">Informasi terbaru dari SMK Teknologi Nusantara</p>
        </div>
      </div>

      {/* News Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {currentNews.map((news) => (
            <article key={news.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-blue-300 to-blue-500"></div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{news.author}</span>
                  </div>
                </div>

                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{news.title}</h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{news.excerpt}</p>

                {/* Read More */}
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Baca Selengkapnya →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Info */}
        <div className="text-center text-gray-600">
          <p>
            Menampilkan {startIndex + 1} - {Math.min(startIndex + itemsPerPage, allNews.length)} dari {allNews.length} berita
          </p>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Agenda Mendatang</h2>
          <div className="space-y-4">
            {[
              { date: "25 Oktober 2024", title: "Ujian Tengah Semester", location: "Ruang Kelas" },
              { date: "30 Oktober 2024", title: "Workshop Cloud Computing", location: "Laboratorium IT" },
              { date: "5 November 2024", title: "Kunjungan Industri ke PT. Telkom", location: "PT. Telkom Indonesia" },
              { date: "10 November 2024", title: "Seminar Karir dan Beasiswa", location: "Aula Sekolah" },
              { date: "15 November 2024", title: "Kompetisi Robotika Internal", location: "Lapangan Sekolah" },
            ].map((agenda, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-lg p-4 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-1">{agenda.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{agenda.date}</p>
                  <p className="text-sm text-gray-500">📍 {agenda.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

