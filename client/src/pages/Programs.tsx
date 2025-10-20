import { Code, Cpu, Users, BookOpen, Award, Briefcase } from "lucide-react";

export default function Programs() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Program Keahlian</h1>
          <p className="text-blue-100">Dua program unggulan untuk masa depan Anda</p>
        </div>
      </div>

      {/* Program Informatika */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          {/* Image */}
          <div className="h-96 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg flex items-center justify-center">
            <Code className="w-32 h-32 text-white opacity-50" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Teknik Informatika</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Program Teknik Informatika dirancang untuk mempersiapkan siswa menjadi profesional di bidang teknologi informasi. Dengan kurikulum yang relevan dengan industri, siswa akan menguasai berbagai keterampilan pemrograman, web development, dan cybersecurity.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
              {[
                "Pemrograman (Java, Python, JavaScript, C++)",
                "Web Development (HTML, CSS, React, Node.js)",
                "Database Management (MySQL, PostgreSQL)",
                "Cybersecurity dan Network Administration",
                "Mobile App Development",
                "Cloud Computing dan DevOps",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600">150+</p>
                <p className="text-sm text-gray-600">Siswa Aktif</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600">15+</p>
                <p className="text-sm text-gray-600">Guru Berpengalaman</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600">98%</p>
                <p className="text-sm text-gray-600">Terserap Kerja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Robotika */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Robotika & Otomasi</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Program Robotika mempersiapkan siswa untuk menjadi ahli dalam bidang robotika, otomasi industri, dan Internet of Things (IoT). Dengan fasilitas laboratorium modern dan pelatihan praktis, siswa akan mengembangkan keterampilan teknis yang sangat dibutuhkan industri 4.0.
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {[
                  "Desain dan Pemrograman Robot",
                  "Elektronika dan Mikrokontroler (Arduino, PLC)",
                  "Sistem Otomasi Industri",
                  "Internet of Things (IoT)",
                  "Sensor dan Aktuator",
                  "Maintenance dan Troubleshooting",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-600">120+</p>
                  <p className="text-sm text-gray-600">Siswa Aktif</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-600">12+</p>
                  <p className="text-sm text-gray-600">Guru Berpengalaman</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-600">96%</p>
                  <p className="text-sm text-gray-600">Terserap Kerja</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="h-96 bg-gradient-to-br from-green-300 to-green-500 rounded-lg flex items-center justify-center">
              <Cpu className="w-32 h-32 text-white opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Kompetitif */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Keunggulan Kompetitif</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <BookOpen className="w-8 h-8" />,
              title: "Kurikulum Terkini",
              description: "Kurikulum disesuaikan dengan kebutuhan industri dan standar internasional",
            },
            {
              icon: <Cpu className="w-8 h-8" />,
              title: "Fasilitas Modern",
              description: "Laboratorium lengkap dengan peralatan teknologi terbaru dan terkini",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Guru Berpengalaman",
              description: "Guru-guru profesional dengan pengalaman industri dan sertifikasi internasional",
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Prestasi Gemilang",
              description: "Siswa kami telah meraih berbagai penghargaan di tingkat nasional dan internasional",
            },
            {
              icon: <Briefcase className="w-8 h-8" />,
              title: "Kemitraan Industri",
              description: "Kerjasama dengan perusahaan teknologi terkemuka untuk magang dan penempatan kerja",
            },
            {
              icon: <Code className="w-8 h-8" />,
              title: "Praktik Langsung",
              description: "Pembelajaran berbasis proyek dengan studi kasus nyata dari industri",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prospek Karir */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Prospek Karir</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Teknik Informatika</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Web Developer</li>
                <li>✓ Mobile App Developer</li>
                <li>✓ System Administrator</li>
                <li>✓ Database Administrator</li>
                <li>✓ Network Engineer</li>
                <li>✓ Cybersecurity Specialist</li>
                <li>✓ IT Support Specialist</li>
                <li>✓ Cloud Engineer</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-4">Robotika & Otomasi</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Robotics Engineer</li>
                <li>✓ Automation Technician</li>
                <li>✓ PLC Programmer</li>
                <li>✓ IoT Developer</li>
                <li>✓ Maintenance Technician</li>
                <li>✓ Industrial Designer</li>
                <li>✓ Control Systems Engineer</li>
                <li>✓ Manufacturing Engineer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

