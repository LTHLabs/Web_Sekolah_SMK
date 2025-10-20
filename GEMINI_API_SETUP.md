# Panduan Setup Gemini API untuk Chatbot

Dokumentasi lengkap untuk mengintegrasikan Google Gemini API dengan chatbot SMK Teknologi Nusantara.

## 🤖 Tentang Gemini API

Google Gemini API adalah API generative AI yang powerful untuk membuat chatbot cerdas. Dalam proyek ini, chatbot menggunakan Gemini untuk menjawab pertanyaan siswa tentang sekolah.

## 📋 Prasyarat

- Akun Google (Gmail)
- Akses ke [Google AI Studio](https://aistudio.google.com)
- Browser modern

## 🔑 Langkah 1: Dapatkan API Key

### Cara Mendapatkan API Key Gratis

1. **Buka Google AI Studio**
   - Kunjungi https://aistudio.google.com/app/apikey
   - Login dengan akun Google Anda

2. **Buat API Key Baru**
   - Klik tombol "Create API Key"
   - Pilih "Create API key in new project"
   - API key akan dibuat otomatis

3. **Copy API Key**
   - Klik tombol "Copy" untuk menyalin API key
   - Simpan di tempat yang aman

### Contoh API Key
```
AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## ⚙️ Langkah 2: Konfigurasi Environment Variable

### Untuk Development

1. **Buat file `.env.local`** di root proyek
   ```bash
   cd smk-teknologi-nusantara
   touch .env.local
   ```

2. **Tambahkan API Key ke `.env.local`**
   ```
   VITE_GEMINI_API_KEY=AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

3. **Pastikan `.env.local` ada di `.gitignore`**
   - File sudah ada di template
   - Jangan commit `.env.local` ke git!

### Untuk Production

1. **Tambahkan environment variable di hosting**
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment
   - **Railway**: Variables
   - **Heroku**: Config Vars

2. **Contoh di Vercel**:
   ```
   Key: VITE_GEMINI_API_KEY
   Value: AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

## 🔧 Langkah 3: Update ChatBot Component

### Opsi 1: Menggunakan Environment Variable (Recommended)

Edit file `client/src/components/ChatBot.tsx`:

```typescript
// Tambahkan di awal file
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Di dalam fungsi handleSendMessage, ubah URL fetch:
const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `[Sistem prompt di sini] ${inputValue}`,
            },
          ],
        },
      ],
    }),
  }
);
```

### Opsi 2: Menggunakan Hardcoded Key (Hanya untuk Testing)

⚠️ **JANGAN GUNAKAN UNTUK PRODUCTION!**

```typescript
const GEMINI_API_KEY = "AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
```

## 🚀 Langkah 4: Restart Dev Server

```bash
# Stop dev server (Ctrl+C)
# Restart
pnpm dev
```

## ✅ Langkah 5: Testing Chatbot

1. **Buka website** di browser
   ```
   http://localhost:3000
   ```

2. **Klik tombol chat** di pojok kanan bawah

3. **Ketik pertanyaan** misalnya:
   - "Apa visi misi sekolah?"
   - "Berapa nomor telepon sekolah?"
   - "Program apa saja yang ada?"

4. **Verifikasi response**
   - Chatbot harus menjawab dengan informasi tentang sekolah
   - Jika API key salah, akan muncul error

## 🔍 Troubleshooting

### Error: "API Error" atau "Failed to fetch"

**Penyebab Umum**:
1. API key tidak valid
2. API key tidak ada di environment variable
3. Koneksi internet terputus
4. API key sudah di-disable

**Solusi**:
- Verifikasi API key di Google AI Studio
- Pastikan `.env.local` sudah dibuat dengan benar
- Restart dev server
- Clear browser cache

### Error: "CORS Error"

**Penyebab**: API key tidak dikonfigurasi dengan benar

**Solusi**:
```typescript
// Pastikan menggunakan URL yang benar
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
```

### Chatbot Tidak Merespons

**Solusi**:
1. Buka browser console (F12)
2. Lihat error message
3. Verifikasi API key
4. Cek koneksi internet

## 📊 API Quotas & Limits

### Free Tier
- **Requests per minute**: 60
- **Requests per day**: 1,500
- **Biaya**: Gratis

### Paid Tier
- **Requests per minute**: Unlimited
- **Requests per day**: Unlimited
- **Biaya**: $0.075 per 1,000 input tokens + $0.30 per 1,000 output tokens

Untuk informasi terbaru, lihat [Google AI Pricing](https://ai.google.dev/pricing).

## 🎯 Customization Chatbot

### Mengubah Sistem Prompt

Edit bagian "System Prompt" di `ChatBot.tsx`:

```typescript
text: `Anda adalah chatbot bantuan untuk SMK Teknologi Nusantara...
[Informasi sekolah]
[Instruksi chatbot]
Pertanyaan pengguna: ${inputValue}`,
```

### Menambah Informasi Sekolah

Tambahkan informasi baru di sistem prompt:

```typescript
text: `...
Informasi tambahan:
- Fasilitas: Lab Komputer, Lab Robotika, Perpustakaan, Kantin
- Ekstrakurikuler: Robotika, Programming Club, English Club
- Beasiswa: Tersedia untuk siswa berprestasi
...`,
```

### Mengubah Tone & Style

```typescript
text: `Anda adalah chatbot yang ramah, profesional, dan membantu.
Jawab dalam bahasa Indonesia yang baik dan benar.
Gunakan emoji untuk membuat percakapan lebih menarik.
Jika tidak tahu jawaban, arahkan ke kontak sekolah.
...`,
```

## 🔐 Best Practices Keamanan

### ✅ DO's
- ✅ Gunakan environment variables untuk API key
- ✅ Jangan commit `.env.local` ke git
- ✅ Rotate API key secara berkala
- ✅ Monitor penggunaan API di Google Cloud Console
- ✅ Gunakan API key dengan restrictions (IP, referrer)

### ❌ DON'Ts
- ❌ Jangan hardcode API key di code
- ❌ Jangan share API key di public repository
- ❌ Jangan gunakan API key di frontend tanpa restrictions
- ❌ Jangan biarkan API key terlihat di browser console

## 🛡️ Mengatur API Key Restrictions

1. **Buka Google Cloud Console**
   - https://console.cloud.google.com

2. **Pilih Project**
   - Cari project yang berisi API key

3. **Klik API Key**
   - Pilih API key yang ingin di-restrict

4. **Atur Restrictions**
   - **Application restrictions**: HTTP referrers
   - **API restrictions**: Generative Language API

5. **Tambahkan Referrer**
   - Untuk development: `http://localhost:3000`
   - Untuk production: `https://yourdomain.com`

## 📈 Monitoring Penggunaan API

1. **Buka Google Cloud Console**
   - https://console.cloud.google.com

2. **Lihat Quotas & Metrics**
   - Monitoring → Metrics
   - Lihat penggunaan API key

3. **Set Alerts**
   - Atur alert jika penggunaan melebihi batas

## 🔄 Fallback Responses

Jika API tidak tersedia, chatbot menggunakan fallback responses:

```typescript
const fallbackResponses: { [key: string]: string } = {
  jadwal: "Jadwal sekolah kami adalah...",
  program: "SMK Teknologi Nusantara memiliki...",
  guru: "Kami memiliki lebih dari 40 guru...",
  // Tambahkan lebih banyak responses
};
```

Anda dapat menambahkan lebih banyak fallback responses untuk pertanyaan umum.

## 🚀 Deployment ke Production

### Step 1: Verifikasi di Development
```bash
pnpm dev
# Test chatbot dengan API key
```

### Step 2: Build untuk Production
```bash
pnpm build
```

### Step 3: Set Environment Variable di Hosting
- Vercel: Settings → Environment Variables
- Netlify: Site Settings → Environment
- Railway: Variables
- Heroku: Config Vars

### Step 4: Deploy
```bash
# Vercel
vercel

# Netlify
netlify deploy

# Atau push ke git untuk auto-deploy
git push origin main
```

### Step 5: Test di Production
- Buka website di production URL
- Test chatbot dengan pertanyaan
- Verifikasi response

## 📚 Resources Tambahan

- [Google Gemini API Documentation](https://ai.google.dev/docs)
- [Google AI Studio](https://aistudio.google.com)
- [API Reference](https://ai.google.dev/api/rest)
- [Pricing](https://ai.google.dev/pricing)

## ❓ FAQ

**Q: Apakah API key gratis?**
A: Ya, Google Gemini API menawarkan free tier dengan 1,500 requests per hari.

**Q: Berapa lama API key berlaku?**
A: API key tidak pernah expired, tapi bisa di-disable atau di-rotate.

**Q: Bisakah saya menggunakan API key yang sama di multiple websites?**
A: Ya, tapi disarankan untuk membuat API key terpisah per project.

**Q: Apa yang terjadi jika API key di-disable?**
A: Chatbot akan menggunakan fallback responses.

**Q: Bagaimana cara reset API key?**
A: Buka Google AI Studio, klik "Delete" pada API key lama, buat yang baru.

---

**Panduan Gemini API Setup - SMK Teknologi Nusantara**

Terakhir diupdate: Oktober 2024

