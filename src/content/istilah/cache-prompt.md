---
title: "Cache Prompt"
aliases:
  - "Prompt caching"
  - "Context caching"
  - "KV cache reuse"
summary: "Teknik menyimpan hasil pemrosesan bagian prompt yang sering diulang, misalnya prompt sistem atau dokumen panjang, agar permintaan berikutnya lebih cepat dan lebih murah."
category: dasar-ai
related:
  - prompt-sistem
  - context-window
  - latensi-inferensi
  - tokenisasi
  - cache
  - server-inferensi
sources:
  - title: "Gim dkk., “Prompt Cache: Modular Attention Reuse for Low-Latency Inference”, arXiv:2311.04934 (7 November 2023)"
    url: https://arxiv.org/abs/2311.04934
  - title: "Anthropic, “Prompt caching with Claude” (pengumuman beta publik; diperbarui 17 Desember 2024)"
    url: https://claude.com/resources/articles/prompt-caching
  - title: "Anthropic, “Prompt caching” (dokumentasi Claude, diakses 13 Oktober 2026)"
    url: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Masalah

Banyak prompt berbagi bagian yang sama: [prompt sistem](/ensiklopedia/prompt-sistem/), templat instruksi, atau dokumen rujukan yang dikirim berulang di setiap giliran percakapan. Tanpa cache, model harus memproses ulang bagian itu dari awal setiap kali, sehingga waktu sampai token pertama dan biaya token masukan ikut membengkak.

## Gagasan teknis

Gim dkk. (November 2023) mengusulkan Prompt Cache. Status perhatian (attention states) untuk segmen teks yang sering muncul dihitung lebih dulu dan disimpan di [server inferensi](/ensiklopedia/server-inferensi/), lalu dipakai ulang ketika segmen itu muncul lagi. Latensi sampai token pertama turun 8 kali pada inferensi berbasis GPU dan 60 kali pada CPU, terutama untuk prompt panjang seperti tanya jawab atas dokumen.

## Dalam layanan komersial

Anthropic meluncurkan prompt caching untuk API Claude dengan klaim penghematan biaya hingga 90% dan latensi hingga 85% untuk prompt panjang. Contoh dari pengumumannya: mengobrol dengan buku yang 100.000 tokennya sudah di-cache menurunkan waktu sampai token pertama dari 11,5 detik menjadi 2,4 detik. Struktur harganya memiliki dua sisi. Menulis ke cache 25% lebih mahal daripada harga token masukan biasa, sedangkan membaca dari cache hanya 10% dari harga dasar. Karena itu caching menguntungkan bila bagian yang sama dipakai berkali-kali.

## Kiat praktis

Cache bekerja pada awalan (prefix) prompt: pemrosesan dapat dilanjutkan dari titik tertentu bila semua isi sebelumnya identik. Dokumentasi Anthropic menyarankan konten statis, seperti definisi alat, instruksi sistem, konteks, dan contoh, diletakkan di awal prompt. Bagian yang berubah, misalnya pertanyaan terbaru, ditaruh di belakang. Cache juga punya masa berlaku, yaitu 5 menit atau 1 jam di API Claude, sehingga penghematannya paling besar untuk permintaan yang datang beruntun.
