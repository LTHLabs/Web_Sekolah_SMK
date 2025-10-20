import { useState, useEffect } from "react";
import { Trash2, Edit2, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Grade {
  id: string;
  nis: string;
  name: string;
  subject: string;
  score: number;
  date: string;
}

export default function StudentGrades() {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nis: "",
    name: "",
    subject: "",
    score: "",
  });

  // Load data from localStorage
  useEffect(() => {
    const savedGrades = localStorage.getItem("studentGrades");
    if (savedGrades) {
      setGrades(JSON.parse(savedGrades));
    } else {
      // Initialize with dummy data
      const dummyData: Grade[] = [
        {
          id: "1",
          nis: "2401001",
          name: "Andi Pratama",
          subject: "Pemrograman Java",
          score: 85,
          date: "2024-10-15",
        },
        {
          id: "2",
          nis: "2401001",
          name: "Andi Pratama",
          subject: "Web Development",
          score: 88,
          date: "2024-10-15",
        },
        {
          id: "3",
          nis: "2401002",
          name: "Budi Santoso",
          subject: "Pemrograman Java",
          score: 92,
          date: "2024-10-15",
        },
        {
          id: "4",
          nis: "2401002",
          name: "Budi Santoso",
          subject: "Database Management",
          score: 90,
          date: "2024-10-15",
        },
        {
          id: "5",
          nis: "2401003",
          name: "Citra Dewi",
          subject: "Robotika Dasar",
          score: 87,
          date: "2024-10-15",
        },
        {
          id: "6",
          nis: "2401003",
          name: "Citra Dewi",
          subject: "Elektronika",
          score: 84,
          date: "2024-10-15",
        },
      ];
      setGrades(dummyData);
      localStorage.setItem("studentGrades", JSON.stringify(dummyData));
    }
  }, []);

  // Save to localStorage
  const saveToLocalStorage = (data: Grade[]) => {
    localStorage.setItem("studentGrades", JSON.stringify(data));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nis || !formData.name || !formData.subject || !formData.score) {
      alert("Semua field harus diisi!");
      return;
    }

    if (editingId) {
      // Update existing
      const updatedGrades = grades.map((g) =>
        g.id === editingId
          ? {
              ...g,
              nis: formData.nis,
              name: formData.name,
              subject: formData.subject,
              score: parseInt(formData.score),
              date: new Date().toISOString().split("T")[0],
            }
          : g
      );
      setGrades(updatedGrades);
      saveToLocalStorage(updatedGrades);
      setEditingId(null);
    } else {
      // Add new
      const newGrade: Grade = {
        id: Date.now().toString(),
        nis: formData.nis,
        name: formData.name,
        subject: formData.subject,
        score: parseInt(formData.score),
        date: new Date().toISOString().split("T")[0],
      };
      const updatedGrades = [...grades, newGrade];
      setGrades(updatedGrades);
      saveToLocalStorage(updatedGrades);
    }

    // Reset form
    setFormData({ nis: "", name: "", subject: "", score: "" });
    setIsFormOpen(false);
  };

  // Handle edit
  const handleEdit = (grade: Grade) => {
    setFormData({
      nis: grade.nis,
      name: grade.name,
      subject: grade.subject,
      score: grade.score.toString(),
    });
    setEditingId(grade.id);
    setIsFormOpen(true);
  };

  // Handle delete
  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      const updatedGrades = grades.filter((g) => g.id !== id);
      setGrades(updatedGrades);
      saveToLocalStorage(updatedGrades);
    }
  };

  // Filter grades
  const filteredGrades = grades.filter(
    (grade) =>
      grade.nis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grade.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grade.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get unique students
  const uniqueStudents = Array.from(new Set(grades.map((g) => g.nis))).length;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Nilai Siswa</h1>
          <p className="text-blue-100">Sistem manajemen nilai akademik siswa</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-3xl font-bold text-blue-600 mb-2">{uniqueStudents}</p>
            <p className="text-gray-700 font-semibold">Total Siswa</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-3xl font-bold text-green-600 mb-2">{grades.length}</p>
            <p className="text-gray-700 font-semibold">Total Nilai</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-3xl font-bold text-purple-600 mb-2">
              {(grades.reduce((sum, g) => sum + g.score, 0) / grades.length).toFixed(1)}
            </p>
            <p className="text-gray-700 font-semibold">Rata-rata Nilai</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {editingId ? "Edit Nilai Siswa" : "Tambah Nilai Siswa"}
            </h2>
            {isFormOpen && (
              <button
                onClick={() => {
                  setIsFormOpen(false);
                  setEditingId(null);
                  setFormData({ nis: "", name: "", subject: "", score: "" });
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </div>

          {isFormOpen && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">NIS</label>
                  <input
                    type="text"
                    value={formData.nis}
                    onChange={(e) => setFormData({ ...formData, nis: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Nomor Induk Siswa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Siswa</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Nama Lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mata Pelajaran</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Pilih Mata Pelajaran</option>
                    <option value="Pemrograman Java">Pemrograman Java</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Database Management">Database Management</option>
                    <option value="Robotika Dasar">Robotika Dasar</option>
                    <option value="Elektronika">Elektronika</option>
                    <option value="Jaringan Komputer">Jaringan Komputer</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Mobile Development">Mobile Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nilai (0-100)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.score}
                    onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Nilai"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  {editingId ? "Update Nilai" : "Tambah Nilai"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsFormOpen(false);
                    setEditingId(null);
                    setFormData({ nis: "", name: "", subject: "", score: "" });
                  }}
                  className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors font-semibold"
                >
                  Batal
                </button>
              </div>
            </form>
          )}

          {!isFormOpen && (
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              <Plus className="w-5 h-5" />
              Tambah Nilai Baru
            </button>
          )}
        </div>

        {/* Search Section */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari berdasarkan NIS, nama, atau mata pelajaran..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">NIS</th>
                  <th className="px-6 py-4 text-left font-semibold">Nama Siswa</th>
                  <th className="px-6 py-4 text-left font-semibold">Mata Pelajaran</th>
                  <th className="px-6 py-4 text-left font-semibold">Nilai</th>
                  <th className="px-6 py-4 text-left font-semibold">Tanggal</th>
                  <th className="px-6 py-4 text-left font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredGrades.length > 0 ? (
                  filteredGrades.map((grade) => (
                    <tr key={grade.id} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-800 font-semibold">{grade.nis}</td>
                      <td className="px-6 py-4 text-gray-800">{grade.name}</td>
                      <td className="px-6 py-4 text-gray-800">{grade.subject}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full font-semibold text-white ${
                            grade.score >= 85
                              ? "bg-green-600"
                              : grade.score >= 70
                              ? "bg-yellow-600"
                              : "bg-red-600"
                          }`}
                        >
                          {grade.score}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{grade.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(grade)}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(grade.id)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                            title="Hapus"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                      Tidak ada data yang ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

