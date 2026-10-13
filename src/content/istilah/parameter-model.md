---
title: "Parameter Model"
aliases:
  - "Weights"
  - "Bobot model"
  - "Model parameters"
summary: "Angka-angka yang dipelajari model selama pelatihan dan menentukan cara masukan diolah menjadi keluaran; jumlahnya sering dipakai sebagai ukuran model, misalnya 7B atau 175B."
category: dasar-ai
related:
  - model
  - llm
  - pra-pelatihan
  - hukum-penskalaan
  - bobot-terbuka
  - mixture-of-experts
sources:
  - title: "Brown dkk., “Language Models are Few-Shot Learners”, arXiv:2005.14165 (28 Mei 2020)"
    url: https://arxiv.org/abs/2005.14165
  - title: "Ouyang dkk., “Training language models to follow instructions with human feedback”, arXiv:2203.02155 (4 Maret 2022)"
    url: https://arxiv.org/abs/2203.02155
  - title: "Open Source Initiative, “The Open Source AI Definition 1.0”"
    url: https://opensource.org/ai/open-source-ai-definition
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Apa yang disimpan

Jaringan saraf tersusun dari lapisan-lapisan operasi hitung, dan tiap operasi memakai nilai bobot (weights) serta bias. Selama [pra-pelatihan](/ensiklopedia/pra-pelatihan/), nilai-nilai itu digeser sedikit demi sedikit agar tebakan model makin tepat. Setelah pelatihan selesai, kumpulan nilai inilah yang dalam praktik disebut "model": berkas yang dapat disalin, disetel, dan dijalankan. Definisi AI sumber terbuka dari Open Source Initiative menyebut parameter sebagai bobot model atau setelan konfigurasi lain, termasuk checkpoint dari tahap pelatihan.

## Jumlah parameter sebagai ukuran

Huruf B pada nama model berarti miliar (billion) parameter. GPT-3, misalnya, memiliki 175 miliar parameter, sepuluh kali lebih banyak daripada model bahasa non-sparse sebelumnya menurut Brown dkk. (2020). Kajian [hukum penskalaan](/ensiklopedia/hukum-penskalaan/) menunjukkan kinerja cenderung membaik secara teratur bila parameter, data, dan komputasi ditambah bersama-sama.

## Batas ukuran ini

Jumlah parameter bukan satu-satunya penentu mutu. Dalam penilaian manusia, keluaran InstructGPT 1,3 miliar parameter lebih disukai daripada GPT-3 175 miliar, meski parameternya 100 kali lebih sedikit (Ouyang dkk., 2022). Pada arsitektur [Mixture of Experts](/ensiklopedia/mixture-of-experts/), hanya sebagian parameter yang aktif untuk tiap token, sehingga jumlah total dan jumlah aktif perlu dibedakan.
