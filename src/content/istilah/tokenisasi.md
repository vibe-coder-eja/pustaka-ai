---
title: "Tokenisasi"
aliases:
  - "Tokenization"
  - "Token LLM"
  - "Byte pair encoding"
  - "BPE"
  - "Biaya token"
summary: "Proses memecah teks menjadi token, yaitu potongan kata atau subkata yang menjadi satuan kerja model bahasa; jumlah token menentukan batas konteks, biaya API, dan kecepatan jawaban."
category: dasar-ai
related:
  - llm
  - context-window
  - cache-prompt
  - latensi-inferensi
  - rate-limit
  - representasi-vektor
sources:
  - title: "Sennrich, Haddow & Birch, “Neural Machine Translation of Rare Words with Subword Units”, arXiv:1508.07909 (31 Agustus 2015)"
    url: https://arxiv.org/abs/1508.07909
  - title: "Petrov dkk., “Language Model Tokenizers Introduce Unfairness Between Languages”, arXiv:2305.15425 (17 Mei 2023)"
    url: https://arxiv.org/abs/2305.15425
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Apa itu token

Model bahasa tidak membaca huruf atau kata secara langsung. Teks lebih dulu dipecah menjadi token, potongan yang bisa berupa kata utuh, bagian kata, tanda baca, atau byte. Setiap token punya nomor dalam kosakata model. (Entri [Token](/ensiklopedia/token/) di ensiklopedia ini membahas makna lain, yaitu token akses untuk autentikasi.)

## Subkata dan BPE

Kosakata yang tetap tidak bisa memuat semua kata yang mungkin ada. Sennrich, Haddow & Birch (2015) mengusulkan agar kata langka dan kata asing dikodekan sebagai rangkaian unit subkata. Salah satu caranya memakai algoritme kompresi byte pair encoding (BPE). Gagasannya: nama, kata majemuk, dan kata serapan sering bisa diterjemahkan lewat potongan yang lebih kecil daripada kata. BPE dan turunannya kini menjadi dasar tokenizer pada kebanyakan model bahasa.

## Tidak adil antarbahasa

Petrov dkk. (Mei 2023) menemukan bahwa teks yang sama, bila diterjemahkan ke bahasa berbeda, bisa menghasilkan jumlah token yang sangat berbeda, dalam beberapa kasus hingga 15 kali lipat. Ketimpangan ini tetap ada bahkan pada tokenizer yang sengaja dilatih untuk banyak bahasa. Akibatnya penutur sebagian bahasa membayar lebih mahal untuk layanan komersial, menunggu lebih lama, dan bisa memasukkan lebih sedikit konten ke dalam konteks model.

## Mengapa penting dalam praktik

- **Biaya:** layanan API umumnya menagih per token, biasanya dengan harga berbeda untuk token masukan dan keluaran.
- **Batas konteks:** [context window](/ensiklopedia/context-window/) diukur dalam token, bukan kata.
- **Kecepatan:** makin banyak token yang dihasilkan, makin lama jawabannya ([latensi](/ensiklopedia/latensi-inferensi/)).
- **[Rate limit](/ensiklopedia/rate-limit/):** banyak penyedia membatasi jumlah token per menit.

Rasio token per kata juga berbeda antarbahasa. Teks berbahasa Indonesia bisa membutuhkan lebih banyak token daripada padanannya dalam bahasa Inggris, tergantung tokenizer model yang dipakai.
