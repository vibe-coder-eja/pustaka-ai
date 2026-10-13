---
title: "Refleksi mandiri"
aliases:
  - "Self-refine"
  - "Reflexion"
  - "Self-critique"
summary: "Teknik di mana model menilai keluarannya sendiri lalu memperbaikinya, atau menyimpan catatan pelajaran dari percobaan yang gagal untuk percobaan berikutnya, tanpa mengubah bobot model."
category: ai-agentik
related:
  - agent-loop
  - evals
  - llm-as-a-judge
  - memory
  - chain-of-thought
sources:
  - title: "Madaan dkk., “Self-Refine: Iterative Refinement with Self-Feedback”, arXiv:2303.17651 (30 Maret 2023)"
    url: https://arxiv.org/abs/2303.17651
  - title: "Shinn dkk., “Reflexion: Language Agents with Verbal Reinforcement Learning”, arXiv:2303.11366 (20 Maret 2023)"
    url: https://arxiv.org/abs/2303.11366
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Dua varian

**Self-Refine** (Madaan dkk.): satu model menghasilkan keluaran awal, memberi umpan balik atas keluarannya sendiri, lalu memperbaikinya, berulang kali. Tidak perlu data latih tambahan atau pembelajaran penguatan. Pada tujuh tugas yang diuji, keluaran hasil Self-Refine lebih disukai daripada satu kali jalan, dengan peningkatan sekitar 20% absolut secara rata-rata.

**Reflexion** (Shinn dkk.): agent merenungkan sinyal umpan balik dari tugas dan menyimpan teks refleksinya dalam memori episodik untuk memperbaiki keputusan pada percobaan berikutnya. Pada HumanEval, makalah melaporkan pass@1 91% dibanding 80% untuk GPT-4 sebelumnya.

## Catatan

Kedua hasil di atas dilaporkan oleh penulis metode pada tugas dan model tertentu pada 2023. Refleksi mandiri bukan pengganti penilaian yang independen; untuk itu lihat [evals](/ensiklopedia/evals/) dan [LLM-as-a-judge](/ensiklopedia/llm-as-a-judge/).
