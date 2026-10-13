---
title: "LLM-as-a-judge"
aliases:
  - "LLM sebagai juri"
summary: "Memakai model bahasa yang kuat untuk menilai kualitas keluaran model lain sebagai perkiraan murah dari penilaian manusia, dengan bias yang perlu diwaspadai."
category: ai-agentik
related:
  - evals
  - refleksi-mandiri
  - rlhf
  - hallucination
sources:
  - title: "Zheng dkk., “Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena”, arXiv:2306.05685 (9 Juni 2023)"
    url: https://arxiv.org/abs/2306.05685
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Gagasan

Menilai asisten percakapan itu sulit karena tolok ukur lama kurang menangkap preferensi manusia. Zheng dkk. menguji penggunaan model yang kuat sebagai juri pada pertanyaan terbuka, dan memperkenalkan MT-bench (pertanyaan multi-giliran) serta Chatbot Arena (adu model oleh publik).

## Temuan

Juri seperti GPT-4 sepakat dengan preferensi manusia lebih dari 80%, setara tingkat kesepakatan antarmanusia. Namun penulis mencatat bias: bias posisi, bias kepanjangan jawaban, bias menyukai keluaran sendiri, serta kemampuan bernalar yang terbatas. Karena itu juri model dipakai bersama pemeriksaan lain, bukan sebagai kebenaran akhir.
