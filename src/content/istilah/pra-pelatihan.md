---
title: "Pra-pelatihan"
aliases:
  - "Pretraining"
  - "Pre-training"
  - "Base model"
  - "Model dasar"
summary: "Tahap pertama melatih model pada korpus teks besar tanpa label tugas khusus; hasilnya model dasar (base model) yang kemudian dapat disetel untuk tugas atau perilaku tertentu."
category: dasar-ai
related:
  - penyetelan-halus
  - parameter-model
  - llm
  - hukum-penskalaan
  - few-shot-prompting
  - rlhf
sources:
  - title: "Devlin dkk., “BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding”, arXiv:1810.04805 (11 Oktober 2018)"
    url: https://arxiv.org/abs/1810.04805
  - title: "Brown dkk., “Language Models are Few-Shot Learners”, arXiv:2005.14165 (28 Mei 2020)"
    url: https://arxiv.org/abs/2005.14165
  - title: "Ouyang dkk., “Training language models to follow instructions with human feedback”, arXiv:2203.02155 (4 Maret 2022)"
    url: https://arxiv.org/abs/2203.02155
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Gagasan

Model belajar pola bahasa dari teks mentah lewat tugas yang tidak membutuhkan label buatan manusia, misalnya menebak token berikutnya (model autoregresif seperti GPT) atau menebak kata yang disembunyikan (BERT). Karena datanya cukup teks biasa, korpusnya bisa sangat besar. Yang dihasilkan adalah [parameter](/ensiklopedia/parameter-model/) yang menyimpan pengetahuan umum tentang bahasa dan dunia.

## Satu model dasar, banyak tugas

BERT (Devlin dkk., 2018) memperlihatkan bahwa satu model pralatih dapat [disetel](/ensiklopedia/penyetelan-halus/) hanya dengan menambah satu lapisan keluaran, lalu mencetak hasil terbaik pada sebelas tugas pemrosesan bahasa. GPT-3 (Brown dkk., 2020) melangkah lebih jauh: pada skala 175 miliar parameter, model dapat mengerjakan tugas baru hanya dari instruksi dan [beberapa contoh](/ensiklopedia/few-shot-prompting/) dalam prompt, tanpa pembaruan bobot sama sekali.

## Dari model dasar ke asisten

Model hasil pra-pelatihan saja pandai melanjutkan teks, tetapi belum tentu mengikuti maksud pengguna. Ouyang dkk. (2022) mencatat bahwa memperbesar model tidak otomatis membuatnya lebih baik mengikuti maksud pengguna. Karena itu mereka menambahkan penyetelan dengan contoh jawaban dari penulis manusia dan [RLHF](/ensiklopedia/rlhf/) untuk menghasilkan InstructGPT. Pola dua tahap ini, pra-pelatihan lalu penyetelan, menjadi dasar kebanyakan asisten AI.
