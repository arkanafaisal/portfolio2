# Developer Portfolio Wireframe & UI Guidelines
**Target Audience:** HRD (Full-time) & Clients (Freelance / Projects)
**Device Target:** Mobile-First Layout

---

## 1. Main Page (Beranda)
Halaman ini berfungsi sebagai etalase utama. Tujuan utamanya adalah memberikan kesan pertama yang kuat, menampilkan karya terbaik secara instan (Aturan 3 Detik), dan menyediakan pemindaian cepat untuk keahlian teknis (bagi HRD) serta layanan (bagi Klien).

### 1.1. ASCII Wireframe - Main Page (Default)

```text
+---------------------------+
| [Logo]            [☾] [≡] |  <-- Sticky Navbar (Theme Toggle & Menu)
+---------------------------+
|                           |
|  [•] AVAILABLE FOR WORK   |  <-- STATUS BADGE (Titik Hijau Emerald berkedip / animate-pulse)
|                           |
|  Full-Stack Developer     |  <-- HERO SECTION
|  Membangun sistem web     |      Teks tebal, to-the-point, fokus pada nilai/hasil.
|  skalabel dan responsif.  |      Warna subtitle diterangkan (`text-zinc-300 text-lg`).
|                           |
| [ Hire Me ] [ Get CV ]    |  <-- DOUBLE CTA (Left-Aligned Flexbox, BUKAN Grid 50:50)
|                           |      Primary (Solid Amber), Secondary (Tinted Surface Amber).
+---------------------------+
|                           |
|  == FEATURED PROJECTS ==  |  <-- SELECTED WORKS
|                           |      Langsung tampilkan hasil kerja (Show, Don't Tell).
|  +---------------------+  |
|  |    +---+   +---+    |  |  <-- CARD PROYEK 1 (Wajib Landscape 16:9/4:3)
|  |    | M |   | M |    |  |      Walaupun "mobile only", gunakan device mockup
|  |    | O |   | O |    |  |      di atas background warna solid/gradien agar
|  |    | C |   | C |    |  |      dimensi kartu tetap seragam dengan proyek web.
|  |    +---+   +---+    |  |      TIDAK ADA EFEK BLUR DI HALAMAN INI.
|  +---------------------+  |
|  Aplikasi Kasir Mobile    |  <-- Judul Proyek
|  Impact: 0% Data Loss     |  <-- Metrik bisnis/teknis utama
|  (React Native) (Node)    |  <-- Tech Stack Pill/Badge
|                           |
|  +---------------------+  |
|  |      [ Web UI ]     |  |  <-- CARD PROYEK 2 (Ukuran sama persis)
|  +---------------------+  |
|  Sistem Gudang B2B        |
|  Impact: Load < 1s        |
|  (Vue) (PostgreSQL)       |
|                           |
+---------------------------+
|                           |
| == SERVICES & SKILLS ==   |  <-- GABUNGAN HRD & KLIEN
|                           |
| > Tech Stack:             |
| (JS) (TS) (React) (Node)  |  <-- Format Badge/Pill agar ATS/HRD mudah screening.
|                           |
| > What I Can Do:          |
| [*] API Development       |  <-- Format List untuk poin jual layanan ke Klien.
| [*] Database Architecture |
|                           |
+---------------------------+
|                           |
| == ABOUT & EXPERIENCE ==  |
|                           |
| [Foto] Saya spesialis...  |  <-- Bio singkat (Culture fit).
|                           |
| > Work History            |
| [+] 2022-Now @ PT Tech    |  <-- UI ACCORDION
| [+] 2020-2022 @ Startup   |      Di-tap untuk buka/tutup detail pekerjaan agar
|                           |      tidak memenuhi layar mobile.
+---------------------------+
|                           |
|       == LET'S TALK ==    |  <-- FOOTER & SOCIAL PROOF
|                           |
| "Kode rapi & anti bug!"   |  <-- 1 Testimoni terbaik (Klien/CTO/Manager).
| - CTO PT Tech             |
|                           |
|   [ email@domain.com ]    |  <-- Direct action (Hindari form panjang).
|                           |
|   [IN]  [GH]  [Web]       |  <-- Social icons (LinkedIn, GitHub, dll).
+---------------------------+
```

### 1.2. ASCII Wireframe - Main Page (Menu Expanded)
Saat pengguna melakukan *tap* pada ikon `[≡]`, menu akan terbuka sebagai dropdown dari atas dengan tinggi maksimal 50-70% layar (bukan *fullscreen*). Elemen halaman di bawah menu akan tertutup oleh *backdrop* transparan yang sedikit meredup (*dimmed overlay*), dan pengguna dapat menutup menu dengan mengetuk area di luar menu (*click-outside to close*).

```text
+---------------------------+
| [Logo]            [☀] [X] |  <-- Navbar berubah: Menampilkan [X] untuk Close,
+---------------------------+      Toggle berubah ke [☀] jika di-tap (Light/Dark).
|         [ Home ]          |  <-- Dropdown Navigation (Maksimal 70% Tinggi Layar)
|         [ Work ]          |
|      [ Experience ]       |
|         [ About ]         |
|        [ Contact ]        |
|  -----------------------  |  <-- Divider tipis (#E4E4E7 / #27272A)
|   Theme: [ Dark ]/Light   |  <-- Opsi kontrol tema ekstra di dalam menu
+ - - - - - - - - - - - - - +  <-- Batas Bawah Menu (Maksimal 70% Layar)
|                           |
|  (Latar Belakang Halaman  |  <-- Area halaman utama di bawah menu yang meredup
|   Meredup / Dimmed)       |      (Ketuk di sini untuk menutup menu).
|                           |
+---------------------------+
```

### 1.3. Penjelasan UI Main Page
*   **Hero Image/Text:** Tidak ada dekorasi berlebihan. Fokus pada proposisi nilai.
*   **Hero Layout & Styling:** Tata letak tombol wajib merujuk pada konsep *Left-Aligned Flexbox* (`flex flex-wrap justify-start gap-4`) agar serasi dengan teks rata kiri. Jangan menggunakan warna utama (*primary*) pada *subtitle*, melainkan gunakan *zinc* dengan tingkat kecerahan tinggi.
*   **Get CV Button:** Tombol ini dikonfigurasi untuk membuka file CV berformat PDF di **tab browser baru** (`target="_blank"`). Ini adalah standar industri yang mempermudah perekrut (HRD) membaca CV secara instan menggunakan penampil PDF bawaan browser seluler tanpa harus mengunduh file secara terpaksa ke penyimpanan lokal perangkat mereka.
*   **Konsistensi Dimensi:** Semua gambar sampul (*thumbnail*) proyek memiliki rasio yang seragam. Ini memberikan kesan arsitektur UI yang matang dan berkelas.
*   **Navigasi:** Penggunaan `position: sticky` pada *navbar* menjamin akses cepat ke menu kapan saja tanpa harus melakukan *scroll* balik ke paling atas. Navigasi seluler menggunakan *partial-height dropdown overlay* yang menyisakan pandangan pada konten di belakangnya untuk orientasi spasial yang lebih baik.

---

## 2. Dedicated Page (Halaman Detail Proyek)
Halaman ini dirancang khusus untuk membedah logika teknis, mendemonstrasikan penyelesaian masalah (*problem-solving*), dan menampilkan aset visual (UI) tanpa menyebabkan *layout shift* atau kelelahan visual akibat *scrolling* berlebihan.

### 2.1. ASCII Wireframe - Dedicated Page

```text
+---------------------------+
| [< Back]          [☾] [≡] |  <-- Sticky Navbar dengan tombol Back, Toggle & Menu
+---------------------------+
|                           |
|  +---------------------+  |  <-- HERO IMAGE PROYEK (Landscape 16:9/4:3)
|  |    +---------+      |  |      Gambar utama representasi proyek (Mockup).
|  |    | MOCKUP  |      |  |      Tetap seragam dengan versi Main Page.
|  |    | HP UTAMA|      |  |
|  |    +---------+      |  |
|  +---------------------+  |
|                           |
|  APLIKASI KASIR MOBILE    |  <-- Nama Proyek
|  [ View Live ] [ GitHub ] |  <-- CTA Utama teknikal di atas (Mudah dicari CTO)
+---------------------------+
|                           |
| == PROBLEM & ARCH ==      |  <-- KONTEKS BISNIS & TEKNIS
| Kasir sering hilang       |
| sinyal, data transaksi    |
| gagal tersimpan.          |
|                           |
| [ Gambar Diagram Alur ]   |  <-- Visual pendukung arsitektur (Bukan screenshot UI)
+---------------------------+
|                           |
| == APP GALLERY ==         |  <-- IMAGE CAROUSEL SECTION
|                           |
|  +---------------------+  |  <-- CONTAINER FIXED HEIGHT (Tinggi Tetap)
|  | ::::::::::::::::::: |  |  <-- [FITUR UTAMA]: Area efek Backdrop Blur
|  | :   +---------+   : |  |      (Mengisi kekosongan rasio pada gambar portrait).
|  |<:   | PORTRAIT|   :>|  |      Mendukung gestur swipe (geser) kiri/kanan.
|  | :   | IMAGE   |   : |  |
|  | :   +---------+   : |  |  <-- Gambar HP menggunakan CSS: object-fit: contain;
|  | ::::::::::::::::::: |  |
|  +---------------------+  |
|     (.)  (o)  (.)  (.)    |  <-- Indikator pagination
|                           |
| > Halaman Checkout        |  <-- Teks deskripsi dinamis
| Implementasi payment      |      (Berubah menyesuaikan gambar aktif).
| gateway secara real-time. |
+---------------------------+
|                           |
| == CODE HIGHLIGHT ==      |  <-- SNIPPET KODE UNGGULAN
|                           |
|  +---------------------+  |
|  | // Carbon.now.sh    |  |  <-- Tampilan kode estetik menggunakan tools khusus,
|  | const syncData=()=>{|  |      menyoroti logic kunci penyelesaian masalah.
|  |   try { await...    |  |
|  | }                   |  |
|  +---------------------+  |
| > Background Sync Logic   |  <-- Penjelasan singkat impact dari kode tersebut.
| Service worker untuk      |
| antrian API offline.      |
+---------------------------+
|                           |
| == CHALLENGES & RESULT == |  <-- METRIK KEBERHASILAN (Penting untuk Klien)
| > Limitasi RAM HP low-end |
| Optimasi query database.  |
|                           |
| > Impact:                 |
| [*] 10K+ Transaksi harian |
| [*] 0% Data hilang        |
+---------------------------+
|                           |
| == EXPLORE MORE ==        |  <-- DYNAMIC FOOTER NAVIGATION
|                           |      Mempertahankan user retention di dalam website.
| +-----------------------+ |
| | [<- Prev Project]     | |  <-- Muncul jika ada proyek sebelumnya.
| | E-Commerce API        | |
| +-----------------------+ |
|                           |
| +-----------------------+ |
| | [Next Project ->]     | |  <-- Muncul jika ada proyek setelahnya.
| | HRIS Web System       | |
| +-----------------------+ |
+---------------------------+
```

### 2.2. Penjelasan UI & Styling Detail Page
*   **Dynamic Carousel Layout (Swipe Gestures):** Carousel menggunakan `height` absolut/tetap untuk mencegah *Layout Shift* (loncatan UI) saat menggeser gambar. Selain mengklik indikator dot, galeri **wajib mendukung gestur geser (swipe)** kiri/kanan pada perangkat seluler dengan animasi transisi memudar (*cross-fade*) yang mulus.
*   **Backdrop Blur Effect:** Jika gambar yang ditampilkan berorientasi *portrait* di dalam *container* *landscape*, sisa area kosong tidak dibiarkan hitam polos. Implementasikan trik CSS dengan menjadikan salinan gambar yang sama sebagai *background* *container*, aplikasikan `filter: blur()`, dan tumpuk gambar asli dengan `object-fit: contain` di depannya.
*   **Code Presentation:** *Snippet code* wajib dibingkai menggunakan alat pemformat kode (seperti Carbon) untuk memastikan *syntax highlighting* konsisten dan bebas dari resolusi buram tangkapan layar manual.
*   **Circular Navigation:** Pengguna diarahkan ke portofolio lain alih-alih menemui "jalan buntu" di dasar halaman.
