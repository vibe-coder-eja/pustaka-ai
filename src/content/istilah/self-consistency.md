---
title: "Self-consistency"
aliases:
  - "Konsistensi diri"
summary: "Strategi dekode yang mengambil beberapa jalur penalaran lalu memilih jawaban yang paling konsisten, sebagai pengganti satu jawaban greedy pada chain-of-thought."
category: dasar-ai
related:
  - chain-of-thought
  - tree-of-thoughts
  - reasoning
  - inference
sources:
  - title: "Wang dkk., “Self-Consistency Improves Chain of Thought Reasoning in Language Models”, arXiv:2203.11171 (21 Maret 2022)"
    url: https://arxiv.org/abs/2203.11171
level: lanjut
status: ditinjau
updated: 2026-10-13
---

## Cara kerja

Alih-alih memakai satu jalur penalaran, model diminta menghasilkan banyak jalur yang beragam, lalu jawaban akhir dipilih dengan memarginalkan jalur-jalur itu, yaitu jawaban yang paling sering muncul. Intuisinya: soal penalaran yang kompleks biasanya punya beberapa cara berpikir yang bermuara pada satu jawaban benar.

## Hasil yang dilaporkan

Peningkatan atas chain-of-thought biasa pada GSM8K (+17,9%), SVAMP (+11,0%), AQuA (+12,2%), StrategyQA (+6,4%), dan ARC-challenge (+3,9%). Harganya adalah biaya komputasi: setiap pertanyaan dijawab berkali-kali.
