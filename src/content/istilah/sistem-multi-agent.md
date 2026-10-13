---
title: "Sistem multi-agent"
aliases:
  - "Multi-agent system"
  - "Orchestrator-workers"
summary: "Rancangan di mana beberapa agent atau panggilan model berbagi tugas; dalam pola orchestrator-workers, satu model pusat memecah tugas, mendelegasikan ke pekerja, lalu menggabungkan hasilnya."
category: ai-agentik
related:
  - agent
  - subagent
  - workflow-ai-agentik
  - a2a-agent2agent
  - harness-engineering
  - orkestrasi-agent
sources:
  - title: "Anthropic, “Building effective agents” (19 Desember 2024)"
    url: https://www.anthropic.com/engineering/building-effective-agents
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Pola orchestrator-workers

Menurut Anthropic, model pusat memecah tugas secara dinamis, mendelegasikannya ke model pekerja, dan menyintesis hasilnya. Berbeda dari paralelisasi biasa, subtugasnya tidak ditentukan lebih dulu tetapi ditentukan orkestrator sesuai masukan.

## Pola terkait

Tulisan yang sama memuat evaluator-optimizer: satu model menghasilkan jawaban, model lain memberi evaluasi dan umpan balik dalam loop. Pola lengkap dibahas di [workflow (AI agentik)](/ensiklopedia/workflow-ai-agentik/).
