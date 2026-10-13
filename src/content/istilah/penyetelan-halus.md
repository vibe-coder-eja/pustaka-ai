---
title: "Penyetelan Halus"
aliases:
  - "Fine-tuning"
  - "Finetuning"
  - "Instruction tuning"
  - "Penyetelan instruksi"
summary: "Pelatihan lanjutan atas model pralatih memakai data yang lebih sempit agar model menguasai tugas, ranah, atau gaya perilaku tertentu."
category: dasar-ai
related:
  - pra-pelatihan
  - lora
  - rlhf
  - dpo
  - distilasi-model
  - parameter-model
sources:
  - title: "Howard & Ruder, “Universal Language Model Fine-tuning for Text Classification”, arXiv:1801.06146 (18 Januari 2018)"
    url: https://arxiv.org/abs/1801.06146
  - title: "Wei dkk., “Finetuned Language Models Are Zero-Shot Learners”, arXiv:2109.01652 (3 September 2021)"
    url: https://arxiv.org/abs/2109.01652
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Asal praktik

Penyetelan halus adalah bentuk transfer learning: pengetahuan umum dari [pra-pelatihan](/ensiklopedia/pra-pelatihan/) dipindahkan ke tugas khusus. ULMFiT (Howard & Ruder, 2018) termasuk yang memopulerkannya dalam pemrosesan bahasa. Metode itu menurunkan galat 18–24% pada sebagian besar dataset klasifikasi teks yang diuji. Dengan hanya 100 contoh berlabel, hasilnya setara dengan melatih dari nol memakai data 100 kali lebih banyak.

## Penyetelan instruksi

Varian yang kini paling umum adalah instruction tuning: model disetel pada banyak tugas yang dirumuskan sebagai perintah dalam bahasa alami. Wei dkk. (2021) menyetel model pralatih 137 miliar parameter pada lebih dari 60 tugas seperti itu dan menamainya FLAN. Pada jenis tugas yang belum pernah dilihatnya, FLAN mengungguli GPT-3 175B tanpa contoh (zero-shot) pada 20 dari 25 tugas yang dievaluasi.

## Ragam teknik

- **Penyetelan penuh:** semua [parameter](/ensiklopedia/parameter-model/) diperbarui; mahal untuk model besar.
- **Hemat parameter:** hanya sebagian kecil bobot tambahan yang dilatih, misalnya [LoRA](/ensiklopedia/lora/).
- **Berbasis preferensi:** model diarahkan dengan penilaian mana jawaban yang lebih baik, misalnya [RLHF](/ensiklopedia/rlhf/) dan [DPO](/ensiklopedia/dpo/).

Penyetelan mengubah bobot, sehingga butuh data dan komputasi. Cara yang tidak mengubah bobot, seperti prompting, contoh few-shot, dan [RAG](/ensiklopedia/rag/), sering dicoba lebih dulu karena lebih mudah diganti.
