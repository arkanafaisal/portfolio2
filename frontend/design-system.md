# Minimalist Portfolio Design System & Theme Guidelines

**Architecture:** Monochromatic / Zinc Scale (Clean, Professional, Content-First)
**Vibe:** Premium, Tech-Savvy, Timeless
**Core Philosophy:** Ketiadaan warna mencolok memaksa fokus pada kualitas proyek dan struktur kode. Navigasi dan hierarki bergantung pada ruang kosong (*whitespace*), ketebalan teks (*font-weight*), dan kontras terang-gelap.

---

## 1. Color Palette: Light Mode
Didesain untuk keterbacaan tinggi dengan kontras yang lembut agar mata tidak cepat lelah.

| UI Element | Color Name | Hex Code | Usage Guidelines |
| :--- | :--- | :--- | :--- |
| **Main Background** | Off-White | `#FAFAFA` | Latar belakang dasar seluruh halaman. |
| **Surface / Card** | Pure White | `#FFFFFF` | Latar belakang *Card Projects*, *Header/Navbar*, dan *Modal*. |
| **Text Primary** | Jet Black | `#09090B` | Judul (H1-H6), nama proyek, angka metrik penting. |
| **Text Secondary** | Slate Gray | `#52525B` | Teks paragraf, deskripsi *case study*, dan *footer*. |
| **Primary CTA** | Dark Onyx | `#18181B` | Latar belakang tombol utama (Hover: `#27272A`). Teks tombol: `#FFFFFF`. |
| **Secondary CTA** | Light Gray | `#F4F4F5` | Latar tombol sekunder / *Tech Badges* (Hover: `#E4E4E7`). |
| **Border & Divider**| Soft Line | `#E4E4E7` | Garis batas *card*, pemisah *section*, garis tepi *device mockup*. |

---

## 2. Color Palette: Dark Mode
Inversi dari *Light Mode* dengan menghindari warna hitam murni (`#000000`) sebagai *background* untuk mencegah distorsi (*halation*) pada teks putih.

| UI Element | Color Name | Hex Code | Usage Guidelines |
| :--- | :--- | :--- | :--- |
| **Main Background** | Deep Onyx | `#09090B` | Latar belakang dasar seluruh halaman. |
| **Surface / Card** | Dark Surface | `#18181B` | Latar belakang *Card*, *Navbar*, dan elemen mengambang. |
| **Text Primary** | Pure White | `#FAFAFA` | Judul utama dan elemen yang butuh hierarki tertinggi. |
| **Text Secondary** | Muted Zinc | `#A1A1AA` | Teks paragraf dan deskripsi sekunder. |
| **Primary CTA** | Snow White | `#FFFFFF` | Latar tombol utama (Hover: `#E4E4E7`). Teks tombol: `#09090B`. |
| **Secondary CTA** | Elevated Dark| `#27272A` | Latar tombol sekunder / *Tech Badges* (Hover: `#3F3F46`). |
| **Border & Divider**| Dark Line | `#27272A` | Garis batas, pemisah *section*, (Active/Hover border: `#3F3F46`). |

---

## 3. Component Specific Rules

### A. Dynamic Backdrop Blur (Carousel)
Digunakan pada halaman detail saat menampilkan gambar *portrait* dalam *container landscape*.
*   **Light Mode Blur Overlay:** Tumpuk gambar *background* yang di-blur dengan lapisan putih transparan `rgba(255, 255, 255, 0.6)`.
*   **Dark Mode Blur Overlay:** Tumpuk dengan lapisan hitam transparan `rgba(9, 9, 11, 0.6)`.

### B. Code Snippet Container
Untuk memberikan kesan teknis yang dramatis dan memastikan *syntax highlighting* terlihat jelas, blok kode sebaiknya selalu menggunakan **Dark Theme** terlepas dari mode halaman.
*   **Background:** `#0D0D12` (Lebih gelap dari *background* utama Dark Mode).
*   **Border:** `1px solid #27272A`.
*   **Syntax Highlighting:** Gunakan warna monokromatik pudar (misal: abu-abu terang untuk variabel, putih tebal untuk fungsi/deklarasi). Hindari palet pelangi (merah/kuning/biru terang).

### C. Carousel Indicators & Accordions
*   **Active Dot:** `#09090B` (Light) / `#FAFAFA` (Dark).
*   **Inactive Dot:** `#E4E4E7` (Light) / `#3F3F46` (Dark).
*   **Accordion Icon:** Panah default menggunakan *Text Secondary*, berubah menjadi *Text Primary* saat *hover* atau berstatus terbuka (*active*).

---

## 4. Animation & Interaction Guidelines

Desain minimalis mensyaratkan pergerakan yang mulus, cepat, dan tidak berlebihan (*no bouncing*).

*   **Global Transition Curve:** Wajib menggunakan kurva *Ease-Out* modern.
```css
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    ```
*   **Hover Effect (Cards):** Jangan memindahkan kartu (jangan gunakan `translate-y`).
    *   *Light Mode:* Ubah `box-shadow` dari bayangan sangat halus ke bayangan menengah tebal, dan ubah warna *border* dari `#E4E4E7` menjadi `#D4D4D8`.
    *   *Dark Mode:* Karena bayangan (*shadow*) sulit terlihat di tema gelap, cukup beri efek `background-color` yang sedikit lebih terang (dari `#18181B` ke `#27272A`) atau perjelas *border*-nya.
*   **Carousel Transition:** Gunakan *Cross-fade* (mengubah `opacity` 0 ke 1 selama `0.3s`), BUKAN efek *Slide* (geser) untuk menghindari transisi *backdrop blur* yang kasar.

---

## 5. Accessibility (A11y) & Developer Standards

Sebagai portofolio *developer*, kepatuhan terhadap standar aksesibilitas adalah nilai jual tersembunyi yang disukai Tech Lead.

*   **Focus Ring (Keyboard Navigation):** Semua elemen interaktif (`<a>`, `<button>`, `<input>`) WAJIB memiliki status `:focus-visible`.
```css
    *:focus-visible {
      outline: 2px solid #A1A1AA; /* Zinc-400 */
      outline-offset: 2px;
    }
    ```
*   **Contrast Ratio:** Teks utama terhadap *background* wajib memenuhi rasio standar WCAG 2.1 minimal `4.5:1` (AA) atau idealnya `7:1` (AAA). Palet warna di atas sudah dirancang untuk lulus tes ini.
*   **Status Indicators:** Jika membutuhkan warna status (misalnya titik hijau *Available to work*):
    *   *Light Mode:* Background `#D1FAE5` dengan teks `#065F46`.
    *   *Dark Mode:* Background `rgba(6, 95, 70, 0.2)` dengan *outline* `#10B981`.
