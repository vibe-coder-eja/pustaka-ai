# Design Contract — Pustaka AI

## Arah visual

Ruang baca editorial yang hangat: latar ivory, tinta navy, aksen ungu tertahan, dan detail terracotta. Prosa memakai font serif sistem; antarmuka memakai sans-serif sistem. Tidak ada font atau aset runtime dari pihak ketiga.

## Token inti

| Peran | Light | Dark |
|---|---|---|
| Canvas | `#f7f1e5` | `#131622` |
| Paper | `#fffaf0` | `#1a1e2c` |
| Ink | `#182039` | `#f0e8da` |
| Navy | `#172541` | `#d8e2ff` |
| Purple | `#6a4c86` | `#b99ad3` |
| Accent | `#ad6d58` | `#e0a38d` |
| Focus | `#6f45a1` | `#c9a5ed` |

## Layout dan responsif

- Shell maksimum 1180 px; prosa reader maksimum 720 px.
- Desktop reader: TOC / prosa / alat baca. Tablet menyembunyikan TOC samping dan membuka `<details>`. Mobile memindahkan alat ukuran font ke kanan bawah.
- Koleksi: 4 → 2 → 1 kolom. Katalog: 3 → 2 → 1 kolom.
- Breakpoint utama 980 px dan 660 px; lebar minimum yang didukung 320 px.

## State interaksi

- Semua kontrol keyboard-native (`button`, `a`, `dialog`, `details`, form controls).
- Fokus memakai outline 3 px dengan offset 4 px.
- Tema: system → light → dark, disimpan lokal.
- Gerak hover dan smooth scroll dinonaktifkan saat `prefers-reduced-motion: reduce`.
- Hero beranda: buku terbuka simetris (SVG statis, `src/lib/hero-book.ts`) yang memancarkan titik pengetahuan menjadi jaringan dan memadat ke satu inti (canvas, `src/lib/hero-network.ts`, siklus 16 detik). Hanya memakai token tema; berhenti saat tidak terlihat; dengan `prefers-reduced-motion: reduce` hanya bingkai akhir yang digambar.
- Search dialog memiliki label, live results, pintasan `/`, dan penutupan native dengan Escape.

## Larangan

- Tidak memakai font CDN, tracking, gambar stok, gradien neon, glassmorphism dominan, atau UI download.
- Logo adalah monogram "P" dari halaman buku + node AI khusus proyek ini (`src/components/LogoMark.astro`, `public/logo-mark.svg`); jangan diganti dengan merek pihak ketiga.
- Tagline resmi: "Pahami AI, selangkah demi selangkah". Nama tampilan: "Pustaka AI". Tagline tampil di bawah nama pada header dan footer.
- Judul tab: kata kunci di depan, merek di belakang (`… | Pustaka AI`), maksimal 60 karakter, unik per halaman (`src/lib/seo.ts`, diperiksa `verify:build`). Entri ensiklopedia memakai pola "Apa itu …? Pengertian dan penjelasan".
- Lambang di header dan footer berupa SVG inline yang memakai token `--ink` dan `--accent`, sehingga mengikuti tema terang dan gelap.
