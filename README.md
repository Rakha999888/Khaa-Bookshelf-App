<div align="center">
  <h1>📚 Khaa Bookshelf App</h1>
  <p>Aplikasi manajemen buku modern yang elegan untuk mengelola koleksi bacaan pribadi Anda</p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![GitHub stars](https://img.shields.io/github/stars/Rakha999888/Khaa-Bookshelf-App?style=social)](https://github.com/Rakha999888/Khaa-Bookshelf-App/stargazers)
  [![GitHub forks](https://img.shields.io/github/forks/Rakha999888/Khaa-Bookshelf-App?style=social)](https://github.com/Rakha999888/Khaa-Bookshelf-App/network/members)
  
  [🌐 Live Demo](https://bookshelfappkha.netlify.app/) | [📖 Dokumentasi](#-dokumentasi) | [🚀 Fitur](#-fitur) | [🛠️ Teknologi](#%EF%B8%8F-teknologi)
</div>

## 📝 Deskripsi

Khaa Bookshelf App adalah aplikasi web modern untuk mengelola koleksi buku pribadi Anda. Dibangun dengan teknologi web standar (HTML5, CSS3, dan JavaScript) dengan dukungan penyimpanan lokal menggunakan Web Storage API. Aplikasi ini memiliki antarmuka yang menarik dengan tema gelap yang nyaman digunakan dalam berbagai kondisi pencahayaan.

![Bookshelf App Preview](https://via.placeholder.com/800x450/0f172a/4cc9f0?text=Khaa+Bookshelf+App)
*Tampilan Aplikasi Khaa Bookshelf*

## 🌟 Fitur Utama

### 📚 Manajemen Buku
- ✅ Tambah buku baru dengan detail lengkap (judul, penulis, tahun)
- 🔄 Kategorikan buku: Belum selesai / Selesai dibaca
- ✏️ Edit detail buku yang sudah ada dengan mudah
- 🗑️ Hapus buku dari koleksi dengan konfirmasi
- 📋 Salin detail buku ke clipboard

### 🔍 Pencarian Lanjutan
- 🔎 Cari buku berdasarkan judul, penulis, atau tahun
- ⚡ Pencarian real-time yang cepat
- 🎯 Hasil pencarian yang akurat dengan highlight teks

### 🎨 Antarmuka Pengguna
- 🌓 Tema gelap yang nyaman di mata
- 📱 Desain responsif untuk semua perangkat
- 🎭 Transisi dan animasi yang halus
- 🎨 UI/UX yang intuitif dan mudah digunakan

### 💾 Penyimpanan & Kinerja
- 💾 Penyimpanan lokal menggunakan Web Storage API
- ⚡ Performa ringan dan cepat
- 🔄 Sinkronisasi otomatis dengan penyimpanan lokal

## 🚀 Panduan Penggunaan

### 🖥️ Tampilan Awal
Saat pertama kali membuka aplikasi, Anda akan melihat:
- Header dengan judul aplikasi dan tombol navigasi
- Formulir penambahan buku baru
- Dua bagian rak buku: "Belum selesai dibaca" dan "Selesai dibaca"
- Footer dengan informasi hak cipta

### 📖 Menambahkan Buku Baru
1. Isi formulir di bagian "Tambah Buku Baru"
   - **Judul**: Masukkan judul buku (wajib diisi)
   - **Penulis**: Nama penulis buku (wajib diisi)
   - **Tahun**: Tahun terbit buku (wajib diisi, format angka)
   - **Selesai dibaca**: Centang jika buku sudah selesai dibaca
2. Klik tombol "Masukkan Buku ke rak"
3. Buku akan muncul di rak yang sesuai (selesai/belum selesai)

### 📚 Mengelola Koleksi Buku
- **Mengubah Status Baca**:
  - Klik tombol "Selesai dibaca" untuk memindahkan buku ke rak selesai
  - Klik tombol "Belum selesai" untuk mengembalikan ke rak belum selesai

- **Mengedit Buku**:
  1. Klik tombol "Edit Buku" pada buku yang ingin diedit
  2. Ubah detail buku sesuai kebutuhan
  3. Klik "Simpan Perubahan" untuk menyimpan atau "Batal" untuk membatalkan

- **Menghapus Buku**:
  1. Klik tombol "Hapus Buku"
  2. Konfirmasi penghapusan di dialog yang muncul

### 🔍 Mencari Buku
1. Klik ikon 🔍 di pojok kanan atas
2. Ketik kata kunci pencarian (judul/penulis/tahun)
3. Hasil pencarian akan ditampilkan secara real-time
4. Kosongkan kolom pencarian untuk menampilkan semua buku kembali

## 🛠️ Teknologi yang Digunakan

### 🏗️ Frontend
- **HTML5** - Struktur dasar halaman web
- **CSS3** - Styling dan tata letak
  - CSS Variables untuk theming yang konsisten
  - Flexbox & Grid untuk layout yang responsif
  - Animasi dan transisi CSS3
- **JavaScript (ES6+)** - Logika aplikasi
  - DOM Manipulation
  - Event Handling
  - Web Storage API

### 🎨 Desain & Ikon
- **Font Awesome** - Koleksi ikon yang kaya
- **Google Fonts** - Jenis huruf modern
- **CSS Custom Properties** - Untuk theming yang dinamis

### 🚀 Fitur Modern
- **PWA Ready** - Dapat diinstall di perangkat
- **Responsive Design** - Beradaptasi dengan semua ukuran layar
- **Offline Support** - Tetap berfungsi tanpa koneksi internet
- **Dark Mode** - Tema gelap yang nyaman di mata

## 📂 Struktur Proyek

```
Khaa-Bookshelf-App/
├── index.html          # Halaman utama aplikasi
├── style.css           # Gaya dan tata letak
├── main.js             # Logika utama aplikasi
├── assets/             # Folder untuk aset
│   ├── images/         # Gambar dan ikon
│   └── fonts/          # Font kustom
├── .gitignore          # File yang diabaikan Git
├── LICENSE             # Lisensi proyek
└── README.md           # Dokumentasi ini
```

## 📝 Dokumentasi

### Persyaratan Sistem
- Browser web modern (Chrome, Firefox, Safari, atau Edge versi terbaru)
- Koneksi internet (hanya untuk Font Awesome dan Google Fonts)
- JavaScript diaktifkan

### Instalasi Lokal
1. Clone repositori ini:
   ```bash
   git clone https://github.com/Rakha999888/Khaa-Bookshelf-App.git
   ```
2. Buka folder proyek:
   ```bash
   cd Khaa-Bookshelf-App
   ```
3. Buka file `index.html` di browser favorit Anda

### Pengembangan
1. Fork repositori ini
2. Buat branch fitur baru (`git checkout -b fitur-baru`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## 📝 Atribut yang Digunakan

Aplikasi ini menggunakan atribut khusus untuk keperluan pengujian:

- `data-testid` - Digunakan untuk mengidentifikasi elemen dalam pengujian
- `data-bookid` - Menyimpan ID unik setiap buku

## 🌐 Kompatibilitas Browser

| Browser | Versi Minimal | Status | Catatan |
|---------|---------------|--------|---------|
| Chrome | 60+ | ✅ Didukung | - |
| Firefox | 55+ | ✅ Didukung | - |
| Safari | 11+ | ✅ Didukung | - |
| Edge | 17+ | ✅ Didukung | - |
| Opera | 47+ | ✅ Didukung | - |
| Internet Explorer | ❌ | Tidak Didukung | Gunakan browser modern |

## 🐛 Melaporkan Masalah

Jika Anda menemukan bug atau memiliki saran, silakan buat [issue baru](https://github.com/Rakha999888/Khaa-Bookshelf-App/issues) di GitHub.

## 🤝 Berkontribusi

Kontribusi sangat diterima! Berikut cara Anda dapat membantu:
1. Laporkan bug dengan membuat [issue baru](https://github.com/Rakha999888/Khaa-Bookshelf-App/issues)
2. Ajukan fitur baru melalui issue
3. Kirim Pull Request dengan perbaikan atau peningkatan
4. Sebarkan berita tentang proyek ini

### Kode Etik
Harap baca [Kode Etik Kontributor](CODE_OF_CONDUCT.md) sebelum berkontribusi.

## 📜 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE) - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

## 🙏 Ucapan Terima Kasih

- [Dicoding Indonesia](https://www.dicoding.com/) untuk materi pembelajarannya
- Komunitas pengembang sumber terbuka
- Semua kontributor yang telah membantu pengembangan

---

<div align="center">
  Dibuat dengan ❤️ oleh <a href="https://github.com/Rakha999888">Rakha</a> untuk tugas akhir kelas "Belajar Membuat Front-End Web untuk Pemula"
  
  [![GitHub followers](https://img.shields.io/github/followers/Rakha999888?style=social)](https://github.com/Rakha999888)
  [![Twitter Follow](https://img.shields.io/twitter/follow/rakha999888?style=social)](https://twitter.com/rakha999888)
</div>
