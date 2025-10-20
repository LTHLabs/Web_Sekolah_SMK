# Dummy Data untuk Sistem Nilai Siswa

Dokumentasi lengkap tentang dummy data yang digunakan dalam sistem nilai siswa.

## 📊 Data Nilai Siswa Awal

Berikut adalah dummy data yang dimuat otomatis saat pertama kali membuka halaman "Nilai Siswa":

### Siswa 1: Andi Pratama (NIS: 2401001)
| Mata Pelajaran | Nilai | Tanggal |
|---|---|---|
| Pemrograman Java | 85 | 2024-10-15 |
| Web Development | 88 | 2024-10-15 |

### Siswa 2: Budi Santoso (NIS: 2401002)
| Mata Pelajaran | Nilai | Tanggal |
|---|---|---|
| Pemrograman Java | 92 | 2024-10-15 |
| Database Management | 90 | 2024-10-15 |

### Siswa 3: Citra Dewi (NIS: 2401003)
| Mata Pelajaran | Nilai | Tanggal |
|---|---|---|
| Robotika Dasar | 87 | 2024-10-15 |
| Elektronika | 84 | 2024-10-15 |

## 📝 Mata Pelajaran yang Tersedia

Berikut adalah daftar mata pelajaran yang dapat dipilih saat menambah nilai baru:

### Program Teknik Informatika
- Pemrograman Java
- Web Development
- Database Management
- Jaringan Komputer
- Cybersecurity
- Mobile Development

### Program Robotika
- Robotika Dasar
- Elektronika
- Otomasi Industri

## 🎯 Cara Menambah Data Baru

### Melalui UI (Recommended)
1. Buka halaman "Nilai Siswa"
2. Klik tombol "Tambah Nilai Baru"
3. Isi form:
   - **NIS**: Nomor Induk Siswa (contoh: 2401001)
   - **Nama Siswa**: Nama lengkap siswa
   - **Mata Pelajaran**: Pilih dari dropdown
   - **Nilai**: Angka 0-100
4. Klik "Tambah Nilai"

### Melalui Code (Development)
Edit file `client/src/pages/StudentGrades.tsx` dan ubah array `dummyData`:

```typescript
const dummyData: Grade[] = [
  {
    id: "1",
    nis: "2401001",
    name: "Andi Pratama",
    subject: "Pemrograman Java",
    score: 85,
    date: "2024-10-15",
  },
  // Tambahkan data baru di sini
  {
    id: "7",
    nis: "2401004",
    name: "Dina Kusuma",
    subject: "Robotika Dasar",
    score: 89,
    date: "2024-10-15",
  },
];
```

## 💾 Penyimpanan Data

### Client-Side Storage (localStorage)
- Data disimpan di browser menggunakan localStorage
- Tidak memerlukan server backend
- Data akan hilang jika cache browser dihapus

### Struktur Data
```typescript
interface Grade {
  id: string;           // Unique identifier (timestamp)
  nis: string;          // Nomor Induk Siswa
  name: string;         // Nama siswa
  subject: string;      // Mata pelajaran
  score: number;        // Nilai (0-100)
  date: string;         // Tanggal input (YYYY-MM-DD)
}
```

## 🔄 Operasi CRUD

### Create (Tambah)
```typescript
const newGrade: Grade = {
  id: Date.now().toString(),
  nis: "2401004",
  name: "Dina Kusuma",
  subject: "Robotika Dasar",
  score: 89,
  date: new Date().toISOString().split("T")[0],
};
```

### Read (Baca)
Data otomatis dimuat dari localStorage saat halaman dibuka.

### Update (Ubah)
Klik ikon edit di baris yang ingin diubah, ubah data, lalu klik "Update Nilai".

### Delete (Hapus)
Klik ikon hapus di baris yang ingin dihapus, lalu konfirmasi.

## 📈 Statistik Nilai

Sistem secara otomatis menghitung:
- **Total Siswa**: Jumlah siswa unik berdasarkan NIS
- **Total Nilai**: Jumlah total record nilai
- **Rata-rata Nilai**: Nilai rata-rata semua nilai

## 🎨 Indikator Warna Nilai

Nilai ditampilkan dengan warna berbeda berdasarkan kategori:

| Range Nilai | Warna | Kategori |
|---|---|---|
| ≥ 85 | Hijau | Sangat Baik |
| 70 - 84 | Kuning | Baik |
| < 70 | Merah | Perlu Perbaikan |

## 🔍 Fitur Pencarian

Pencarian dapat dilakukan berdasarkan:
- **NIS**: Nomor Induk Siswa (contoh: 2401001)
- **Nama Siswa**: Nama lengkap (contoh: Andi Pratama)
- **Mata Pelajaran**: Nama mata pelajaran (contoh: Pemrograman Java)

Pencarian bersifat case-insensitive dan real-time.

## ⚠️ Catatan Penting

### Untuk Development
- Dummy data membantu testing fitur CRUD
- Data dapat dihapus dan ditambah sesuai kebutuhan
- Setiap reload halaman akan memuat ulang dummy data jika localStorage kosong

### Untuk Production
- Gunakan database backend (Firebase, MongoDB, PostgreSQL, dll)
- Implementasikan autentikasi untuk keamanan
- Gunakan API endpoint untuk CRUD operations
- Simpan data di server, bukan di client

### Migrasi ke Database Backend

Untuk mengubah dari localStorage ke database backend:

1. **Buat API endpoint** untuk CRUD operations
2. **Update ChatBot component** untuk fetch dari API:
   ```typescript
   const response = await fetch('/api/grades', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(newGrade)
   });
   ```
3. **Hapus localStorage code** dan ganti dengan API calls
4. **Implementasikan autentikasi** untuk keamanan

## 📚 Contoh Tambahan Data

Jika ingin menambah lebih banyak dummy data, berikut contohnya:

```typescript
{
  id: "7",
  nis: "2401004",
  name: "Dina Kusuma",
  subject: "Elektronika",
  score: 91,
  date: "2024-10-15",
},
{
  id: "8",
  nis: "2401005",
  name: "Eka Wijaya",
  subject: "Web Development",
  score: 86,
  date: "2024-10-15",
},
{
  id: "9",
  nis: "2401005",
  name: "Eka Wijaya",
  subject: "Database Management",
  score: 89,
  date: "2024-10-15",
},
{
  id: "10",
  nis: "2401006",
  name: "Fajar Rahman",
  subject: "Pemrograman Java",
  score: 78,
  date: "2024-10-15",
},
{
  id: "11",
  nis: "2401006",
  name: "Fajar Rahman",
  subject: "Robotika Dasar",
  score: 82,
  date: "2024-10-15",
},
```

## 🚀 Tips Penggunaan

1. **Backup Data**: Sebelum menghapus data, catat nilai penting
2. **Export Data**: Gunakan browser console untuk export data:
   ```javascript
   console.log(JSON.stringify(JSON.parse(localStorage.getItem('studentGrades')), null, 2))
   ```
3. **Import Data**: Untuk import data ke localStorage:
   ```javascript
   localStorage.setItem('studentGrades', JSON.stringify(dataArray))
   ```

---

**Dokumentasi Dummy Data - SMK Teknologi Nusantara**

