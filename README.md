# 🚀 Cosmic Odyssey - Space-Themed Parallax Portfolio

Portofolio web modern dengan tema luar angkasa (Space & Deep Cosmos), dilengkapi animasi multi-layer parallax yang halus, galeri proyek interaktif dengan pencarian & filter realtime, synthesiser audio kosmik (Web Audio API), dan arsitektur kode modular yang bersih.

---

## 🌌 Fitur Utama

1. **Tema & Atmosfer Luar Angkasa (Deep Cosmos & Glassmorphism)**:
   - Palet warna kosmik: Midnight Void, Neon Cyan, Electric Purple, dan Starlight Gold.
   - Efek kartu transparan glassmorphism dengan pantulan cahaya neon saat kursor diarahkan.
   - Kursor kustom futuristik dengan glowing halo ring yang responsif terhadap interaksi.

2. **Animasi Parallax Multi-Layer**:
   - **Canvas 2D Interaktif**: Ratusan bintang dengan kedalaman layer berbeda yang bergeser mengikuti pergerakan kursor mouse.
   - **Hujan Meteor Dinamis**: Efek meteor meluncur diagonal dengan ekor berpendar secara berkala atau dipicu via tombol *"Hujan Meteor ✦"*.
   - **Floating Celestial Objects**: Saturnus, Exoplanet Cyan, Mars, Satelit Orbit, dan Astronot melayang dengan efek float 3D berkecepatan dinamis.
   - **3D Tilt Card**: Efek perspektif 3D pada kartu proyek dan ID Card astronot ketika kursor digerakkan di atasnya.

3. **Galeri Proyek Interaktif (Exploration Manifest)**:
   - **Real-time Search Filter**: Pencarian instan berdasarkan judul proyek atau teknologi (misal: `React`, `WebGL`, `AI`, `Flutter`).
   - **Kategori Filter**: Tab filter `Semua Misi`, `Web Application`, `Mobile App`, `AI & Data`, dan `UI/UX & WebGL`.
   - **Modal Pop-up Detail Misi**: Klik kartu proyek untuk membuka jendela modal yang memuat arsitektur sistem, fitur lengkap, teknologi, metrik performa, tautan *Live Demo*, dan *Source Code*.

4. **Cosmic Audio Ambient Synthesizer (Web Audio API)**:
   - Suara dengung ambient kosmik (*space drone*) yang disintesis langsung menggunakan Web Audio API tanpa perlu aset MP3 eksternal (0 latency, 0 bandwidth).
   - Efek suara sci-fi blip saat mengarahkan atau mengeklik tombol.
   - Dilengkapi tombol toggle `Audio: ON / OFF` dengan equalizer gelombang suara animasi di bilah navigasi.

5. **Struktur Kode Bersih & Modular**:
   - Pemisahan CSS berdasarkan fungsionalitas (`variables`, `base`, `components`, `parallax`, `responsive`).
   - Pemisahan JavaScript berorientasi modul (`starfield`, `parallax`, `projects`, `audio`, `main`).
   - Tanpa dependensi rumit (framework agnostic, pure high-performance Vanilla Web Standards).

---

## 📁 Struktur Direktori

```text
d:\My Portofolio\
├── index.html                  # Struktur markup utama semantik HTML5
├── README.md                   # Dokumentasi lengkap & panduan kustomisasi
├── css/
│   ├── variables.css           # Variabel warna kosmik, font, ukuran, & transisi
│   ├── base.css                # Reset CSS, tipografi, kursor kustom, & container
│   ├── components.css          # Desain navbar, tombol neon, kartu kaca, modal, form
│   ├── parallax.css            # Posisi layer parallax & animasi planet melayang
│   └── responsive.css          # Media queries untuk tablet dan smartphone
├── js/
│   ├── starfield.js            # Engine canvas bintang & hujan meteor berpendar
│   ├── parallax.js             # Engine translasi parallax kursor, scroll, & 3D tilt
│   ├── projects.js             # Database proyek, filter pencarian, & modal viewer
│   ├── audio.js                # Web Audio API ambient drone & UI sound synthesizer
│   └── main.js                 # Navigasi scroll spy, counter angka, form simulasi
└── assets/
    └── images/                 # Folder untuk screenshot & foto kustom Anda
```

---

## 🛠️ Cara Menjalankan & Membuka

Portofolio ini dibuat menggunakan standar web modern tanpa memerlukan proses kompilasi (*zero build step*).

### Opsi 1: Buka Langsung di Browser
Klik dua kali file `index.html` pada File Explorer Anda, atau klik kanan lalu pilih **Open with Google Chrome / Microsoft Edge / Firefox**.

### Opsi 2: Menggunakan Live Server (VS Code / CLI)
Jika menggunakan ekstensi **Live Server** di VS Code:
1. Buka folder `d:\My Portofolio` di VS Code.
2. Klik kanan pada `index.html` -> pilih **Open with Live Server**.

Atau melalui terminal (menggunakan `npx serve`):
```bash
npx serve .
```

---

## ✏️ Panduan Personalisasi & Kustomisasi

### 1. Mengubah Nama & Deskripsi Diri
Buka file `index.html`:
- Ganti teks pada judul hero: `<h1>Merakit Realitas Di Ruang Angkasa Digital</h1>`.
- Ganti teks bio pada `<p class="hero-desc">`.
- Pada section `#about`, sesuaikan nama astronot (`Alexandre Vance`), codename, lokasi, dan deskripsi perjalanan Anda.

### 2. Menambah atau Mengubah Proyek Portofolio
Buka file `js/projects.js`:
Temukan array `portfolioProjects`. Anda dapat dengan mudah mengubah atau menambahkan objek proyek baru:
```javascript
{
  id: 'proyek-anda',
  title: 'Nama Aplikasi Anda',
  category: 'web', // 'web', 'mobile', 'ai', atau 'ui'
  categoryName: 'Web Application',
  tagline: 'Ringkasan singkat satu kalimat tentang aplikasi Anda.',
  description: 'Deskripsi mendalam mengenai tantangan teknis dan solusi yang Anda ciptakan.',
  features: [
    'Fitur utama 1',
    'Fitur utama 2',
    'Fitur utama 3'
  ],
  tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
  metrics: '99.9% Uptime | 10k Active Users',
  demoUrl: 'https://demo-anda.com',
  githubUrl: 'https://github.com/username/repo'
}
```

### 3. Mengubah Tautan Media Sosial & Kontak
Buka file `index.html` pada bagian `#contact` dan `<footer>`:
- Ganti `alexandre.vance@example.com` dengan alamat email asli Anda.
- Ganti link GitHub, LinkedIn, dan Twitter/X pada tag `<a>` di bagian footer.

---

## 🌐 Cara Deploy ke Internet Gratis

Anda dapat mempublikasikan portofolio ini dalam hitungan menit secara gratis:

- **GitHub Pages**:
  1. Inisialisasi git di folder ini: `git init`, `git add .`, `git commit -m "Initial commit"`.
  2. Buat repositori baru di GitHub (misal: `portofolio`), lalu push kode Anda.
  3. Buka tab **Settings** -> **Pages** -> pilih branch `main` dan folder `root (/)` -> Klik **Save**.
- **Vercel / Netlify**:
  - Drag and drop folder `d:\My Portofolio` ke dashboard Netlify atau import repositori GitHub ke Vercel. Situs Anda akan langsung online dengan sertifikat SSL gratis!

