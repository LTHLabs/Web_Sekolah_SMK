import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, BookOpen, Users, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import headmaster from "@/images/ipb.png";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Selamat Datang di SMK Teknologi Nusantara",
      subtitle: "Membangun Generasi Muda Teknologi Indonesia",
      image: "linear-gradient(135deg, #004AAD 0%, #0066FF 100%)",
    },
    {
      title: "Program Teknik Informatika",
      subtitle: "Pelajari Coding, Web Development, dan Cybersecurity",
      image: "linear-gradient(135deg, #0066FF 0%, #00A3E0 100%)",
    },
    {
      title: "Program Robotika",
      subtitle: "Inovasi Teknologi untuk Masa Depan",
      image: "linear-gradient(135deg, #00A3E0 0%, #00D4FF 100%)",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full">
      {/* Hero Slider */}
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg md:rounded-none">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: slide.image }}
          >
            <div className="h-full flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-2xl text-blue-100">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link href="/profile">
            <a className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
              <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-gray-800">Profil Sekolah</h3>
              <p className="text-sm text-gray-600 mt-2">Visi, misi, dan sejarah kami</p>
            </a>
         </Link>

        <Link href="/programs">
            <a className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
              <Zap className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-800">Program Keahlian</h3>
              <p className="text-sm text-gray-600 mt-2">Informatika & Robotika</p>
            </a>
          </Link> 

    <Link href="/teachers">
             <a className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
              <Users className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-gray-800">Guru & Staf</h3>
              <p className="text-sm text-gray-600 mt-2">Tim profesional kami</p>
            </a>
          </Link>

          <Link href="/grades">
            <a className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
              <Award className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-bold text-gray-800">Nilai Siswa</h3>
              <p className="text-sm text-gray-600 mt-2">Cek nilai akademik</p>
            </a>
          </Link>
        </div>
      </div>

      {/* Sambutan Kepala Sekolah */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="w-64 h-80 bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2"></div>
                  <p className="font-semibold">Drs. Ahmad Sahroni, M.Pd</p>
                  <p className="text-sm">Kepala Sekolah</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sambutan Kepala Sekolah</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Assalamu'alaikum Warahmatullahi Wabarakatuh,
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Puji syukur kami panjatkan kepada Allah SWT atas segala nikmat dan karunia yang telah diberikan kepada SMK Teknologi Nusantara. Dengan bangga kami persembahkan website resmi sekolah yang menjadi jembatan komunikasi antara sekolah, siswa, guru, dan orang tua.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                SMK Teknologi Nusantara berkomitmen untuk menghasilkan lulusan yang tidak hanya menguasai ilmu pengetahuan dan teknologi, tetapi juga memiliki karakter mulia, keterampilan praktis, dan siap bersaing di era digital. Kami percaya bahwa pendidikan berkualitas adalah investasi terbaik untuk masa depan bangsa.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Terima kasih atas kepercayaan dan dukungan Anda. Mari bersama-sama membangun generasi muda Indonesia yang cerdas, terampil, dan berakhlak mulia.
              </p>
              <p className="text-gray-700 mt-6 font-semibold">
                Wassalamu'alaikum Warahmatullahi Wabarakatuh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Berita Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Juara Kompetisi Robotika Nasional",
              date: "20 Oktober 2024",
              category: "Prestasi",
              excerpt: "Tim robotika SMK Teknologi Nusantara berhasil meraih juara pertama dalam kompetisi robotika nasional...",
            },
            {
              title: "Peluncuran Program Magang Industri",
              date: "18 Oktober 2024",
              category: "Program",
              excerpt: "Sekolah meluncurkan program magang industri bagi siswa kelas XI dengan mitra perusahaan teknologi terkemuka...",
            },
            {
              title: "Workshop Cybersecurity Gratis",
              date: "15 Oktober 2024",
              category: "Workshop",
              excerpt: "Kami mengadakan workshop gratis tentang cybersecurity untuk semua siswa program Teknik Informatika...",
            },
          ].map((news, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-blue-300 to-blue-500"></div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {news.category}
                  </span>
                  <span className="text-xs text-gray-500">{news.date}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{news.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{news.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/news">
            <a className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Lihat Semua Berita
            </a>
          </Link>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-blue-100">Tahun Berdiri</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">520+</div>
              <p className="text-blue-100">Siswa Aktif</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40+</div>
              <p className="text-blue-100">Guru Profesional</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">Tingkat Kelulusan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

