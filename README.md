# Pustaka Akal Imitasi

> Catatan belajar teknologi, disusun untuk dibaca kembali.

Website pustaka digital statis karya **Reza Syahputra**, dibangun dengan Astro. Situs memuat empat buku referensi dan katalog 1.407 model Fal AI dengan pencarian, filter, serta pagination di browser.

## Fitur

- Empat reader dengan daftar isi, deep link stabil, navigasi bagian, progres lokal, tema, dan ukuran teks.
- Pencarian global lintas buku, bab, serta katalog model.
- Katalog Fal AI dengan query, kategori, URL state, dan 24 hasil per halaman; tidak merender 1.407 kartu sekaligus.
- Layout responsif mulai 320 px, navigasi seluler, skip link, fokus terlihat, semantik, dan reduced motion.
- Canonical, Open Graph, sitemap, robots, halaman 404, disclaimer, serta lisensi.
- Tanpa backend, akun, CMS, analytics, cookie pelacak, atau request font pihak ketiga.

## Menjalankan lokal

Prasyarat: Node.js 22 atau versi LTS aktif dan npm.

```sh
npm ci
npm test
npm run dev
```

Astro menggunakan base path `/pustaka-akal-imitasi/`. Buka URL yang ditampilkan oleh dev server.

## Verifikasi

```sh
npm test
npm run check
npm run build
npm run verify
npm audit --omit=dev
```

`npm run verify` menjalankan test, type/content check, build produksi, lalu memeriksa artefak wajib, base path, tautan internal, metadata dasar, sitemap, dan batas DOM katalog.

## Struktur konten

- `src/content/books/` — empat naskah publik yang sudah dikurasi.
- `src/data/fal-models.json` — snapshot katalog Fal AI.
- `scripts/update-content.ts` — pipeline pembaruan eksplisit dari folder sumber lokal; tidak dijalankan saat build.

Folder sumber asli berada di luar proyek dan tidak boleh dimodifikasi atau dipublikasikan. Katalog Skills yang ada di proyek merupakan hasil sanitasi/generalization. Tanggal snapshot dipertahankan pada halaman terkait.

## Deployment (belum dilakukan)

Workflow `.github/workflows/pages.yml` disiapkan untuk GitHub Pages menggunakan izin standar `contents: read`, `pages: write`, dan `id-token: write`. Proyek ini belum diinisialisasi Git, belum dipush, dan belum dideploy oleh proses implementasi lokal ini.

## Privasi dan keamanan

Jangan menambahkan `.env`, token, password, sertifikat, dump konfigurasi mesin, atau sumber pribadi ke repositori. `.gitignore` memblokir pola lokal umum. Preferensi pembaca tersimpan hanya di `localStorage`.

## Lisensi

- Kode: [MIT](./LICENSE)
- Konten editorial asli: [CC BY 4.0](./CONTENT-LICENSE.md)
- Data, merek, model, dan deskripsi pihak ketiga tetap mengikuti hak pemiliknya.
