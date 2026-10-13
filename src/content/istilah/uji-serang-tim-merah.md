---
title: "Uji Serang Tim Merah"
aliases:
  - "Red teaming"
  - "Red team"
  - "AI red teaming"
summary: "Pengujian yang dengan sengaja menyerang sistem AI sendiri, oleh manusia atau oleh model lain, untuk menemukan keluaran berbahaya dan celah keamanan sebelum sistem dipakai luas."
category: keselamatan-etika
related:
  - pembobolan-model
  - evals
  - alignment
  - pagar-pengaman-ai
  - rlhf
  - model-terdepan
sources:
  - title: "Ganguli dkk., “Red Teaming Language Models to Reduce Harms: Methods, Scaling Behaviors, and Lessons Learned”, arXiv:2209.07858 (23 Agustus 2022)"
    url: https://arxiv.org/abs/2209.07858
  - title: "Perez dkk., “Red Teaming Language Models with Language Models”, arXiv:2202.03286 (7 Februari 2022)"
    url: https://arxiv.org/abs/2202.03286
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Asal istilah

"Tim merah" berasal dari latihan militer dan keamanan siber: satu tim berperan sebagai lawan untuk menguji pertahanan pihak sendiri. Pada AI, sasarannya adalah perilaku model, misalnya keluaran yang menyinggung, berbahaya, atau membocorkan data.

## Oleh manusia

Ganguli dkk. (Anthropic, Agustus 2022) menyerang model berukuran 2,7 miliar, 13 miliar, dan 52 miliar parameter dalam empat jenis, dari model bahasa polos hingga model yang dilatih dengan [RLHF](/ensiklopedia/rlhf/). Model RLHF makin sulit diserang seiring bertambah besarnya, sedangkan jenis lain tidak menunjukkan tren berarti. Mereka merilis 38.961 serangan red team untuk dianalisis pihak lain, beserta penjelasan rinci tentang instruksi, proses, metode statistik, dan ketidakpastiannya.

## Oleh model lain

Pengujian manual mahal dan jumlah kasusnya terbatas. Perez dkk. (Februari 2022) memakai model bahasa lain untuk membuat kasus uji secara otomatis, lalu menilai jawaban dengan pengklasifikasi konten ofensif. Cara ini menemukan puluhan ribu balasan ofensif pada chatbot 280 miliar parameter. Kerugian lain juga terungkap: nomor telepon pribadi dan rumah sakit yang dikeluarkan sebagai kontak chatbot, kebocoran data pelatihan pribadi, dan kerugian yang muncul sepanjang percakapan.

## Tempatnya dalam siklus

Temuan uji serang dipakai untuk memperbaiki model dan [pagar pengaman](/ensiklopedia/pagar-pengaman-ai/), lalu dijadikan kasus [evals](/ensiklopedia/evals/) agar celah yang sama tidak muncul lagi. Namun uji serang tidak menjamin keamanan. Studi [pembobolan model](/ensiklopedia/pembobolan-model/) menunjukkan celah baru tetap ditemukan pada model yang sudah diuji secara ekstensif.
