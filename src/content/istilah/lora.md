---
title: "LoRA"
aliases:
  - "Low-Rank Adaptation"
summary: "Teknik fine-tuning hemat parameter yang membekukan bobot model dan melatih hanya matriks peringkat rendah yang disisipkan di tiap lapisan."
category: dasar-ai
related:
  - model
  - llm
  - distilasi-model
  - dpo
sources:
  - title: "Hu dkk., “LoRA: Low-Rank Adaptation of Large Language Models”, arXiv:2106.09685 (17 Juni 2021)"
    url: https://arxiv.org/abs/2106.09685
level: lanjut
status: ditinjau
updated: 2026-10-13
---

## Masalah

Menyetel ulang seluruh parameter model besar sangat mahal; menyimpan satu salinan penuh per tugas, misalnya untuk GPT-3 175B, tidak praktis.

## Cara kerja dan hasil

LoRA membekukan bobot model yang sudah dilatih dan menyisipkan matriks dekomposisi berperingkat rendah yang dapat dilatih pada tiap lapisan Transformer. Dibanding fine-tuning penuh GPT-3 175B dengan Adam, LoRA mengurangi parameter yang dilatih hingga 10.000 kali dan kebutuhan memori GPU sekitar 3 kali, dengan mutu setara atau lebih baik pada model yang diuji dan tanpa tambahan latensi inferensi.
