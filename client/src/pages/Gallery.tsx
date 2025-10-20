import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Kompetisi Robotika Nasional 2024",
      category: "Kompetisi",
      description: "Tim robotika kami meraih juara pertama dalam kompetisi robotika nasional",
    },
    {
      id: 2,
      title: "Workshop Web Development",
      category: "Workshop",
      description: "Siswa mengikuti workshop intensif tentang web development dengan teknologi terkini",
    },
    {
      id: 3,
      title: "Laboratorium Informatika",
      category: "Fasilitas",
      description: "Laboratorium informatika dengan 50 unit komputer dan peralatan modern",
    },
    {
      id: 4,
      title: "Kegiatan Belajar Robotika",
      category: "Pembelajaran",
      description: "Siswa belajar merancang dan memprogram robot di laboratorium robotika",
    },
    {
      id: 5,
      title: "Kunjungan Industri ke PT. Telkom",
      category: "Kunjungan",
      description: "Siswa mengunjungi data center dan fasilitas teknologi PT. Telkom Indonesia",
    },
    {
      id: 6,
      title: "Seminar Karir dan Beasiswa",
      category: "Seminar",
      description: "Pembicara dari berbagai universitas dan perusahaan berbagi tentang peluang karir",
    },
    {
      id: 7,
      title: "Praktik Database Management",
      category: "Pembelajaran",
      description: "Siswa mempelajari database management dengan MySQL dan PostgreSQL",
    },
    {
      id: 8,
      title: "Hackathon Internal SMK",
      category: "Event",
      description: "Siswa berkompetisi dalam hackathon dengan tema smart school solution",
    },
    {
      id: 9,
      title: "Upacara Bendera Hari Senin",
      category: "Kegiatan",
      description: "Upacara bendera rutin setiap hari Senin dengan seluruh siswa dan guru",
    },
    {
      id: 10,
      title: "Latihan Cybersecurity",
      category: "Pembelajaran",
      description: "Siswa belajar teknik keamanan siber dan ethical hacking",
    },
    {
      id: 11,
      title: "Pameran Teknologi Sekolah",
      category: "Event",
      description: "Pameran karya siswa menampilkan proyek-proyek teknologi terbaik",
    },
    {
      id: 12,
      title: "Wisuda Angkatan 2024",
      category: "Event",
      description: "Upacara wisuda kelulusan siswa angkatan 2024 dengan orang tua dan keluarga",
    },
  ];

  const categories = ["Semua", ...Array.from(new Set(galleryItems.map((item) => item.category)))];
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredItems =
    selectedCategory === "Semua" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Galeri Sekolah</h1>
          <p className="text-blue-100">Dokumentasi kegiatan dan prestasi SMK Teknologi Nusantara</p>
        </div>
      </div>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="h-64 bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">🖼️</span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800 line-clamp-2">{item.title}</h3>
                </div>
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded mb-2">
                  {item.category}
                </span>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="bg-gradient-to-br from-blue-300 to-blue-500 h-96 rounded-lg flex items-center justify-center text-6xl">
              🖼️
            </div>

            {/* Info */}
            {galleryItems.find((item) => item.id === selectedImage) && (
              <div className="bg-white p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {galleryItems.find((item) => item.id === selectedImage)?.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {galleryItems.find((item) => item.id === selectedImage)?.description}
                </p>
                <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded">
                  {galleryItems.find((item) => item.id === selectedImage)?.category}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Statistics */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Statistik Galeri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">{galleryItems.length}+</p>
              <p className="text-gray-700 font-semibold">Foto Dokumentasi</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">{categories.length - 1}</p>
              <p className="text-gray-700 font-semibold">Kategori Kegiatan</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-3xl font-bold text-purple-600 mb-2">50+</p>
              <p className="text-gray-700 font-semibold">Kegiatan Setiap Tahun</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

