# SMK Teknologi Nusantara - Website Sekolah

Website resmi SMK Teknologi Nusantara dengan fitur lengkap untuk menampilkan profil sekolah, berita, galeri, data guru, sistem nilai siswa, dan chatbot bantuan berbasis Gemini API.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi dan Setup](#instalasi-dan-setup)
- [Cara Menggunakan](#cara-menggunakan)
- [Fitur Detail](#fitur-detail)
- [Panduan Pengeditan Konten](#panduan-pengeditan-konten)
- [Integrasi Gemini API](#integrasi-gemini-api)
- [Troubleshooting](#troubleshooting)

## 🎯 Fitur Utama

### 1. **Halaman Beranda (Home)**
- Slider banner otomatis dengan 3 slide
- Sambutan dari Kepala Sekolah
- Quick links ke halaman utama
- Preview berita terbaru
- Statistik sekolah (tahun berdiri, jumlah siswa, guru, tingkat kelulusan)

### 2. **Profil Sekolah**
- Visi dan Misi
- Sejarah singkat sekolah
- Struktur organisasi
- Lokasi dengan Google Maps embed
- Informasi kontak lengkap

### 3. **Program Keahlian**
- Deskripsi Program Teknik Informatika
- Deskripsi Program Robotika
- Mata pelajaran yang diajarkan
- Statistik siswa dan guru per program
- Prospek karir untuk setiap program
- Keunggulan kompetitif

### 4. **Guru & Staf**
- Daftar lengkap guru dan staf
- Foto profil (placeholder)
- Jabatan dan departemen
- Keahlian khusus
- Kontak email dan telepon
- Filter berdasarkan departemen

### 5. **Berita & Agenda**
- Daftar berita dengan pagination
- Kategori berita (Prestasi, Program, Workshop, dll)
- Agenda sekolah mendatang
- Meta informasi (tanggal, penulis)
- Navigasi halaman yang mudah

### 6. **Galeri**
- Grid foto kegiatan sekolah
- Filter berdasarkan kategori
- Modal untuk melihat foto lebih besar
- Deskripsi untuk setiap foto
- Statistik galeri

### 7. **Nilai Siswa (Database)**
- Tabel nilai siswa dengan CRUD lengkap
- Pencarian berdasarkan NIS, nama, atau mata pelajaran
- Tambah nilai baru
- Edit nilai yang ada
- Hapus nilai
- Penyimpanan data menggunakan localStorage
- Dummy data untuk demo
- Statistik nilai (total siswa, total nilai, rata-rata)
- Indikator warna untuk nilai (hijau ≥85, kuning ≥70, merah <70)

### 8. **Chatbot Bantuan**
- Widget chatbot di pojok kanan bawah
- Integrasi dengan Google Gemini API
- Fallback responses ketika API tidak tersedia
- Pesan sambutan otomatis
- Riwayat percakapan
- Indikator loading saat mengetik

## 🛠️ Teknologi yang Digunakan

### Frontend
- **React 19** - Library UI
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Component library
- **Wouter** - Routing
- **Lucide React** - Icons
- **Vite** - Build tool

### Backend & Storage
- **localStorage** - Penyimpanan data nilai siswa (client-side)
- **Google Gemini API** - Chatbot AI

### Development Tools
- **pnpm** - Package manager
- **Node.js 22** - Runtime

## 📁 Struktur Proyek

```
smk-teknologi-nusantara/
├── client/
│   ├── public/              # Static assets
│   │   └── (favicon, robots.txt, dll)
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navigation.tsx       # Menu navigasi
│   │   │   ├── Footer.tsx           # Footer
│   │   │   └── ChatBot.tsx          # Widget chatbot
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx             # Halaman beranda
│   │   │   ├── Profile.tsx          # Profil sekolah
│   │   │   ├── Programs.tsx         # Program keahlian
│   │   │   ├── Teachers.tsx         # Guru & staf
│   │   │   ├── News.tsx             # Berita & agenda
│   │   │   ├── Gallery.tsx          # Galeri
│   │   │   ├── StudentGrades.tsx    # Nilai siswa
│   │   │   └── NotFound.tsx         # 404 page
│   │   ├── contexts/        # React contexts
│   │   ├── lib/             # Utility functions
│   │   ├── App.tsx          # Main app component & routing
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   └── tsconfig.json
├── shared/                  # Shared types
├── server/                  # Placeholder untuk server
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Instalasi dan Setup

### Prasyarat
- Node.js 22+
- pnpm (atau npm/yarn)

### Langkah Instalasi

1. **Clone atau download proyek**
   ```bash
   cd smk-teknologi-nusantara
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Jalankan development server**
   ```bash
   pnpm dev
   ```

4. **Buka browser**
   - Akses `http://localhost:3000`
   - Dev server akan otomatis reload saat ada perubahan file

### Build untuk Production
```bash
pnpm build
```

Output akan tersimpan di folder `dist/` yang siap untuk di-deploy.

## 📖 Cara Menggunakan

### Navigasi Website
1. **Menu Utama** - Klik menu di header untuk navigasi antar halaman
2. **Mobile Menu** - Klik hamburger icon untuk menu mobile
3. **Quick Links** - Gunakan tombol quick links di halaman beranda
4. **Footer** - Menu cepat dan informasi kontak di footer

### Mengelola Nilai Siswa
1. Buka halaman "Nilai Siswa" dari menu
2. **Tambah Nilai Baru**:
   - Klik tombol "Tambah Nilai Baru"
   - Isi form (NIS, Nama, Mata Pelajaran, Nilai)
   - Klik "Tambah Nilai"
3. **Edit Nilai**:
   - Klik ikon edit (pensil) di baris yang ingin diubah
   - Ubah data sesuai kebutuhan
   - Klik "Update Nilai"
4. **Hapus Nilai**:
   - Klik ikon hapus (trash) di baris yang ingin dihapus
   - Konfirmasi penghapusan
5. **Cari Nilai**:
   - Gunakan kolom pencarian untuk filter berdasarkan NIS, nama, atau mata pelajaran

### Menggunakan Chatbot
1. Klik tombol chat di pojok kanan bawah
2. Ketik pertanyaan Anda
3. Chatbot akan menjawab dengan informasi tentang sekolah
4. Klik X untuk menutup chat window

## 🔧 Fitur Detail

### Halaman Beranda
**File**: `client/src/pages/Home.tsx`

Konten yang dapat diubah:
- **Slide Banner**: Edit array `slides` dengan judul dan subtitle
- **Sambutan Kepala Sekolah**: Ubah nama, foto, dan teks sambutan
- **Berita Preview**: Edit array berita di bagian "Berita Terbaru"
- **Statistik**: Ubah angka di section statistik

### Profil Sekolah
**File**: `client/src/pages/Profile.tsx`

Konten yang dapat diubah:
- **Visi & Misi**: Edit teks di section visi dan misi
- **Sejarah**: Ubah paragraf sejarah sekolah
- **Struktur Organisasi**: Edit array struktur organisasi
- **Google Maps**: Ganti embed URL dengan koordinat sekolah Anda
- **Kontak**: Update alamat, telepon, email, jam operasional

### Program Keahlian
**File**: `client/src/pages/Programs.tsx`

Konten yang dapat diubah:
- **Deskripsi Program**: Edit teks deskripsi untuk setiap program
- **Mata Pelajaran**: Update array mata pelajaran
- **Statistik**: Ubah jumlah siswa, guru, dan tingkat kelulusan
- **Prospek Karir**: Tambah atau ubah daftar karir

### Guru & Staf
**File**: `client/src/pages/Teachers.tsx`

Konten yang dapat diubah:
- **Daftar Guru**: Edit array `teachers` dengan data guru baru
- **Foto**: Ganti emoji dengan URL foto (ubah `👨‍🏫` dengan `<img>`)
- **Kontak**: Update email dan nomor telepon

### Berita & Agenda
**File**: `client/src/pages/News.tsx`

Konten yang dapat diubah:
- **Berita**: Edit array `allNews` dengan berita baru
- **Agenda**: Update array agenda di section "Agenda Mendatang"
- **Kategori**: Tambah kategori baru di array berita

### Galeri
**File**: `client/src/pages/Gallery.tsx`

Konten yang dapat diubah:
- **Foto**: Edit array `galleryItems` dengan foto baru
- **Kategori**: Tambah kategori galeri baru
- **Deskripsi**: Update deskripsi untuk setiap foto

### Nilai Siswa
**File**: `client/src/pages/StudentGrades.tsx`

Fitur:
- Data disimpan di localStorage browser
- Dummy data otomatis dimuat saat pertama kali
- CRUD lengkap (Create, Read, Update, Delete)
- Pencarian real-time
- Validasi form

## 🤖 Integrasi Gemini API

### Cara Mengaktifkan Chatbot dengan API Real

1. **Dapatkan API Key**:
   - Kunjungi [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Buat API key baru
   - Copy API key

2. **Konfigurasi Environment Variable**:
   - Buat file `.env.local` di root proyek
   - Tambahkan:
     ```
     VITE_GEMINI_API_KEY=your_api_key_here
     ```

3. **Update ChatBot Component**:
   - Buka `client/src/components/ChatBot.tsx`
   - Ganti placeholder API key dengan:
     ```typescript
     const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
     ```

4. **Restart Dev Server**:
   ```bash
   pnpm dev
   ```

### Fallback Responses
Jika API tidak tersedia, chatbot akan menggunakan fallback responses yang sudah dikonfigurasi. Anda dapat menambahkan lebih banyak responses di object `fallbackResponses`.

## 📝 Panduan Pengeditan Konten

### Mengubah Warna Tema
Warna utama dapat diubah di `client/src/index.css`:
- Warna Biru Utama: `#004AAD` → ubah ke warna pilihan Anda
- Warna Putih: `#FFFFFF`
- Warna Abu-abu: `#F5F5F5`

### Mengubah Font
Font default adalah "Poppins" atau "Open Sans". Untuk mengubah:
1. Buka `client/src/index.css`
2. Ubah `font-family` di `:root`

### Menambah Halaman Baru
1. Buat file baru di `client/src/pages/NamaHalaman.tsx`
2. Buat component React
3. Import di `client/src/App.tsx`
4. Tambahkan route:
   ```tsx
   <Route path={"/halaman-baru"} component={NamaHalaman} />
   ```
5. Tambahkan menu di `client/src/components/Navigation.tsx`

### Menambah Menu Navigasi
1. Buka `client/src/components/Navigation.tsx`
2. Tambahkan item ke array `navItems`:
   ```tsx
   { label: "Menu Baru", href: "/menu-baru" }
   ```

## 🐛 Troubleshooting

### Chatbot tidak merespons
- **Solusi 1**: Refresh halaman
- **Solusi 2**: Periksa koneksi internet
- **Solusi 3**: Jika menggunakan API real, verifikasi API key di `.env.local`
- **Solusi 4**: Chatbot akan menggunakan fallback responses jika API tidak tersedia

### Data nilai siswa hilang
- Data disimpan di localStorage browser
- Jika cache browser dihapus, data akan hilang
- Untuk production, gunakan database backend (Firebase, MongoDB, dll)

### Styling tidak muncul
- Pastikan Tailwind CSS sudah di-compile
- Restart dev server: `pnpm dev`
- Clear browser cache (Ctrl+Shift+Delete)

### Halaman tidak loading
- Periksa console browser (F12)
- Pastikan semua import path benar
- Verifikasi file component sudah ada

## 📱 Responsive Design

Website ini fully responsive dan dioptimalkan untuk:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (< 768px)

Semua halaman menggunakan Tailwind CSS grid dan flexbox untuk layout responsif.

## 🔒 Keamanan

### Catatan Penting
- **API Key**: Jangan commit `.env.local` ke git
- **Data Nilai**: Gunakan database backend untuk production
- **Autentikasi**: Tambahkan sistem login untuk akses nilai siswa
- **HTTPS**: Gunakan HTTPS untuk production

## 📦 Deployment

### Deploy ke Vercel (Recommended)
```bash
pnpm install -g vercel
vercel
```

### Deploy ke Netlify
1. Push code ke GitHub
2. Connect repository ke Netlify
3. Set build command: `pnpm build`
4. Set publish directory: `dist`

### Deploy ke Server Statis
```bash
pnpm build
# Upload folder 'dist' ke hosting
```

## 📞 Dukungan & Kontak

Untuk pertanyaan atau bantuan:
- Email: info@smkteknologinusantara.sch.id
- Telepon: (021) 2345678
- Alamat: Jl. Teknologi No. 123, Jakarta Timur

## 📄 Lisensi

Proyek ini adalah milik SMK Teknologi Nusantara. Semua hak dilindungi.

## 🎓 Catatan Pengembang

### Best Practices yang Diterapkan
- ✅ Clean code dengan struktur folder yang jelas
- ✅ Semantic HTML tags
- ✅ Responsive design
- ✅ Accessibility considerations
- ✅ Performance optimization
- ✅ Error handling
- ✅ Component reusability

### Teknologi Modern
- ✅ React 19 dengan TypeScript
- ✅ Tailwind CSS untuk styling
- ✅ shadcn/ui untuk components
- ✅ Vite untuk fast development
- ✅ localStorage untuk data persistence

### Fitur Bonus
- ✅ Slider banner otomatis
- ✅ Modal gallery
- ✅ Pagination berita
- ✅ Search/filter functionality
- ✅ CRUD operations
- ✅ AI Chatbot integration

---

**Dibuat dengan ❤️ untuk SMK Teknologi Nusantara**

Terakhir diupdate: Oktober 2024

