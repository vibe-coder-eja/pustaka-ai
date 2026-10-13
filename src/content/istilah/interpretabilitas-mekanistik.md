---
title: "Interpretabilitas mekanistik"
aliases:
  - "Mechanistic interpretability"
  - "Circuits"
summary: "Cabang riset yang berusaha membongkar jaringan saraf menjadi komponen yang dapat dipahami, seperti fitur dan sirkuit, agar cara kerja internalnya dapat dijelaskan."
category: keselamatan-etika
related:
  - alignment
  - model
  - llm
  - masalah-kendali
  - pengawasan-skalabel
sources:
  - title: "Olah dkk., “Zoom In: An Introduction to Circuits”, Distill (10 Maret 2020)"
    url: https://distill.pub/2020/circuits/zoom-in/
  - title: "Templeton dkk., “Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet”, Transformer Circuits Thread, Anthropic (21 Mei 2024)"
    url: https://transformer-circuits.pub/2024/scaling-monosemanticity/
level: lanjut
status: ditinjau
updated: 2026-10-13
---

## Gagasan

Jaringan saraf sering diperlakukan sebagai kotak hitam. Interpretabilitas mekanistik mencoba membuka kotak itu: mengidentifikasi unit yang bermakna di dalamnya dan bagaimana unit-unit itu terhubung membentuk perhitungan.

Artikel “Zoom In: An Introduction to Circuits” (Olah dkk., Distill, 10 Maret 2020) mengajukan tiga klaim spekulatif, sesuai judul bagiannya: **fitur** (unit dasar yang dipelajari jaringan), **sirkuit** (fitur-fitur yang terhubung lewat bobot menjadi algoritma), dan **universalitas** (fitur dan sirkuit serupa muncul di berbagai model). Contoh yang dibahas mencakup detektor kurva dan neuron polisemantik, yaitu neuron yang menanggapi beberapa hal yang tak berkaitan.

## Pada model bahasa besar

Anthropic (Templeton dkk., 21 Mei 2024) menerapkan pembelajaran kamus dengan sparse autoencoder pada lapisan tengah Claude 3 Sonnet, dengan tiga ukuran kamus: sekitar 1 juta, 4 juta, dan 34 juta fitur. Mereka melaporkan fitur yang dapat ditafsirkan, misalnya yang menanggapi Jembatan Golden Gate, serta fitur yang relevan bagi keselamatan seperti penipuan, bias, dan sikofansi. Penulis sendiri mencatat batasan dan masalah terbuka: kamus yang diperoleh tidak lengkap, dan tidak adanya fitur khusus untuk suatu konsep tidak berarti informasinya hilang dari aktivasi.

## Mengapa terkait keselamatan

Jika perilaku internal model dapat dibaca, penyimpangan mungkin terdeteksi sebelum menimbulkan akibat. Ini masih riset awal; temuan di atas berasal dari satu laboratorium dan model tertentu, dan belum menjadi alat verifikasi yang terbukti andal.
