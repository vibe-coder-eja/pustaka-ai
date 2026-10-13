---
title: "DPO"
aliases:
  - "Direct Preference Optimization"
  - "Optimasi preferensi langsung"
summary: "Metode menyelaraskan model dengan preferensi manusia memakai fungsi loss klasifikasi sederhana, tanpa model imbalan terpisah dan tanpa pembelajaran penguatan seperti pada RLHF."
category: keselamatan-etika
related:
  - rlhf
  - alignment
  - llm
  - lora
sources:
  - title: "Rafailov dkk., “Direct Preference Optimization: Your Language Model is Secretly a Reward Model”, arXiv:2305.18290 (29 Mei 2023)"
    url: https://arxiv.org/abs/2305.18290
level: lanjut
status: ditinjau
updated: 2026-10-13
---

## Ide

[RLHF](/ensiklopedia/rlhf/) lazimnya melatih model imbalan dari perbandingan preferensi, lalu mengoptimalkan model bahasa dengan pembelajaran penguatan; prosedur itu rumit dan sering tidak stabil. Rafailov dkk. memperlihatkan bahwa parameterisasi tertentu pada model imbalan memungkinkan kebijakan optimal diperoleh dalam bentuk tertutup, sehingga masalah yang sama dapat diselesaikan dengan loss klasifikasi sederhana.

## Hasil

Menurut makalah, DPO stabil, berkinerja baik, dan ringan: tidak perlu mengambil sampel dari model selama penyetelan. Pada kendali sentimen, DPO melampaui RLHF berbasis PPO, dan pada peringkasan serta dialog satu giliran setara atau lebih baik.
