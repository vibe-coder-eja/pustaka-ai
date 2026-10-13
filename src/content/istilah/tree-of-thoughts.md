---
title: "Tree of Thoughts"
aliases:
  - "ToT"
  - "Pohon pemikiran"
summary: "Kerangka inferensi yang membuat model menjelajahi beberapa jalur penalaran, menilai masing-masing, dan dapat melihat ke depan atau mundur, sebagai perluasan dari chain-of-thought."
category: dasar-ai
related:
  - chain-of-thought
  - self-consistency
  - reasoning
  - inference
sources:
  - title: "Yao dkk., “Tree of Thoughts: Deliberate Problem Solving with Large Language Models”, arXiv:2305.10601 (17 Mei 2023)"
    url: https://arxiv.org/abs/2305.10601
level: lanjut
status: ditinjau
updated: 2026-10-13
---

## Masalah yang dijawab

Model bahasa memutuskan token demi token dari kiri ke kanan, sehingga lemah pada tugas yang butuh eksplorasi, pandangan ke depan, atau ketika keputusan awal sangat menentukan. Tree of Thoughts memperlakukan potongan teks yang koheren (“pemikiran”) sebagai langkah antara; model mempertimbangkan beberapa jalur, menilai pilihan sendiri, dan dapat mundur bila perlu.

## Hasil yang dilaporkan

Pada tugas Game of 24, GPT-4 dengan chain-of-thought menyelesaikan 4% tugas, sedangkan metode ini mencapai 74%. Pengujian lain mencakup penulisan kreatif dan teka-teki silang mini. Angka tersebut berasal dari makalah dan bergantung pada tugas serta model yang diuji.
