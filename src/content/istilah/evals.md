---
title: "Evals"
aliases:
  - "Evaluasi agent"
  - "Eval"
summary: "Tes terukur untuk sistem AI: memberi masukan lalu menilai keluaran dengan logika penilaian, termasuk menilai jejak kerja agent, bukan hanya hasil akhir."
category: ai-agentik
related:
  - llm-as-a-judge
  - observability
  - regression
  - harness-engineering
  - refleksi-mandiri
  - tolok-ukur
  - uji-serang-tim-merah
  - dataset-acuan
  - evaluasi-lintasan
sources:
  - title: "Anthropic, “Demystifying evals for AI agents” (9 Januari 2026)"
    url: https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
level: menengah
status: ditinjau
updated: 2026-10-13
---

## Istilah menurut Anthropic

- **Eval**: tes bagi sistem AI; beri masukan, lalu terapkan logika penilaian pada keluarannya.
- **Task**: satu tes dengan masukan dan kriteria keberhasilan yang ditetapkan (juga disebut problem atau test case).
- **Grader**: logika yang menilai satu aspek kinerja; satu task dapat punya beberapa grader, tiap grader beberapa pemeriksaan.
- **Trial**: satu percobaan atas sebuah task. Karena keluaran model bervariasi, task biasanya dijalankan beberapa kali.
- **Transcript** (trace atau trajectory): catatan lengkap satu trial, mencakup keluaran, pemanggilan alat, penalaran, dan hasil antara.

## pass@k

Ukuran peluang agent menghasilkan setidaknya satu solusi benar dalam k percobaan; makin besar k, makin tinggi skornya.

## Mengapa penting

Tanpa eval, perubahan pada prompt, alat, atau model tidak bisa dibandingkan dan [regresi](/ensiklopedia/regression/) baru ketahuan setelah merugikan pengguna.
