---
title: Hallucination
aliases:
  - Halusinasi
  - Halusinasi AI
summary: "Halusinasi: keluaran AI yang terdengar meyakinkan tetapi salah atau tidak berdasar, misalnya fakta, kutipan, atau rujukan yang dikarang."
category: dasar-ai
related:
  - llm
  - rag
  - penambatan-sumber
  - evals
  - tolok-ukur
  - alignment
sources:
  - title: "Ji dkk., “Survey of Hallucination in Natural Language Generation”, arXiv:2202.03629 (8 Februari 2022)"
    url: https://arxiv.org/abs/2202.03629
  - title: "Kalai dkk., “Why Language Models Hallucinate”, arXiv:2509.04664 (4 September 2025)"
    url: https://arxiv.org/abs/2509.04664
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Halusinasi** adalah keluaran AI yang tampak masuk akal dan ditulis dengan yakin, padahal salah atau tidak didukung data. Contoh yang sering ditemui: judul buku atau makalah yang tidak pernah ada, tanggal yang keliru, kutipan yang dikarang, atau fungsi pemrograman yang tidak tersedia di library mana pun. Masalah ini tidak terbatas pada percakapan. Survei Ji dkk. (2022) mencatatnya pada peringkasan, terjemahan mesin, tanya jawab, dialog, pembuatan teks dari data, dan model yang menggabungkan gambar dan bahasa.

## Mengapa terjadi

[LLM](/ensiklopedia/llm/) dilatih untuk menghasilkan teks yang masuk akal, bukan untuk memeriksa kebenaran. Kalai dkk. (2025) menjelaskan bahwa model berhalusinasi karena prosedur pelatihan dan evaluasi **memberi imbalan untuk menebak** daripada mengakui ketidakpastian. Mereka mengibaratkannya dengan siswa yang menghadapi soal sulit: menebak lebih menguntungkan nilai ujian daripada mengosongkan jawaban.

Menurut makalah itu, halusinasi bukan hal misterius. Ia muncul dari tekanan statistik biasa ketika pernyataan salah sulit dibedakan dari fakta. Halusinasi bertahan karena sebagian besar [tolok ukur](/ensiklopedia/tolok-ukur/) menilai jawaban “tidak tahu” sama buruknya dengan jawaban salah. Usulan mereka adalah mengubah cara penilaian tolok ukur yang sudah ada, bukan sekadar menambah uji halusinasi baru.

## Cara mengurangi risiko

- **Beri sumber:** sediakan dokumen yang relevan lewat [RAG](/ensiklopedia/rag/) dan minta model menjawab hanya dari dokumen itu ([penambatan sumber](/ensiklopedia/penambatan-sumber/)).
- **Izinkan “tidak tahu”:** nyatakan di prompt bahwa model boleh mengaku tidak yakin.
- **Minta rujukan, lalu periksa:** rujukan dari model sendiri juga bisa dikarang, jadi tetap cek tautannya.
- **Ukur:** uji sistem secara berkala dengan [evals](/ensiklopedia/evals/) yang memuat pertanyaan berjawaban pasti.
- **Verifikasi manusia** untuk keputusan penting di bidang kesehatan, hukum, atau keuangan.

## Catatan istilah

Sebagian peneliti menganggap kata “halusinasi” kurang tepat karena memberi kesan model “melihat” sesuatu, dan mengusulkan istilah seperti *konfabulasi*. Namun “halusinasi” tetap menjadi istilah paling umum, termasuk dalam makalah-makalah di atas.
