---
title: "Distilasi model"
aliases:
  - "Distillation"
  - "Knowledge distillation"
summary: "Memindahkan pengetahuan dari model atau ansambel besar ke satu model yang lebih kecil sehingga lebih mudah dan murah dipakai."
category: dasar-ai
related:
  - model
  - inference
  - mixture-of-experts
  - lora
sources:
  - title: "Hinton, Vinyals, Dean, “Distilling the Knowledge in a Neural Network”, arXiv:1503.02531 (9 Maret 2015)"
    url: https://arxiv.org/abs/1503.02531
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Latar

Merata-ratakan prediksi banyak model hampir selalu meningkatkan kinerja, tetapi menjalankan seluruh ansambel mahal untuk dipakai luas. Hinton dkk. mengembangkan pendekatan memampatkan pengetahuan ansambel ke satu model yang jauh lebih mudah dipasang, membangun pekerjaan Caruana dan kolega.

## Hasil dan catatan

Makalah melaporkan hasil mengejutkan pada MNIST dan peningkatan signifikan pada model akustik sebuah sistem komersial yang banyak dipakai. Konsep ini kini umum dipakai juga untuk membuat model bahasa kecil dari model yang besar; penerapan itu bukan inti makalah 2015 tersebut.
