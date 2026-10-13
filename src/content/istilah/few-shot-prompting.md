---
title: "Few-shot prompting"
aliases:
  - "Zero-shot dan few-shot"
  - "Pembelajaran dalam konteks"
summary: "Memberi model beberapa contoh tugas langsung di dalam prompt (few-shot), atau hanya instruksi tanpa contoh (zero-shot), tanpa mengubah bobot model."
category: dasar-ai
related:
  - prompt-engineering
  - prompt
  - llm
  - chain-of-thought
sources:
  - title: "Brown dkk., “Language Models are Few-Shot Learners”, arXiv:2005.14165 (28 Mei 2020)"
    url: https://arxiv.org/abs/2005.14165
level: dasar
status: ditinjau
updated: 2026-10-13
---

## Dari makalah GPT-3

Brown dkk. melatih GPT-3 (175 miliar parameter) dan mengujinya tanpa pembaruan gradien atau fine-tuning: tugas dan contoh demonstrasi diberikan murni lewat teks. Mereka menunjukkan bahwa memperbesar model sangat meningkatkan kinerja few-shot yang tidak spesifik pada satu tugas, kadang sebanding dengan metode fine-tuning terbaik saat itu.

## Istilah

Zero-shot berarti hanya instruksi; one-shot satu contoh; few-shot beberapa contoh. Makalah yang sama mencatat tugas yang masih sulit bagi few-shot dan masalah metodologis akibat data latih dari web.
