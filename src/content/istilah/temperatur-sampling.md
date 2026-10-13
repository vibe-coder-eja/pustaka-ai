---
title: "Temperatur Sampling"
aliases:
  - "Temperature"
  - "Top-p"
  - "Nucleus sampling"
  - "Decoding"
summary: "Pengaturan saat model memilih token berikutnya: temperatur menajamkan atau meratakan sebaran peluang, sedangkan top-p hanya mengambil sampel dari kelompok token teratas yang peluang kumulatifnya mencapai p."
category: dasar-ai
related:
  - inference
  - llm
  - self-consistency
  - hallucination
sources:
  - title: "Holtzman dkk., “The Curious Case of Neural Text Degeneration”, arXiv:1904.09751 (22 April 2019)"
    url: https://arxiv.org/abs/1904.09751
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Memilih token berikutnya

Pada setiap langkah [inferensi](/ensiklopedia/inference/), model bahasa menghasilkan sebaran peluang atas semua token yang mungkin muncul berikutnya. Cara memilih dari sebaran itu disebut strategi decoding. Pilihan ini tidak mengubah model, tetapi sangat memengaruhi teks yang keluar.

## Temperatur

Temperatur membagi skor mentah (logit) sebelum diubah menjadi peluang. Nilai di bawah 1 menajamkan sebaran, sehingga token berpeluang tinggi makin dominan dan jawaban lebih seragam. Nilai di atas 1 meratakan sebaran, sehingga pilihan lebih beragam tetapi juga lebih mudah melantur. Temperatur mendekati 0 hampir sama dengan selalu mengambil token berpeluang tertinggi (greedy).

## Top-p atau nucleus sampling

Holtzman dkk. (2019) menemukan bahwa memilih teks yang peluangnya paling tinggi justru menghasilkan tulisan hambar dan anehnya berulang. Sebagai jalan keluar, mereka mengusulkan nucleus sampling, yang sekarang dikenal sebagai top-p. Sampel hanya diambil dari "inti" sebaran, yaitu sekumpulan token teratas yang peluang kumulatifnya mencapai p, sementara ekor sebaran yang kurang andal dibuang. Makalah yang sama juga membahas pengambilan sampel dengan temperatur dan top-k.

## Dalam praktik

Tugas yang menuntut ketepatan, seperti kode atau ekstraksi data, biasanya memakai temperatur rendah. Tugas kreatif memberi ruang lebih besar. Beberapa teknik justru membutuhkan keragaman, misalnya [self-consistency](/ensiklopedia/self-consistency/), yang mengambil sampel beberapa jalur penalaran lalu memilih jawaban yang paling sering muncul.
