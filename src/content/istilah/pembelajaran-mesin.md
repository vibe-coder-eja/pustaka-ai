---
title: "Pembelajaran mesin"
aliases:
  - "Machine learning"
  - "ML"
summary: "Cabang AI yang membuat komputer mempelajari pola dari data, bukan diprogram aturan demi aturan. Hasil belajarnya berupa model yang dapat memprediksi atau menghasilkan konten baru."
category: dasar-ai
related:
  - ai
  - model
  - jaringan-saraf
  - pembelajaran-mendalam
  - parameter-model
  - pra-pelatihan
  - penyetelan-halus
  - rlhf
  - inference
sources:
  - title: "Google for Developers, “Introduction to Machine Learning: What is ML?”"
    url: https://developers.google.com/machine-learning/intro-to-ml/what-is-ml
  - title: "Goodfellow, Bengio, Courville, “Deep Learning” (MIT Press, 2016), Bab 1: Introduction"
    url: https://www.deeplearningbook.org/contents/intro.html
level: dasar
status: ditinjau
updated: 2026-10-19
---

## Arti singkat

**Pembelajaran mesin** (*machine learning*, ML) adalah cara membangun AI dengan memberi komputer banyak contoh, lalu membiarkannya menemukan pola sendiri. Materi pengantar Google merumuskannya sebagai proses melatih perangkat lunak, yang disebut [model](/ensiklopedia/model/), agar dapat membuat prediksi yang berguna atau menghasilkan konten seperti teks, gambar, audio, dan video dari data.

## Berbeda dari pemrograman biasa

Pada program biasa, manusia menulis aturannya: “jika subjek email memuat kata X, tandai sebagai spam.” Pada pembelajaran mesin, manusia memberi ribuan email yang sudah diberi label spam atau bukan, lalu algoritma menyesuaikan [parameter](/ensiklopedia/parameter-model/) model sampai ia mampu membedakan keduanya sendiri. Buku *Deep Learning* (Goodfellow, Bengio, Courville, 2016) memakai contoh semacam ini: algoritma sederhana seperti *naive Bayes* sudah dapat memisahkan email sah dari spam.

Keunggulannya, model dapat menangani masalah yang aturannya terlalu rumit untuk ditulis, misalnya mengenali wajah atau memahami kalimat. Kekurangannya, kualitas model sangat bergantung pada data. Data yang bias atau keliru menghasilkan model yang bias atau keliru.

## Empat cara belajar

Materi Google membagi sistem ML ke dalam beberapa kategori menurut cara belajarnya:

- **Supervised learning (terarah):** belajar dari data yang sudah berisi jawaban benar, misalnya foto berlabel “kucing” atau “anjing”. Dipakai untuk klasifikasi dan regresi.
- **Unsupervised learning (tak terarah):** mencari pola atau kelompok bermakna dalam data tanpa label.
- **Reinforcement learning (penguatan):** belajar dari imbalan dan hukuman atas tindakannya di sebuah lingkungan. Teknik ini juga dipakai dalam [RLHF](/ensiklopedia/rlhf/).
- **AI generatif:** model yang menghasilkan konten baru dari masukan, seperti [LLM](/ensiklopedia/llm/) dan [model difusi](/ensiklopedia/model-difusi/).

## Siklus kerja

Secara garis besar, ada dua tahap: **pelatihan**, yaitu model belajar dari data dan parameternya disetel, lalu **[inferensi](/ensiklopedia/inference/)**, yaitu model yang sudah jadi dipakai untuk masukan baru. Pada model bahasa modern, pelatihan sendiri dibagi lagi menjadi [pra-pelatihan](/ensiklopedia/pra-pelatihan/) dan [penyetelan halus](/ensiklopedia/penyetelan-halus/).

## Hubungan dengan istilah lain

- Pembelajaran mesin adalah bagian dari [AI](/ensiklopedia/ai/), dan kini menjadi pendekatan yang paling dominan.
- [Pembelajaran mendalam](/ensiklopedia/pembelajaran-mendalam/) adalah bagian dari pembelajaran mesin yang memakai [jaringan saraf](/ensiklopedia/jaringan-saraf/) berlapis banyak.
