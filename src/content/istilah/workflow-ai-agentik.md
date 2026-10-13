---
title: Workflow (AI agentik)
aliases:
  - "Workflow vs agent"
  - "Pola workflow"
summary: Sistem yang mengorkestrasi model bahasa dan alat melalui alur kode yang sudah ditentukan lebih dulu, berbeda dari agent yang mengarahkan prosesnya sendiri.
category: ai-agentik
related:
  - agent
  - agent-loop
  - sistem-multi-agent
  - react-pola-agent
  - evals
  - rantai-prompt
sources:
  - title: "Anthropic, “Building effective agents” (19 Desember 2024)"
    url: https://www.anthropic.com/engineering/building-effective-agents
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Workflow dan agent

Anthropic membedakan keduanya. **Workflow** adalah sistem yang mengorkestrasi model dan alat lewat jalur kode yang ditentukan sebelumnya. **Agent** adalah sistem tempat model mengarahkan proses dan pemakaian alatnya sendiri secara dinamis, sehingga ia tetap mengendalikan cara menyelesaikan tugas.

## Lima pola workflow

1. **Prompt chaining**: tugas dipecah menjadi langkah berurutan; keluaran satu panggilan menjadi masukan berikutnya.
2. **Routing**: masukan diklasifikasikan lalu diarahkan ke tugas lanjutan yang lebih khusus.
3. **Parallelization**: beberapa panggilan berjalan bersamaan, baik membagi tugas menjadi bagian independen (*sectioning*) maupun menjalankan tugas yang sama berkali-kali (*voting*).
4. **Orchestrator-workers**: model pusat memecah tugas secara dinamis, mendelegasikannya, dan menggabungkan hasil ([sistem multi-agent](/ensiklopedia/sistem-multi-agent/)).
5. **Evaluator-optimizer**: satu model menghasilkan jawaban, model lain mengevaluasi dan memberi umpan balik dalam loop.

## Memilih

Workflow cocok bila langkahnya dapat diprediksi; agent bila langkahnya tidak dapat ditentukan di depan. Tanpa alasan kuat, mulailah dari yang lebih sederhana.
