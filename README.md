# Pustaka Akal Imitasi

> Catatan belajar teknologi, disusun untuk dibaca kembali.

Ensiklopedia mini berbahasa Indonesia tentang kecerdasan buatan (AI, atau akal imitasi) dan superintelligence (SI), karya **Reza Syahputra**. Dibangun dengan Astro dan diterbitkan di GitHub Pages: <https://vibe-coder-eja.github.io/pustaka-akal-imitasi/>. Selain entri ensiklopedia, situs memuat referensi Hermes Agent dan katalog model dengan pencarian, filter, serta pagination di browser.

## Fitur

- Peta interaktif `/ensiklopedia/peta-si/`: linimasa tonggak AI menuju superintelligence (saring per jalur, loncat masa, tautan langsung ke tiap tonggak, navigasi keyboard) dan panel progres ensiklopedia; ringan, tanpa library pihak ketiga, dengan versi daftar untuk pembaca layar.
- Ensiklopedia: satu halaman per istilah dengan definisi, status tinjauan, sumber rujukan, istilah terkait, kategori, indeks A–Z, dan data terstruktur schema.org (`DefinedTerm`).

- Empat reader dengan daftar isi, deep link stabil, navigasi bagian, progres lokal, tema, dan ukuran teks.
- Pencarian global lintas buku, bab, serta katalog model; indeksnya hanya diunduh saat pencarian dibuka.
- Katalog Fal AI dengan query, kategori, URL state, dan 24 hasil per halaman; data dimuat sesudah halaman tampil dan tidak merender ribuan kartu sekaligus.
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

`npm run verify` menjalankan test, type/content check, build produksi, lalu memeriksa artefak wajib, base path, tautan internal, metadata dasar, sitemap, batas ukuran HTML, dan batas DOM katalog, diikuti security gate untuk kredensial dan penanda privat. Perintah yang sama dijalankan di CI pada setiap pull request.

## Sumber data dan pembaruan

Tiga katalog diambil dari sumber publik, bukan dari berkas lokal:

| Data | Sumber | Keluaran |
|---|---|---|
| Skills Hermes | Repositori resmi [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) (`skills/` dan `optional-skills/`) | `src/data/hermes-skills.json`, `src/content/books/katalog-skills-hermes.md` |
| Model Nous Portal | `https://inference-api.nousresearch.com/v1/models` | `src/content/books/nous-portal-models.md` |
| Model Fal AI | `https://api.fal.ai/v1/models` (hanya status aktif) | `src/data/fal-models.json` |

```sh
npm run data:update             # semua sumber
npm run data:update -- skills   # atau: nous, fal
```

Tanggal dan versi tiap snapshot dicatat di `src/data/snapshots.json`. Workflow `update-data.yml` menjalankan pembaruan setiap bulan dan membuka pull request untuk ditinjau; workflow ini tidak pernah men-deploy langsung.

Kebijakan kurasi skills:

- Hanya skill bawaan dan skill opsional resmi dari repositori Nous Research. Skill pribadi dan skill komunitas pihak ketiga tidak dimuat.
- `src/data/skills-denylist.json` memuat skill resmi yang sengaja dikecualikan beserta alasannya (mis. alat jailbreak model atau penembus perlindungan anti-bot).
- `src/data/skills-id.json` memuat terjemahan deskripsi ke bahasa Indonesia. Skill baru tanpa terjemahan ditampilkan dengan deskripsi aslinya sampai terjemahannya ditambahkan.

## Struktur konten

- `src/content/istilah/` — **ensiklopedia**: satu berkas Markdown per istilah (koleksi konten Astro). Nama berkas adalah slug dan menjadi URL `/ensiklopedia/<slug>/`.
- `src/content/books/` — tiga naskah referensi. Hermes CLI berasal dari catatan lokal; katalog Skills dan Nous Portal dihasilkan oleh `npm run data:update`.
- `src/data/` — data katalog dan snapshot.
- `src/data/peta/tonggak.json` — tonggak untuk peta interaktif (tanggal, jalur, ringkasan, tokoh dan lembaga, sumber, entri terkait). Tiap tonggak wajib punya sumber `https` dan tanggal valid; diperiksa `npm test`. Jalankan `npm run check:links` untuk memeriksa seluruh URL sumber.
- `src/lib/taxonomy.ts` — kelompok dan kategori ensiklopedia, label status, label tingkat.
- `scripts/update-data.ts` — pipeline pembaruan katalog dari sumber publik.
- `scripts/update-content.ts` — menyalin Hermes CLI dari folder sumber lokal (`npm run content:update -- --source-dir <folder>`); tidak dijalankan saat build.

### Menulis atau menyunting entri

```md
---
title: Superintelligence
aliases: [Kecerdasan Super, ASI]
summary: Definisi singkat satu atau dua kalimat (20–400 karakter).
category: menuju-si          # lihat src/lib/taxonomy.ts
related: [agi, alignment]    # slug entri lain
level: menengah              # opsional: dasar | menengah | lanjut
status: ditinjau             # catatan | ditinjau | terverifikasi
sources:
  - title: Judul sumber primer
    url: https://contoh.org/sumber
updated: 2026-10-12
---

Isi entri dalam Markdown (opsional).
```

Aturan: entri berstatus `terverifikasi` wajib punya `sources`; slug rujukan `related` harus ada; nama berkas harus sama dengan slug judul. Semuanya diperiksa oleh `npm test`. Untuk topik yang masih diperdebatkan, tulis sebagai pandangan beserta pihak yang mengajukannya, bukan sebagai fakta.

## Deployment

Setiap push ke `main` menjalankan `.github/workflows/pages.yml`: verifikasi penuh, lalu deploy ke GitHub Pages dengan izin minimum per job. Pull request hanya menjalankan verifikasi, tanpa deploy.

Agar `update-data.yml` dapat membuka pull request, aktifkan **Settings → Actions → General → Workflow permissions → Allow GitHub Actions to create and approve pull requests**. Pull request yang dibuat dengan token bawaan tidak memicu workflow lain; verifikasi sudah dijalankan di dalam workflow pembaruan itu sendiri.

## Privasi dan keamanan

Jangan menambahkan `.env`, token, password, sertifikat, dump konfigurasi mesin, atau sumber pribadi ke repositori. `.gitignore` memblokir pola lokal umum. Preferensi pembaca tersimpan hanya di `localStorage`.

Pemilik dapat menaruh nama skill pribadi, nama orang, atau nama perusahaan yang tidak boleh muncul di situs pada `.private-markers.json` (di-gitignore; bentuk `{ "skills": [], "terms": [] }`). Berkas ini dibaca oleh `content:update`, `data:update`, dan security gate, sehingga daftar nama privat tidak pernah masuk ke repositori publik. Di CI berkas ini tidak ada, jadi hanya aturan generik yang berlaku.

## Lisensi

- Kode: [MIT](./LICENSE)
- Konten editorial asli: [CC BY 4.0](./CONTENT-LICENSE.md)
- Data, merek, model, dan deskripsi pihak ketiga tetap mengikuti hak pemiliknya.
