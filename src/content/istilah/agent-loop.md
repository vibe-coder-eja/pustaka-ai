---
title: Agent Loop
aliases:
  - "Loop agent"
  - "Agentic loop"
summary: Siklus kerja agent yang biasanya mencakup memahami instruksi, memilih tindakan, menggunakan alat, membaca hasil, lalu melanjutkan sampai tugas selesai.
category: ai-agentik
related:
  - planning
  - tool-calling
  - react-pola-agent
  - refleksi-mandiri
  - evals
  - harness-engineering
sources:
  - title: "Yao dkk., “ReAct: Synergizing Reasoning and Acting in Language Models”, arXiv:2210.03629 (6 Oktober 2022)"
    url: https://arxiv.org/abs/2210.03629
  - title: "Anthropic, “Building effective agents” (19 Desember 2024)"
    url: https://www.anthropic.com/engineering/building-effective-agents
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Bentuk dasar

Dalam penjelasan Anthropic, agent pada dasarnya adalah model yang memakai alat dalam loop, dengan umpan balik dari lingkungan di setiap langkah. Pola ReAct (Yao dkk., 2022) adalah bentuk awalnya: berpikir, bertindak, mengamati hasil, lalu menalar ulang.

## Yang membuat loop sehat

Loop yang baik punya kondisi berhenti dan cara memeriksa hasil. Tanpa pemeriksaan independen, agent bisa mengira pekerjaannya selesai padahal belum; karena itu penilaian ([evals](/ensiklopedia/evals/)) dan pembatasan jumlah langkah penting. Lihat juga [refleksi mandiri](/ensiklopedia/refleksi-mandiri/) dan [harness engineering](/ensiklopedia/harness-engineering/).
