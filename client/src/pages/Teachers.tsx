import { Mail, Phone } from "lucide-react";

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "Drs. Ahmad Wijaya, M.Pd",
      position: "Kepala Sekolah",
      department: "Administrasi",
      email: "ahmad.wijaya@smkteknologinusantara.sch.id",
      phone: "(021) 2345678",
      expertise: "Manajemen Pendidikan",
    },
    {
      id: 2,
      name: "Hendra Gunawan, S.Kom",
      position: "Kepala Program Teknik Informatika",
      department: "Teknik Informatika",
      email: "hendra.gunawan@smkteknologinusantara.sch.id",
      phone: "(021) 2345679",
      expertise: "Web Development, Database",
    },
    {
      id: 3,
      name: "Dewi Lestari, S.T",
      position: "Kepala Program Robotika",
      department: "Robotika",
      email: "dewi.lestari@smkteknologinusantara.sch.id",
      phone: "(021) 2345680",
      expertise: "Robotika, PLC, Otomasi",
    },
    {
      id: 4,
      name: "Budi Santoso, S.Kom",
      position: "Guru Pemrograman",
      department: "Teknik Informatika",
      email: "budi.santoso@smkteknologinusantara.sch.id",
      phone: "(021) 2345681",
      expertise: "Java, Python, C++",
    },
    {
      id: 5,
      name: "Siti Nurhaliza, S.Pd",
      position: "Guru Bahasa Inggris",
      department: "Umum",
      email: "siti.nurhaliza@smkteknologinusantara.sch.id",
      phone: "(021) 2345682",
      expertise: "Bahasa Inggris Teknis",
    },
    {
      id: 6,
      name: "Rina Wijaya, S.T",
      position: "Guru Elektronika",
      department: "Robotika",
      email: "rina.wijaya@smkteknologinusantara.sch.id",
      phone: "(021) 2345683",
      expertise: "Elektronika, Mikrokontroler",
    },
    {
      id: 7,
      name: "Rudi Hermawan, S.Kom",
      position: "Guru Web Development",
      department: "Teknik Informatika",
      email: "rudi.hermawan@smkteknologinusantara.sch.id",
      phone: "(021) 2345684",
      expertise: "HTML, CSS, JavaScript, React",
    },
    {
      id: 8,
      name: "Eka Putri, S.T",
      position: "Guru Robotika",
      department: "Robotika",
      email: "eka.putri@smkteknologinusantara.sch.id",
      phone: "(021) 2345685",
      expertise: "Robot Design, Programming",
    },
    {
      id: 9,
      name: "Ahmad Rizki, S.Kom",
      position: "Guru Jaringan Komputer",
      department: "Teknik Informatika",
      email: "ahmad.rizki@smkteknologinusantara.sch.id",
      phone: "(021) 2345686",
      expertise: "Network, Cybersecurity",
    },
    {
      id: 10,
      name: "Lina Wijaya, S.Pd",
      position: "Guru Matematika",
      department: "Umum",
      email: "lina.wijaya@smkteknologinusantara.sch.id",
      phone: "(021) 2345687",
      expertise: "Matematika Teknis",
    },
    {
      id: 11,
      name: "Bambang Sutrisno, S.T",
      position: "Guru Otomasi Industri",
      department: "Robotika",
      email: "bambang.sutrisno@smkteknologinusantara.sch.id",
      phone: "(021) 2345688",
      expertise: "PLC, SCADA, Otomasi",
    },
    {
      id: 12,
      name: "Maya Kusuma, S.Kom",
      position: "Guru Database",
      department: "Teknik Informatika",
      email: "maya.kusuma@smkteknologinusantara.sch.id",
      phone: "(021) 2345689",
      expertise: "MySQL, PostgreSQL, Oracle",
    },
  ];

  const departments = [
    { name: "Semua", value: "all" },
    { name: "Teknik Informatika", value: "Teknik Informatika" },
    { name: "Robotika", value: "Robotika" },
    { name: "Umum", value: "Umum" },
    { name: "Administrasi", value: "Administrasi" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Guru & Staf</h1>
          <p className="text-blue-100">Tim profesional SMK Teknologi Nusantara</p>
        </div>
      </div>

      {/* Teachers Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Daftar Guru dan Staf</h2>
          <p className="text-gray-600 mb-6">
            SMK Teknologi Nusantara memiliki lebih dari 40 guru dan staf profesional yang berdedikasi untuk memberikan pendidikan berkualitas tinggi.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              {/* Header with gradient */}
              <div className="h-32 bg-gradient-to-r from-blue-400 to-blue-600 flex items-end justify-center pb-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                  👨‍🏫
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{teacher.name}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-2">{teacher.position}</p>
                <p className="text-xs text-gray-500 mb-3">{teacher.department}</p>

                {/* Expertise */}
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold">Keahlian:</span> {teacher.expertise}
                  </p>
                </div>

                {/* Contact */}
                <div className="space-y-2 border-t pt-4">
                  <a
                    href={`mailto:${teacher.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{teacher.email}</span>
                  </a>
                  <a
                    href={`tel:${teacher.phone}`}
                    className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{teacher.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Statistik Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">40+</p>
              <p className="text-gray-700 font-semibold">Guru Profesional</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">100%</p>
              <p className="text-gray-700 font-semibold">Bersertifikat</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-3xl font-bold text-purple-600 mb-2">15+</p>
              <p className="text-gray-700 font-semibold">Tahun Pengalaman</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-3xl font-bold text-orange-600 mb-2">25+</p>
              <p className="text-gray-700 font-semibold">Sertifikasi Internasional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Kualifikasi Tim Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-4">Pendidikan</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ S1 Pendidikan Teknik</li>
              <li>✓ S1 Teknik Informatika</li>
              <li>✓ S2 Pendidikan (M.Pd)</li>
              <li>✓ Sertifikasi Guru Profesional</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-green-600 mb-4">Pengalaman Industri</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Pengalaman di Perusahaan IT</li>
              <li>✓ Pengalaman Robotika & Otomasi</li>
              <li>✓ Pengalaman Networking & Security</li>
              <li>✓ Pengalaman Konsultan Teknis</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-purple-600 mb-4">Sertifikasi</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Cisco Certified</li>
              <li>✓ Microsoft Certified</li>
              <li>✓ Oracle Certified</li>
              <li>✓ Google Cloud Certified</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

