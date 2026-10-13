---
title: "Peracunan Data"
aliases:
  - "Data poisoning"
  - "Backdoor attack"
  - "Pintu belakang model"
summary: "Serangan yang menyisipkan contoh berbahaya ke data pelatihan agar model belajar perilaku yang diinginkan penyerang, misalnya pintu belakang yang aktif saat ada frasa pemicu tertentu."
category: keselamatan-etika
related:
  - pra-pelatihan
  - penyetelan-halus
  - prompt-injection
  - pembobolan-model
  - alignment
  - uji-serang-tim-merah
sources:
  - title: "Carlini dkk., “Poisoning Web-Scale Training Datasets is Practical”, arXiv:2302.10149 (20 Februari 2023)"
    url: https://arxiv.org/abs/2302.10149
  - title: "Souly dkk., “Poisoning Attacks on LLMs Require a Near-constant Number of Poison Samples”, arXiv:2510.07192 (8 Oktober 2025)"
    url: https://arxiv.org/abs/2510.07192
  - title: "Anthropic, “A small number of samples can poison LLMs of any size” (9 Oktober 2025)"
    url: https://www.anthropic.com/research/small-samples-poison
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Beda dengan prompt injection

[Prompt injection](/ensiklopedia/prompt-injection/) menyerang model saat dipakai, lewat teks yang dibacanya. Peracunan data menyerang lebih awal, saat model belajar. Hasilnya tertanam di [parameter](/ensiklopedia/parameter-model/) model dan ikut terbawa ke setiap salinan model itu.

## Data web mudah diracuni

Model besar dilatih dari data yang dirayapi dari internet. Carlini dkk. (Februari 2023) menunjukkan dua serangan yang praktis dilakukan saat itu terhadap 10 dataset populer:

- **Split-view poisoning** memanfaatkan sifat konten internet yang bisa berubah. Isi yang dilihat penyusun dataset berbeda dengan isi yang kelak diunduh pengguna dataset, misalnya karena domain kedaluwarsa dibeli penyerang. Dengan cara ini, 0,01% dataset LAION-400M atau COYO-700M bisa diracuni dengan biaya hanya 60 dolar AS.
- **Frontrunning poisoning** menyasar dataset yang mengambil cuplikan berkala dari konten publik seperti Wikipedia. Penyerang cukup menyisipkan contoh jahat dalam jendela waktu singkat sebelum cuplikan diambil.

Penulis memberi tahu pengelola dataset yang terdampak dan mengusulkan beberapa pertahanan murah.

## Jumlah yang dibutuhkan hampir tetap

Studi bersama Anthropic, UK AI Security Institute, dan Alan Turing Institute (Oktober 2025) melatih model berukuran 600 juta hingga 13 miliar parameter dari nol. Hanya 250 dokumen beracun sudah cukup untuk menanam pintu belakang pada semua ukuran model, padahal model terbesar dilatih dengan data bersih lebih dari 20 kali lipat. Pintu belakang yang diuji sengaja dibuat berisiko rendah: model mengeluarkan teks acak saat menemui frasa pemicu tertentu. Temuan ini menantang anggapan bahwa penyerang harus menguasai sekian persen data pelatihan. Bila jumlah dokumen yang dibutuhkan tetap kecil, serangan menjadi lebih mudah dilakukan daripada yang diduga sebelumnya.
